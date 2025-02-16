'use client'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                <Link href="/" className="navbar-brand d-flex align-items-center p-0" style={{ gap: '0.5rem' }}>
                                    <i className="fa fa-laptop-code" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                                    <span style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600 }}>
                                        Digital Tech Solutions
                                    </span>
                                </Link>

                                <p className="mt-3 mb-4">
                                    Digital Tech Solutions offers cutting-edge web development, data analytics,
                                    SEO, and graphic design services, helping businesses achieve growth through
                                    innovative solutions and expert strategies.
                                </p>

                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                        <button className="btn btn-dark">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">PECHS Block 6 Karachi</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">info@digitaltechsolutions.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <p className="mb-0">+923110378575</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <Link href="#" className="btn btn-primary btn-square me-2"><i className="fab fa-twitter fw-normal"></i></Link>
                                        <Link href="#" className="btn btn-primary btn-square me-2"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                        <Link href="#" className="btn btn-primary btn-square me-2"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                        <Link href="#" className="btn btn-primary btn-square"><i className="fab fa-instagram fw-normal"></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link href="/" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Home
                                        </Link>
                                        <Link href="/about" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>About Us
                                        </Link>
                                        <Link href="/blog" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog
                                        </Link>
                                        <Link href="/contact" className="text-light">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Contact Us
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Popular Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link href="/website-development" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Web Development
                                        </Link>
                                        <Link href="/data-analytics" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Data Analytics
                                        </Link>
                                        <Link href="/graphics" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Graphics
                                        </Link>
                                        <Link href="/digital-marketing" className="text-light mb-2">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Digital Marketing
                                        </Link>
                                        <Link href="/video-editing" className="text-light">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Video Editing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{ background: '#061428' }}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                                <p className="mb-0">
                                    &copy; <Link className="text-white border-bottom" href="/">Digital Tech Solutions</Link>.
                                    All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 