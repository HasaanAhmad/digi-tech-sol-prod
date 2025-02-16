'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Carousel() {
    return (
        <div className="container-fluid position-relative p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            className="w-100"
                            src="/img/carousel-1.jpg"
                            alt="Carousel Image 1"
                            width={1920}
                            height={1080}
                            priority
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                                    Creative & Innovative
                                </h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                    Creative & Innovative Digital Solution
                                </h1>
                                <Link
                                    href="/quote"
                                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                >
                                    Free Quote
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <Image
                            className="w-100"
                            src="/img/carousel-2.jpg"
                            alt="Carousel Image 2"
                            width={1920}
                            height={1080}
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '900px' }}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                                    Creative & Innovative
                                </h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                    Creative & Innovative Digital Solution
                                </h1>
                                <Link
                                    href="/quote"
                                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                >
                                    Free Quote
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
} 