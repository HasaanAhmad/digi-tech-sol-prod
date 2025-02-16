import Image from 'next/image'

import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'

export const metadata = {
    title: 'Professional Video Editing Services in USA',
    description: 'Get high-quality video editing services in USA to create stunning, engaging, and polished videos for your business or personal projects'
}

const videoTestimonials = [
    {
        name: "Emily Roberts",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        quote: "Digital Tech Solution transformed our raw footage into a stunning, high-quality video. Their attention to detail, smooth transitions, and creative edits exceeded our expectations. They delivered on time and handled revisions seamlessly",
        stars: 5
    },
    {
        name: "Sarah Thompson",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        quote: "I was amazed by the professionalism and creativity of Digital Tech Solution. They enhanced our footage with perfect color grading, effects, and transitions. The final product was polished and engaging. Highly recommended for video editing services",
        stars: 5
    },
    {
        name: "Mark Anderson",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        quote: "Our brand's promotional video turned out amazing, thanks to Digital Tech Solution. Their team brought our vision to life with expert editing, music synchronization, and stunning effects. The results were beyond impressive",
        stars: 5
    },
    {
        name: "David Wilson",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        quote: "I needed a high-quality video with seamless editing, and Digital Tech Solution delivered perfectly! They enhanced the visuals, refined the audio, and ensured an engaging flow. Their expertise and quick turnaround were truly commendable",
        stars: 5
    },
    {
        name: "Jessica Miller",
        image: "https://randomuser.me/api/portraits/women/38.jpg",
        quote: "The team at Digital Tech Solution took my content to the next level! Their creative editing, sharp visuals, and professional touch made my videos stand out. I couldn't be happier with their outstanding work",
        stars: 5
    },
    {
        name: "Robert Evans",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        quote: "Digital Tech Solution edited our event footage flawlessly. Their ability to capture key moments, add smooth transitions, and enhance video quality made a huge difference. Their professionalism and expertise truly set them apart",
        stars: 4.5
    }
]

export default function VideoEditing() {
    return (
        <>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-headered" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Video Editing Service</h1>
                        <h3 className="text-white">Enhance visuals with professional video editing</h3>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Main Content */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Creating Stunning Visuals for Every</h1>
                        <h2 className="subheading">Business</h2>
                        <p className="content-paragraph">
                            We specialize in professional video editing services tailored to every business. Our expert team enhances visuals, refines footage, and adds creative elements to deliver high-quality, engaging content that captivates your audience
                        </p>
                        <p className="content-paragraph">
                            Whether it's promotional videos, corporate presentations, or social media content, our editing solutions ensure seamless storytelling, dynamic transitions, and a polished final product. With precision and creativity, we help bring your vision to life.
                        </p>
                    </div>

                    <div className="image-grid">
                        {[
                            'website-1.png', 'website-2.jpg', 'website-3.png', 'website-4.jpg',
                            'website-5.png', 'website-6.jpg', 'website-7.jpg', 'website-8.jpg',
                            'website-9.jpg', 'website-10.jpg', 'website-12.jpg', 'website-11.jpg'
                        ].map((img, index) => (
                            <div key={index} className="image-box">
                                <Image
                                    src={`/img/${img}`}
                                    alt={`Video Editing Sample ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of Video Editing Service offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {[
                                {
                                    icon: "video",
                                    title: "Professional Video Editing",
                                    description: "Create smooth, high-quality edits with precise cuts, seamless transitions, and visually appealing compositions."
                                },
                                {
                                    icon: "volume-up",
                                    title: "Advanced Audio Enhancement",
                                    description: "Refine audio clarity, remove background noise, and add custom sound effects for an immersive experience."
                                },
                                {
                                    icon: "adjust",
                                    title: "Color Correction & Grading",
                                    description: "Balance colors, adjust lighting, and enhance contrast to achieve a cinematic and polished look."
                                },
                                {
                                    icon: "font",
                                    title: "Custom Titles & Graphics",
                                    description: "Add eye-catching text, lower thirds, motion graphics, and animations to enhance storytelling and engagement."
                                },
                                {
                                    icon: "random",
                                    title: "Seamless Transitions",
                                    description: "Smooth transitions keep the flow natural, ensuring professional-quality video continuity."
                                },
                                {
                                    icon: "magic",
                                    title: "Custom Effects & Animations",
                                    description: "Incorporate dynamic visual effects, overlays, and animations to bring creativity to your videos."
                                },
                                {
                                    icon: "expand",
                                    title: "Optimized Formats & Resolutions",
                                    description: "Ensure compatibility across platforms with the best resolution, aspect ratio, and compression."
                                },
                                {
                                    icon: "clock",
                                    title: "Fast & Reliable Delivery",
                                    description: "Receive high-quality video edits within your deadlines without compromising on quality."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="grid-item">
                                    <i className={`fas fa-${feature.icon}`}></i>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* Main Content End */}

            {/* Testimonials Section */}
            <Testimonials testimonials={videoTestimonials} />
            {/* Quote Request Section */}
            <QuoteRequest />
            <Vendors />
        </>
    )
}