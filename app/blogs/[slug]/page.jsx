import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import Image from 'next/image';
// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found'
        };
    }

    return {
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
        openGraph: {
            title: post.title.rendered,
            description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
            images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                ? [{ url: post._embedded['wp:featuredmedia'][0].source_url }]
                : [],
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modified,
            authors: post._embedded?.author?.[0]?.name,
        },
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    try {
        const posts = await getAllPosts();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// Add revalidate to enable ISR
export const revalidate = 3600; // Revalidate every hour

const BlogPost = async ({ params }) => {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    // Get the featured image URL from embedded media
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
    const imageSizes = featuredImage?.media_details?.sizes;

    // Get the appropriate image size based on screen size
    const imageUrl = {
        small: imageSizes?.medium?.source_url || featuredImage?.source_url,
        medium: imageSizes?.large?.source_url || featuredImage?.source_url,
        large: imageSizes?.full?.source_url || featuredImage?.source_url
    };

    return (
        <div className="container mx-auto py-5 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Title Section */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {/* Featured Image Section */}
                {imageUrl.small && (
                    <div className="relative w-full mb-6 aspect-video">
                        <Image
                            src={imageUrl.large}
                            alt={post.title.rendered}
                            fill
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 90vw,
                                   1200px"
                            className="object-cover rounded-lg shadow-lg"
                            priority={true}
                            quality={75}
                            style={{
                                maxHeight: '600px'
                            }}
                        />
                    </div>
                )}

                {/* Meta Information */}
                <div className="flex justify-center items-center gap-4 text-gray-600 mb-8 text-sm md:text-base">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    {post._embedded?.author?.[0]?.name && (
                        <>
                            <span>•</span>
                            <span>{post._embedded.author[0].name}</span>
                        </>
                    )}
                </div>

                {/* Content Section */}
                <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    className="prose prose-lg max-w-none 
                             sm:prose-base 
                             prose-headings:font-bold 
                             prose-a:text-blue-600 
                             prose-img:rounded-lg 
                             prose-img:shadow-lg
                             prose-img:mx-auto
                             prose-img:w-full
                             prose-img:object-cover
                             prose-img:aspect-video
                             md:prose-img:aspect-auto"
                />
            </article>
        </div>
    );
};

export default BlogPost;
