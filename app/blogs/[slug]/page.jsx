import { getPostBySlug, getAllPosts, getFeaturedMediaDetails } from '@/lib/wordpress';
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

        // Pre-fetch media for each post
        await Promise.all(posts.map(async (post) => {
            if (post.featured_media) {
                await getFeaturedMediaDetails(post.featured_media);
            }
        }));

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

    // Get featured media details if available
    let featuredMedia = null;
    if (post.featured_media) {
        featuredMedia = await getFeaturedMediaDetails(post.featured_media);
    }

    return (
        <div className="container mx-auto py-5 px-4">
            <article className="prose lg:prose-xl max-w-none py-5">
                <h1 className="text-4xl font-bold mb-6"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {featuredMedia && (
                    <div className="relative w-full mb-6">
                        <Image
                            src={featuredMedia.media_details.sizes.large?.source_url || featuredMedia.source_url}
                            alt={post.title.rendered}
                            width={featuredMedia.media_details.sizes.large?.width || featuredMedia.media_details.width}
                            height={featuredMedia.media_details.sizes.large?.height || featuredMedia.media_details.height}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                )}

                <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    className="mt-6"
                />
            </article>
        </div>
    );
};

export default BlogPost;
