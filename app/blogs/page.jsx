import Image from 'next/image'
import Link from 'next/link'
import Vendors from '@/components/home/Vendors'
import { getAllPosts } from '@/lib/wordpress'

export default async function BlogPage() {
    // Fetch all posts
    const posts = await getAllPosts();

    // Get featured/latest post (first post)
    const featuredPost = posts[0];

    // Get remaining posts for different sections
    const smallPosts = posts.slice(1, 4);
    const recentPosts = posts.slice(4, 6);
    const topNews = posts.slice(0, 5);

    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-headerblog" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Latest Updates and News</h1>
                        <h5 className="text-white">of Tech and Digital Industry</h5>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <section className="blog-section container">
                {/* Latest News Bar */}
                <div className="latest-news-bar mb-4 bg-light p-3 rounded">
                    <div className="latest-news-content d-flex justify-content-between align-items-center">
                        <div className="latest-news-title fw-bold">Latest News</div>
                        <div className="latest-news-date text-muted">
                            {new Date().toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

                {/* Main Blog Row */}
                <div className="row mb-5">
                    {/* Featured Post */}
                    {featuredPost && (
                        <div className="col-lg-8 mb-4">
                            <Link href={`/blogs/${featuredPost.slug}`} className="text-decoration-none">
                                <div className="featured-post card h-100 border-0 shadow-sm">
                                    <Image
                                        src={featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/img/blog-default.jpg'}
                                        alt={featuredPost.title.rendered}
                                        width={800}
                                        height={500}
                                        className="card-img-top"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-4">
                                        <h2 className="card-title h3 text-dark"
                                            dangerouslySetInnerHTML={{ __html: featuredPost.title.rendered }} />
                                        <div className="meta text-muted mb-3">
                                            {new Date(featuredPost.date).toLocaleDateString()} |
                                            {featuredPost._embedded?.author?.[0]?.name}
                                        </div>
                                        <div className="card-text text-secondary"
                                            dangerouslySetInnerHTML={{ __html: featuredPost.excerpt.rendered }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Right Side Smaller Posts */}
                    <div className="col-lg-4">
                        <div className="small-posts d-flex flex-column gap-4">
                            {smallPosts.map((post) => (
                                <Link key={post.id} href={`/blogs/${post.slug}`} className="text-decoration-none">
                                    <div className="card border-0 shadow-sm h-100">
                                        <Image
                                            src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/img/blog-default.jpg'}
                                            alt={post.title.rendered}
                                            width={400}
                                            height={200}
                                            className="card-img-top"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="card-body p-3">
                                            <h3 className="card-title h5 text-dark"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                            <div className="meta small text-muted">
                                                {new Date(post.date).toLocaleDateString()} |
                                                {post._embedded?.author?.[0]?.name}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recents and Top News */}
                <div className="row">
                    {/* Recent Posts */}
                    <div className="col-lg-8 mb-4">
                        <h3 className="mb-4">Recent Posts</h3>
                        <div className="recent-posts">
                            {recentPosts.map((post) => (
                                <Link key={post.id} href={`/blogs/${post.slug}`} className="text-decoration-none">
                                    <div className="card mb-4 border-0 shadow-sm">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <Image
                                                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/img/blog-default.jpg'}
                                                    alt={post.title.rendered}
                                                    width={300}
                                                    height={200}
                                                    className="img-fluid rounded-start h-100"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="card-title h5 text-dark"
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                    <div className="meta small text-muted mb-2">
                                                        {new Date(post.date).toLocaleDateString()} |
                                                        {post._embedded?.author?.[0]?.name}
                                                    </div>
                                                    <div className="card-text text-secondary"
                                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Top News */}
                    <div className="col-lg-4">
                        <h3 className="mb-4">Top News</h3>
                        <div className="search-bar mb-4">
                            <input type="text" placeholder="Search..." className="form-control" />
                        </div>
                        <div className="top-news">
                            {topNews.map((post) => (
                                <Link key={post.id} href={`/blogs/${post.slug}`} className="text-decoration-none">
                                    <div className="card mb-3 border-0 shadow-sm">
                                        <div className="row g-0 p-2">
                                            <div className="col-3">
                                                <Image
                                                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/img/blog-default.jpg'}
                                                    alt={post.title.rendered}
                                                    width={80}
                                                    height={80}
                                                    className="img-fluid rounded"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="col-9">
                                                <div className="card-body p-0 ps-3">
                                                    <h4 className="card-title h6 text-dark mb-1"
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                    <div className="meta small text-muted">
                                                        {new Date(post.date).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendors Section */}
            <Vendors />
        </>
    )
}

export const metadata = {
    title: 'Blog | Digital Tech Solutions',
    description: 'Stay updated with the latest trends in website development, graphic design, SEO, video editing, and digital marketing on the Digital Tech Solutions blog.'
}