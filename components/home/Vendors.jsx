'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function Vendors() {
    useEffect(() => {
        // Initialize owl carousel
        if (typeof window !== 'undefined' && window.jQuery) {
            require('owl.carousel')
            window.jQuery(".vendor-carousel").owlCarousel({
                loop: true,
                margin: 45,
                dots: false,
                autoplay: true,
                smartSpeed: 1000,
                responsive: {
                    0: { items: 2 },
                    576: { items: 4 },
                    768: { items: 6 },
                    992: { items: 8 }
                }
            })
        }
    }, [])

    const vendors = [
        { id: 1, image: "/img/vendor-1.jpg", alt: "Vendor 1" },
        { id: 2, image: "/img/vendor-2.jpg", alt: "Vendor 2" },
        { id: 3, image: "/img/vendor-3.jpg", alt: "Vendor 3" },
        { id: 4, image: "/img/vendor-4.jpg", alt: "Vendor 4" },
        { id: 5, image: "/img/vendor-5.jpg", alt: "Vendor 5" },
        { id: 6, image: "/img/vendor-6.jpg", alt: "Vendor 6" },
        { id: 7, image: "/img/vendor-7.jpg", alt: "Vendor 7" },
        { id: 8, image: "/img/vendor-8.jpg", alt: "Vendor 8" },
        { id: 9, image: "/img/vendor-9.jpg", alt: "Vendor 9" }
    ]

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 mb-5">
                <div className="bg-white">
                    <div className="owl-carousel vendor-carousel">
                        {vendors.map((vendor) => (
                            <div key={vendor.id} className="vendor-item">
                                <Image
                                    src={vendor.image}
                                    alt={vendor.alt}
                                    width={200}
                                    height={100}
                                    className="img-fluid"
                                    style={{
                                        objectFit: 'contain',
                                        transition: 'all 0.5s'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 