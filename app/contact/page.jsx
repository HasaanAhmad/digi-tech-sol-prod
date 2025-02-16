import Image from 'next/image'
import Vendors from '@/components/home/Vendors'

export const metadata = {
    title: 'Contact Us | Digital Tech Solutions',
    description: 'Contact Digital Tech Solution for website development, design, SEO, video editing, and digital marketing. Let\'s grow your business'
}

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-headercontact" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
                    </div>
                </div>
            </div>

            {/* Contact Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+923110378575</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Email to get free quote</h5>
                                    <h4 className="text-primary mb-0">info@digitaltechsolutions.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Visit our office</h5>
                                    <h4 className="text-primary mb-0">PECHS Block 6, Karachi</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3803766563394!2d67.0673493!3d24.8723773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb56aaaab%3A0x59ccb0f2c3dab0bd!2sPECHS%20Block%206%2C%20Pakistan%20Employees%20Co-operative%20Housing%20Society%20Block%206%20PECHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679901206014!5m2!1sen!2s"
                                frameBorder="0"
                                style={{ minHeight: '350px', border: '0' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vendors Section */}
            <Vendors />
        </>
    )
}