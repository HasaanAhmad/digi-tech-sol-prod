
import Image from 'next/image'

import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'

export const metadata = {
    title: 'Web Development Services in USA | Web Development Company',
    description: 'Digital Tech Solutions is a leading website development company offering cutting-edge web design and website development services in USA. Build a powerful online presence with our expert solutions'
}

const webDevTestimonials = [
    {
        name: "Colette Brown",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Digital Tech Solution built a sleek, user-friendly website for our company. Their team understood our needs perfectly and delivered a high-performing site that exceeded our expectations. Their professionalism and expertise made the process seamless.",
        stars: 5
    },
    {
        name: "Sydney Stewart",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
        quote: "Our previous website was outdated and slow, but Digital Tech Solution transformed it into a modern, responsive platform. Their attention to detail, creativity, and technical skills made a huge impact on our online presence",
        stars: 5
    },
    {
        name: "Amanda Parker",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        quote: "I had an exceptional experience working with Digital Tech Solution—a remarkable team of professionals. Their responsiveness and consistent communication throughout the process were impressive. In the realm of web development and graphic design.",
        stars: 5
    },
    {
        name: "WheelLifeConnections",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        quote: "Working with Digital Tech Solution was a fantastic experience. They designed an elegant and fully functional e-commerce website that boosted our sales. Their team was highly responsive and efficient throughout the entire process",
        stars: 5
    },
    {
        name: "Rachel Summers",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "I'm beyond impressed with the website Digital Tech Solution created for our business. It's fast, visually appealing, and perfectly aligned with our brand. Their expertise and dedication truly set them apart from the competition",
        stars: 5
    },
    {
        name: "Sam Fletcher",
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        quote: "Our new website, developed by Digital Tech Solution, has transformed the way we connect with clients. It's modern, responsive, and optimized for performance. Their team was knowledgeable, communicative, and a pleasure to work with",
        stars: 4.5
    }
]

const webDevFeatures = [
    {
        icon: "mobile-alt",
        title: "Mobile Responsiveness",
        description: "Ensure your site adapts to every screen size smartphone, tablet, or desktop so users always enjoy a seamless experience."
    },
    {
        icon: "sitemap",
        title: "Intuitive UI/UX & Navigation",
        description: "Simplify site structure and user flows, helping visitors find what they need quickly and easily."
    },
    {
        icon: "code",
        title: "Modern Code Practices",
        description: "Employ clean, up‑to‑date coding standards to enhance security, performance, and maintainability."
    },
    {
        icon: "palette",
        title: "Consistent Branding",
        description: "Maintain a cohesive look and feel from colors and fonts to iconography to reinforce brand recognition and trust."
    },
    {
        icon: "edit",
        title: "CMS Implementation",
        description: "Empower your team to add or update text, images, and other content on demand no coding required."
    },
    {
        icon: "plug",
        title: "Custom Features & Integrations",
        description: "Elevate your site beyond templates with specialized functionality and third party integrations tailored to your business needs."
    },
    {
        icon: "shield-alt",
        title: "Security & Maintenance",
        description: "Protect your site with routine audits, SSL encryption, and regular patches to prevent data breaches and downtime."
    },
    {
        icon: "rocket",
        title: "Performance Optimization",
        description: "Streamline assets, optimize loading speeds, and provide a swift, user friendly experience that boosts engagement."
    },
]

export default function WebsiteDevelopment() {
    return (
        <>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-headerw" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Website Development Services</h1>
                        <h3 className="text-white">Built-for-Experience, Scalable Websites</h3>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Main Content Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Crafting distinctive websites and web applications tailored to every</h1>
                        <h2 className="subheading">Business</h2>
                        <p className="content-paragraph">
                            We specialize in crafting unique and customized websites and web applications tailored to every business. Our expert team ensures seamless functionality, engaging design, and an exceptional user experience.
                        </p>
                        <p className="content-paragraph">
                            Whether you're a startup or an established enterprise, our web solutions are designed to drive growth and success. With innovative, responsive, and user-friendly designs, we help elevate your brand in the digital world.
                        </p>
                    </div>

                    <div className="image-grid">
                        <div className="image-box">
                            <Image
                                src="/img/website-1.png"
                                alt="Website Design Sample 1"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-2.jpg"
                                alt="Website Design Sample 2"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-3.png"
                                alt="Website Design Sample 3"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-4.jpg"
                                alt="Website Design Sample 4"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-5.png"
                                alt="Website Design Sample 5"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-6.jpg"
                                alt="Website Design Sample 6"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-7.jpg"
                                alt="Website Design Sample 7"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-8.jpg"
                                alt="Website Design Sample 8"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-9.jpg"
                                alt="Website Design Sample 9"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-10.jpg"
                                alt="Website Design Sample 10"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-12.jpg"
                                alt="Website Design Sample 11"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-box">
                            <Image
                                src="/img/website-11.jpg"
                                alt="Website Design Sample 12"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content End */}

            {/* Features Section */}
            <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                <h2>Top Features of Website Development Service offered by Digital Tech Solutions</h2>
                <div className="icon-grid">
                    {webDevFeatures.map((feature, index) => (
                        <div key={index} className="grid-item">
                            <i className={`fas fa-${feature.icon}`}></i>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials testimonials={webDevTestimonials} />
            {/* Quote Request Section */}
            <QuoteRequest />
            <Vendors />

            {/* Vendors Section */}
        </>
    )
}