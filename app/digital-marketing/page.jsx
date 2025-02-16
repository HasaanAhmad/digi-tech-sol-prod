import Image from 'next/image'

import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'

export const metadata = {
    title: 'Digital Marketing Services in USA | Social Media Marketing Services',
    description: 'Boost your brand with result-driven digital marketing services in USA. Get SEO, PPC, social media, and more to drive traffic and conversions'
}

const digitalMarketingTestimonials = [
    {
        name: "Jessica Taylor",
        image: "https://randomuser.me/api/portraits/women/49.jpg",
        quote: "Digital Tech Solution transformed our digital marketing strategy. Their targeted campaigns, social media expertise, and PPC management helped us significantly boost our sales and online presence. Highly recommended for driving results",
        stars: 5
    },
    {
        name: "Jessica Lee",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
        quote: "The team at Digital Tech Solution crafted the perfect social media strategy for my brand. Their content marketing and ad campaigns brought in more followers and engagement than ever before. They truly understand digital marketing",
        stars: 5
    },
    {
        name: "Chris Johnson",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        quote: "Digital Tech Solution delivered beyond expectations with their comprehensive digital marketing services. From SEO to email marketing, their strategies helped us reach a wider audience and increase our customer base. The results speak for themselves",
        stars: 5
    },
    {
        name: "Rachel Davis",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
        quote: "Partnering with Digital Tech Solution for our restaurant's digital marketing was the best decision. Their local SEO and targeted ads brought in new customers and increased reservations. They truly know how to drive growth",
        stars: 5
    },
    {
        name: "Andrew Scott",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
        quote: "The digital marketing efforts of Digital Tech Solution helped our SaaS business scale quickly. They optimized our ad campaigns and provided exceptional content marketing strategies. We saw substantial growth in both leads and conversions",
        stars: 5
    },
    {
        name: "Sam Fletcher",
        image: "https://randomuser.me/api/portraits/men/74.jpg",
        quote: "Digital Tech Solution boosted our online presence with their stellar digital marketing campaigns. From social media strategies to Google ads, they helped us attract more clients and grow our real estate business. Fantastic service",
        stars: 4.5
    }
]

export default function DigitalMarketing() {
    return (
        <>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-headerdg" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Digital Marketing services</h1>
                        <h3 className="text-white">Drive growth with targeted digital marketing</h3>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Main Content Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">
                            Accelerating Business Growth with
                        </h1>
                        <h2 className="subheading">
                            Digital Marketing
                        </h2>
                        <p className="content-paragraph">
                            We specialize in data-driven digital marketing solutions tailored to every business. Our expert team crafts result-oriented strategies, including SEO, social media, PPC, and content marketing, to enhance brand visibility and drive engagement
                        </p>
                        <p className="content-paragraph">
                            From targeted campaigns to conversion optimization, we help businesses attract the right audience, boost sales, and maximize ROI. With innovative techniques and strategic execution, we ensure your brand stands out in the digital landscape
                        </p>
                    </div>

                    {/* Image Grid Section */}
                    <div className="image-grid">
                        {[
                            'dg-10.png', 'dg-2.jpg', 'dg-3.png', 'dg-4.png',
                            'dg-5.jpeg', 'dg-6.png', 'dg-7.jpg', 'dg-8.jpg',
                            'dg-9.jpg', 'dg-10.png', 'dg-11.jpg', 'dg-12.png'
                        ].map((img, index) => (
                            <div key={index} className="image-box">
                                <Image
                                    src={`/img/${img}`}
                                    alt={`Design ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Features Section Start */}
                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of Digital Marketing Services offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {[
                                {
                                    icon: "fas fa-bullhorn",
                                    title: "Comprehensive Marketing Strategy",
                                    description: "Develop tailored marketing strategies to boost brand awareness, drive engagement, and maximize ROI."
                                },
                                {
                                    icon: "fas fa-chart-line",
                                    title: "SEO & Search Marketing",
                                    description: "Improve organic rankings, optimize content, and enhance search engine visibility to attract quality traffic."
                                },
                                {
                                    icon: "fas fa-ad",
                                    title: "Pay-Per-Click (PPC) Advertising",
                                    description: "Run high-performing ad campaigns on Google Ads, Facebook, and other platforms for targeted conversions."
                                },
                                {
                                    icon: "fas fa-users",
                                    title: "Social Media Marketing",
                                    description: "Engage audiences with strategic content, ads, and campaigns across various social media platforms."
                                },
                                {
                                    icon: "fas fa-mail-bulk",
                                    title: "Email Marketing & Automation",
                                    description: "Create personalized email campaigns that nurture leads and drive customer engagement."
                                },
                                {
                                    icon: "fas fa-pen-fancy",
                                    title: "Content Marketing",
                                    description: "Develop high-quality blogs, articles, and multimedia content that educates and attracts potential customers."
                                },
                                {
                                    icon: "fas fa-chart-pie",
                                    title: "Analytics & Performance Tracking",
                                    description: "Use data-driven insights to optimize campaigns, measure success, and improve marketing strategies."
                                },
                                {
                                    icon: "fas fa-mobile-alt",
                                    title: "Mobile Responsiveness",
                                    description: "Ensure your site adapts to every screen size smartphone, tablet, or desktop so users always enjoy a seamless experience."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="grid-item">
                                    <i className={feature.icon}></i>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials testimonials={digitalMarketingTestimonials} />
            <QuoteRequest />
            <Vendors />
        </>
    )
}