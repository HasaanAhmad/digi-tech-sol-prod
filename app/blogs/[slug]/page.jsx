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
    const imageUrl = featuredImage?.source_url;

    // Get the most appropriate image size
    const imageSizes = featuredImage?.media_details?.sizes;
    const selectedSize = imageSizes?.['large'] || imageSizes?.['medium_large'] || imageSizes?.['medium'];

    // Fallback dimensions if sizes are not available
    const defaultWidth = 1024;
    const defaultHeight = 682;

    return (
        <div className="container mx-auto py-5 px-4">
            <article className="prose lg:prose-xl max-w-none py-5">
                <h1 className="text-4xl font-bold mb-6"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {imageUrl && (
                    <div className="relative w-full mb-6">
                        <Image
                            src={selectedSize?.source_url || imageUrl}
                            alt={post.title.rendered}
                            width={selectedSize?.width || defaultWidth}
                            height={selectedSize?.height || defaultHeight}
                            className="w-full h-auto"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvLTM3Pzw2Nz43LC8/RUhAQD5JTUlPNzc7TUVMSElJSUn/2wBDAR"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
