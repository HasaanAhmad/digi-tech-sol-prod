"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                            <h1 className="mb-0">The Best IT and Digital Solutions for Business Growth</h1>
                        </div>
                        <p className="mb-4">
                            Digital Tech Solutions offers comprehensive digital and tech services,
                            from website development and graphics to advanced data analytics,
                            data science, digital marketing, SEO, and video editing. Our experienced
                            team delivers cutting-edge solutions that drive engagement, enhance brand
                            identity, and deliver measurable results for every client.
                        </p>

                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3">
                                    <i className="fa fa-check text-primary me-3"></i>Award Winning
                                </h5>
                                <h5 className="mb-3">
                                    <i className="fa fa-check text-primary me-3"></i>Professional Staff
                                </h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3">
                                    <i className="fa fa-check text-primary me-3"></i>24/7 Support
                                </h5>
                                <h5 className="mb-3">
                                    <i className="fa fa-check text-primary me-3"></i>Fair Prices
                                </h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded"
                                style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+923110378575</h4>
                            </div>
                        </div>

                        <Link href="/quote"
                            className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                            data-wow-delay="0.9s">
                            Request A Quote
                        </Link>
                    </div>

                    <div className="col-lg-5" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <Image
                                className="position-absolute w-100 h-100 rounded wow zoomIn"
                                data-wow-delay="0.9s"
                                src="/img/about.jpg"
                                alt="About Us"
                                width={500}
                                height={500}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 