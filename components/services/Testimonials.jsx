'use client'

import Image from 'next/image'

export default function Testimonials({ testimonials = [] }) {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5">
                    <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
                    <h1 className="mb-0">Our Services Are Cherished By All!</h1>
                    <h6 className="text-secondary mt-3">We have served hundreds of brands, and look at what they have to say for us.</h6>
                </div>

                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index + 1}s`}>
                            <div className="testimonial-card h-100">
                                <div className="quotes">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <p dangerouslySetInnerHTML={{
                                    __html: testimonial.quote.replace(/Digital Tech Solution/g, "<strong>Digital Tech Solution</strong>")
                                }} />
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="user-photo"
                                />
                                <div className="user-name">{testimonial.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .testimonial-card {
                    background: #fff;
                    border-radius: 10px;
                    padding: 2rem;
                    position: relative;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                    text-align: center;
                }

                .testimonial-card:hover {
                    background: var(--primary);
                    color: white;
                }

                .testimonial-card:hover .quotes i,
                .testimonial-card:hover .user-name,
                .testimonial-card:hover p {
                    color: white;
                }

                .testimonial-card:hover .stars i {
                    color: white; /* Stars turn white on hover */
                }

                .testimonial-card:hover .user-photo {
                    border-color: white;
                }

                .quotes i {
                    color: var(--primary);
                    transition: color 0.3s ease;
                }

                .stars i {
                    color: #06A3DA; /* Default gold color */
                    transition: color 0.3s ease;
                }

                .user-photo {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    border: 3px solid var(--primary);
                    transition: border-color 0.3s ease;
                }

                .user-name {
                    color: var(--dark);
                    transition: color 0.3s ease;
                }
            `}</style>
        </div>
    );
}
