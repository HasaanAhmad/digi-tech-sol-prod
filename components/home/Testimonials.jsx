'use client'
import { useEffect } from 'react'

export default function Testimonials({ testimonials = [
    {
        name: "Sydney Stewart",
        image: "/img/testimonial-1.jpg",
        text: "Digital Tech Solutions offered exceptional service with Austin Weber's responsive communication in web development and design."
    },
    {
        name: "John Doe",
        image: "/img/testimonial-2.jpg",
        text: "Digital Tech Solutions transformed my video, improving poor quality and adding professional edits, including a title page and music"
    },
    {
        name: "Mike Johnson",
        image: "/img/testimonial-3.jpg",
        text: "Digital Tech Solutions provided exceptional data analytics, turning raw data into valuable insights that exceeded my expectations."
    },
    {
        name: "Colette Brown",
        image: "/img/testimonial-4.jpg",
        text: "Digital Tech Solutions significantly improved my website's ranking and visibility, delivering outstanding results through expert SEO strategies"
    }
] }) {
    useEffect(() => {
        // Ensure jQuery and owl carousel are loaded
        const initCarousel = () => {
            if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
                const $ = window.jQuery;
                const $carousel = $('.testimonial-carousel');

                // Only destroy if carousel exists
                if ($carousel.data('owl.carousel')) {
                    $carousel.trigger('destroy.owl.carousel');
                }

                // Initialize new carousel
                $carousel.owlCarousel({
                    autoplay: true,
                    smartSpeed: 1000,
                    center: true,
                    dots: true,
                    loop: true,
                    nav: false,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 }
                    }
                });
            }
        };

        // Try to initialize immediately
        initCarousel();

        // Also try after a short delay to ensure everything is loaded
        const timeoutId = setTimeout(initCarousel, 1000);

        return () => {
            clearTimeout(timeoutId);
            // Cleanup carousel on component unmount
            if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
                const $carousel = window.jQuery('.testimonial-carousel');
                if ($carousel.data('owl.carousel')) {
                    $carousel.trigger('destroy.owl.carousel');
                }
            }
        };
    }, []);

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                    <h1 className="mb-0">What Our Clients Say About Our Services</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img
                                    className="img-fluid rounded"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    style={{ width: '60px', height: '60px' }}
                                />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">{testimonial.name}</h4>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                {testimonial.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 