import Image from 'next/image'
import Link from 'next/link'
import Testimonials from '@/components/services/Testimonials'
import QuoteRequest from '@/components/services/QuoteRequest'
import Vendors from '@/components/home/Vendors'

export const metadata = {
    title: 'Data Science Services in USA | Data Science Solutions',
    description: 'Leverage advanced data science services in USA to gain insights, optimize processes, and drive business growth with AI-powered solutions'
}

const dataScienceTestimonials = [
    {
        name: "Emily Scott",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        quote: "Digital Tech Solution data science team provided incredible insights through advanced analytics. Their predictive models helped us optimize our inventory management, leading to better decisions and increased profitability. Truly impressive work",
        stars: 5
    },
    {
        name: "Olivia Green",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        quote: "Thanks to Digital Tech Solution, we now have a clearer understanding of our customer data. Their data science expertise helped us refine our marketing strategies, improving targeting and campaign performance. Highly recommend their services",
        stars: 5
    },
    {
        name: "Mark Johnson",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        quote: "Digital Tech Solution data science solutions helped us uncover hidden patterns in our financial data. Their machine learning models provided invaluable insights that improved our decision-making process. A game-changer for our business",
        stars: 5
    },
    {
        name: "Robert Smith",
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        quote: "The team at Digital Tech Solution helped us use data science to optimize our supply chain and customer experience. Their analysis and models improved our sales forecasts and inventory efficiency. We saw impressive results",
        stars: 5
    },
    {
        name: "Rachel Summers",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Digital Tech Solution revolutionized our product development with their data science expertise. Their insights into user behavior and market trends helped us launch more successful products and fine-tune our strategies for growth",
        stars: 5
    },
    {
        name: "Robert Evans",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        quote: "Digital Tech Solution provided us with data-driven solutions that improved our patient care services. Their data science team analyzed healthcare data to identify trends and streamline operations. Their work had a tremendous impact",
        stars: 4.5
    }
]

export default function DataSciencePage() {
    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-headerds" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Data Science Service</h1>
                        <h5 className="text-white">Unlock insights through advanced analytics</h5>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Transforming Data into Intelligent</h1>
                        <h2 className="subheading">Solutions</h2>
                        <p className="content-paragraph">
                            We specialize in advanced data science solutions that help businesses harness the power of their data. Our expert team combines machine learning, AI, and statistical analysis to uncover valuable insights and drive innovation.
                        </p>
                        <p className="content-paragraph">
                            From predictive modeling to deep learning applications, our data science solutions enable businesses to make data-driven decisions and stay ahead in today's competitive landscape.
                        </p>
                    </div>

                    <div className="image-grid wow fadeInUp" data-wow-delay="0.3s">
                        {[
                            'data-13.jpg', 'data-14.png', 'data-15.jpg', 'data-16.png',
                            'data-17.png', 'data-6.png', 'data-7.jpg', 'data-8.png',
                            'data-18.jpg', 'data-10.jpg', 'data-11.png', 'data-12.jpg'
                        ].map((img, index) => (
                            <div key={index} className="image-box">
                                <Image
                                    src={`/img/${img}`}
                                    alt={`Design ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of Data Science Services offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {[
                                {
                                    icon: "fas fa-brain",
                                    title: "Machine Learning",
                                    description: "Implement advanced ML models to automate processes and predict outcomes."
                                },
                                {
                                    icon: "fas fa-robot",
                                    title: "Artificial Intelligence",
                                    description: "Leverage AI solutions to enhance decision-making and automation capabilities."
                                },
                                {
                                    icon: "fas fa-chart-line",
                                    title: "Predictive Analytics",
                                    description: "Forecast trends and patterns to make informed business decisions."
                                },
                                {
                                    icon: "fas fa-database",
                                    title: "Big Data Processing",
                                    description: "Handle and analyze large datasets efficiently with scalable solutions."
                                },
                                {
                                    icon: "fas fa-chart-bar",
                                    title: "Statistical Analysis",
                                    description: "Apply advanced statistical methods to extract meaningful insights."
                                },
                                {
                                    icon: "fas fa-project-diagram",
                                    title: "Deep Learning",
                                    description: "Implement neural networks for complex pattern recognition tasks."
                                },
                                {
                                    icon: "fas fa-code-branch",
                                    title: "Model Deployment",
                                    description: "Deploy and maintain ML models in production environments."
                                },
                                {
                                    icon: "fas fa-shield-alt",
                                    title: "Data Security",
                                    description: "Ensure data protection and compliance throughout analysis."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="grid-item">
                                    <i className={feature.icon}></i>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
            <Testimonials testimonials={dataScienceTestimonials} />

            {/* Vendors Section */}
            {/* Quote Request Section */}
            <QuoteRequest />
            <Vendors />

            {/* Testimonials Section */}

        </>
    )
}