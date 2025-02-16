import Image from 'next/image'

import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'

export const metadata = {
    title: 'Graphic Design Services | Digital Tech Solutions',
    description: 'Explore our creative graphic design services at Digital Tech Solutions. We offer innovative design solutions to enhance your brand identity and visual communication.'
}

const graphicDesignTestimonials = [
    {
        name: "Emily Scott",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        quote: "Digital Tech Solution's graphic design team created stunning visuals that perfectly captured our brand's essence. Their creativity and attention to detail were exceptional.",
        stars: 5
    },
    {
        name: "Jennifer Clark",
        image: "https://randomuser.me/api/portraits/women/37.jpg",
        quote: "Digital Tech Solution created a stunning logo and brand design for our company. Their creativity and attention to detail brought our vision to life, helping us stand out in the market. Highly recommend their graphic design services",
        stars: 5
    },
    {
        name: "Lisa White",
        image: "https://randomuser.me/api/portraits/women/57.jpg",
        quote: "Working with Digital Tech Solution for our graphic design needs was a game-changer. Their team delivered exceptional visuals for our campaign that perfectly captured our brand identity. Truly a top-tier design service.",
        stars: 5
    },
    {
        name: "Amanda Taylor",
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        quote: "Digital Tech Solution helped us build a strong brand presence with their creative graphic design. From logos to marketing materials, they designed everything with precision and creativity, giving our startup the professional look it needed",
        stars: 5
    },
    {
        name: "Tom Lewis",
        image: "https://randomuser.me/api/portraits/men/94.jpg",
        quote: "The graphic design work by Digital Tech Solution made a huge difference in our online sales. Their product imagery and website graphics were not only beautiful but also optimized for user engagement. Excellent work",
        stars: 5
    },
    {
        name: "Lisa Adams",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "Digital Tech Solution designed all the promotional materials for our event, and the results were fantastic. Their ability to blend creativity with clarity made our marketing campaign a huge success. Highly recommended",
        stars: 5
    },
    
]

const graphicDesignFeatures = [
    {
        icon: "palette",
        title: "Creative Design",
        description: "Craft visually stunning designs that captivate and engage your audience."
    },
    {
        icon: "brush",
        title: "Brand Identity",
        description: "Develop a strong and cohesive brand identity that resonates with your target market."
    },
    {
        icon: "image",
        title: "Visual Storytelling",
        description: "Tell compelling stories through impactful visuals and graphics."
    },
    {
        icon: "vector-square",
        title: "Custom Illustrations",
        description: "Create unique and custom illustrations tailored to your brand's needs."
    },
    {
        icon: "photo-video",
        title: "Multimedia Design",
        description: "Design engaging multimedia content for various platforms and channels."
    },
    {
        icon: "ad",
        title: "Advertising Graphics",
        description: "Design eye-catching graphics for your advertising campaigns."
    },
    {
        icon: "print",
        title: "Print Design",
        description: "Deliver high-quality print designs for brochures, flyers, and more."
    },
    {
        icon: "desktop",
        title: "Digital Graphics",
        description: "Create stunning digital graphics for websites, social media, and more."
    },
]

export default function Graphics() {
    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-headerg" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Graphic Design Services</h1>
                        <h5 className="text-white">Innovative Designs for Your Brand</h5>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Transforming Ideas into Visual</h1>
                        <h2 className="subheading">Masterpieces</h2>
                        <p className="content-paragraph">
                            Our graphic design services are tailored to bring your brand's vision to life. We create visually stunning designs that captivate and engage your audience, ensuring your brand stands out in the digital landscape.
                        </p>
                        <p className="content-paragraph">
                            From brand identity to multimedia design, our team of experts is dedicated to delivering high-quality graphics that align with your business goals and resonate with your target market.
                        </p>
                    </div>

                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of Graphic Design Services offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {graphicDesignFeatures.map((feature, index) => (
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

            {/* Testimonials Section */}
            <Testimonials testimonials={graphicDesignTestimonials} />

            {/* Vendors Section */}
            {/* Quote Request Section */}
            <QuoteRequest />
            <Vendors />
        </>
    )
}