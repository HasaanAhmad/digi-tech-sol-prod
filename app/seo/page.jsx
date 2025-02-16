import Image from 'next/image'

import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'

export const metadata = {
    title: 'Search Engine Optimization Services in USA | SEO Services',
    description: "Boost your website rankings with Digital Tech Solutions' professional search engine optimization services in USA. Drive more traffic, increase visibility, and improve conversions with our expert strategies."
}

const seoTestimonials = [
    {
        name: "Sarah Mitchell",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        quote: "Digital Tech Solution transformed our online presence with their expert SEO strategies. Our website now ranks higher on Google, bringing in more traffic and conversions. Their professionalism and results-driven approach are outstanding",
        stars: 5
    },
    {
        name: "Emily Brown",
        image: "https://randomuser.me/api/portraits/women/77.jpg",
        quote: "Thanks to Digital Tech Solution, our search rankings improved significantly. Their SEO tactics increased organic traffic and helped us attract the right audience. Highly recommend their expertise for anyone serious about online growth",
        stars: 5
    },
    {
        name: "Robert James",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
        quote: "The team at Digital Tech Solution optimized our website and boosted our visibility. Their keyword strategy, technical SEO, and content improvements have led to measurable growth. Excellent service with impressive results",
        stars: 5
    },
    {
        name: "Jason Hill",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
        quote: "I saw a massive increase in website traffic after working with Digital Tech Solution. Their SEO expertise helped me rank higher, attract more readers, and grow my online presence effortlessly. Best decision ever",
        stars: 5
    },
    {
        name: "Lisa Green",
        image: "https://randomuser.me/api/portraits/women/66.jpg",
        quote: "Our startup struggled with online visibility until we partnered with Digital Tech Solution. Their SEO strategies skyrocketed our rankings, and now we're attracting more customers than ever. A game-changer for our business",
        stars: 5
    },
    {
        name: "Michael Carter",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        quote: "Digital Tech Solution took our real estate website from invisible to the top of search results. Their local SEO strategies and optimization techniques helped us gain more leads. Exceptional service with real results",
        stars: 4.5
    }
]

export default function SEO() {
    return (
        <>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-headerseo" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">SEO Service</h1>
                        <h3 className="text-white">Boost rankings with expert SEO strategies</h3>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Main Content */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Maximizing Online Presence for Every</h1>
                        <h2 className="subheading">Business</h2>
                        <p className="content-paragraph">
                            We specialize in delivering powerful and customized SEO solutions tailored to every business. Our expert team ensures higher rankings, increased organic traffic, and a strong online presence through strategic optimization and data-driven insights.
                        </p>
                        <p className="content-paragraph">
                            Whether you're a startup or an established enterprise, our SEO strategies are designed to boost visibility, improve search engine performance, and drive sustainable growth. With innovative techniques and best practices, we help elevate your brand in the digital landscape.
                        </p>
                    </div>

                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of SEO Services offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {[
                                {
                                    icon: "search",
                                    title: "Keyword Research & Strategy",
                                    description: "Identify high-performing keywords to target the right audience and improve search rankings effectively."
                                },
                                {
                                    icon: "code",
                                    title: "On-Page Optimization",
                                    description: "Optimize meta tags, headings, content, and images to boost website relevance and ranking on search engines."
                                },
                                {
                                    icon: "link",
                                    title: "High-Quality Link Building",
                                    description: "Build authoritative backlinks to enhance domain credibility and improve search engine visibility."
                                },
                                {
                                    icon: "mobile-alt",
                                    title: "Mobile SEO Optimization",
                                    description: "Ensure a responsive, fast-loading website for mobile users, improving search rankings and user experience."
                                },
                                {
                                    icon: "chart-line",
                                    title: "Technical SEO",
                                    description: "Improve site structure, speed, indexing, and crawlability to enhance overall search performance."
                                },
                                {
                                    icon: "pen-fancy",
                                    title: "SEO Content Strategy",
                                    description: "Create engaging, keyword-optimized content that drives organic traffic and improves search rankings."
                                },
                                {
                                    icon: "map-marker-alt",
                                    title: "Local SEO",
                                    description: "Optimize your online presence to rank higher in local search results and attract nearby customers."
                                },
                                {
                                    icon: "chart-pie",
                                    title: "SEO Performance Tracking",
                                    description: "Monitor key metrics, rankings, and traffic insights to measure and refine your SEO strategy."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="grid-item">
                                    <i className={`fas fa-${feature.icon}`}></i>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content End */}

            {/* Testimonials Section */}
            <Testimonials testimonials={seoTestimonials} />
            {/* Quote Request Section */}
            <QuoteRequest />
            <Vendors />
        </>
    )
}