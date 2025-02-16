"use client"
export default function QuoteRequest() {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                            <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                            </div>
                        </div>
                        <p className="mb-4">Get in touch with us for a free consultation about your data analytics needs. Our experts are ready to help you transform your data into actionable insights.</p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+923110378575</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12">
                                        <select
                                            defaultValue="Select A Service"
                                            className="form-select bg-light border-0"
                                            style={{ height: '55px' }}
                                        >
                                            <option>Select A Service</option>
                                            <option value="1">Website Development</option>
                                            <option value="2">Graphics</option>
                                            <option value="3">Data Science</option>
                                            <option value="4">Data Analytics</option>
                                            <option value="5">Digital Marketing</option>
                                            <option value="6">SEO</option>
                                            <option value="7">Video Editing</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 