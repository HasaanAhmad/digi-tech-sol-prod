"use client"
import Link from 'next/link'

export default function Services() {
    const services = [
        {
            icon: "fa-code",
            title: "Web Development",
            description: "Expert web development for responsive, dynamic, and scalable solutions",
            link: "/website-development",
            delay: "0.3s"
        },
        {
            icon: "fa-chart-pie",
            title: "Data Analytics",
            description: "Data analytics for actionable insights and smarter decisions",
            link: "/data-analytics",
            delay: "0.6s"
        },
        {
            icon: "fa-paint-brush",
            title: "Graphics Design",
            description: "Creative graphic design for impactful branding and visuals",
            link: "/graphics",
            delay: "0.9s"
        },
        {
            icon: "fa-bullhorn",
            title: "Digital Marketing",
            description: "Data-driven digital marketing for maximum reach and engagement",
            link: "/digital-marketing",
            delay: "0.3s"
        },
        {
            icon: "fa-search",
            title: "SEO Optimization",
            description: "Result-driven SEO to boost rankings and online visibility",
            link: "/seo",
            delay: "0.6s"
        },
        {
            icon: "fa-video",
            title: "Video Editing",
            description: "Professional video editing for engaging and high-quality content",
            link: "/video-editing",
            delay: "0.6s"
        }
    ]

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                    <h1 className="mb-0">Custom IT and Digital Solutions for Your Successful Business</h1>
                </div>
                <div className="row g-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={service.delay}>
                            <div className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className={`fa ${service.icon} `}></i>
                                </div>
                                <h4 className="mb-3">{service.title}</h4>
                                <p className="m-0">{service.description}</p>
                                <Link className="btn btn-lg btn-primary rounded" href={service.link}>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 