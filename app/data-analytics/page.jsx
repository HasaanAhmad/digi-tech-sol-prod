import Image from 'next/image'
import Vendors from '@/components/home/Vendors'
import Testimonials from '@/components/services/Testimonials'
import QuoteRequest from '@/components/services/QuoteRequest'

export const metadata = {
    title: 'Data Analytics Services in USA | Data Analysis Service',
    description: 'Unlock the full potential of your data with our data analytics services in the USA. We provide actionable insights to drive growth and efficiency. Transform your business with data-driven decision-making today with our data analysis services'
}
const dataAnalyticsTestimonials = [
    {
        name: "Sarah Mitchell",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        quote: "<strong>Digital Tech Solution</strong> data analytics services transformed how we understand customer behavior. Their insights helped us optimize our product offerings and marketing strategies, leading to a significant increase in sales and customer retention",
        stars: 5
    },
    {
        name: "Emily Taylor",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
        quote: "Thanks to Digital Tech Solution, we now leverage data analytics to refine our campaigns. Their team helped us identify key performance metrics, allowing us to make more informed decisions and drive greater engagement",
        stars: 5
    },
    {
        name: "Robert Green",
        image: "https://randomuser.me/api/portraits/men/63.jpg",
        quote: "Digital Tech Solution provided us with in-depth data analysis that helped streamline our operations. Their insights into our workflow allowed us to improve efficiency and reduce costs, making a real impact on our bottom line",
        stars: 5
    },
    {
        name: "Michael Harris",
        image: "https://randomuser.me/api/portraits/men/83.jpg",
        quote: "The data analytics solutions from Digital Tech Solution enabled us to better understand employee performance and retention trends. Their expert analysis helped us create targeted strategies to enhance workplace productivity and morale",
        stars: 5
    },
    {
        name: "Rachel Summers",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Digital Tech Solution data analytics team provided actionable insights that guided our decision-making. With their help, we refined our business strategies and were able to expand our customer base in record time",
        stars: 5
    },
    {
        name: "John Anderson",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        quote: "Digital Tech Solution data analytics capabilities gave us the ability to assess financial trends and performance metrics. Their strategic recommendations enabled us to optimize our budgeting process and increase profitability",
        stars: 4.5
    }
]
export default function DataAnalyticsPage() {
    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-headerda" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Data Analytics Services</h1>
                        <h5 className="text-white">Transform data into actionable intelligence</h5>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-container wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="main-heading">Turning Data into Growth for Every</h1>
                        <h2 className="subheading">Business</h2>
                        <p className="content-paragraph">
                            We specialize in data analytics solutions tailored to every business. Our expert team transforms complex data into clear, actionable insights, helping businesses optimize strategies, improve performance, and drive informed decision-making
                        </p>
                        <p className="content-paragraph">
                            From customer behavior analysis to performance tracking, our analytics solutions uncover trends, enhance efficiency, and maximize profitability. With data-driven precision, we empower businesses to stay ahead in a competitive market
                        </p>
                    </div>

                    <div className="image-grid wow fadeInUp" data-wow-delay="0.3s">
                        {[
                            'da-1.png', 'da-2.jpg', 'da-7.png', 'da-3.jpg',
                            'da-4.jpg', 'da-5.jpg', 'data-6.png', 'da-8.png',
                            'da-9.jpg', 'da-10.png', 'da-11.png', 'da-12.png'
                        ].map((img, index) => (
                            <div key={index} className="image-box">
                                <Image
                                    src={`/img/${img}`}
                                    alt={`Data Analytics ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="main-container wow fadeInUp" data-wow-delay="0.5s">
                        <h2>Top Features of Data Analytics Services offered by Digital Tech Solutions</h2>
                        <div className="icon-grid">
                            {[
                                {
                                    icon: "fas fa-chart-line",
                                    title: "Real-Time Data Processing",
                                    description: "Analyze data in real-time to make quick and informed business decisions based on live insights."
                                },
                                {
                                    icon: "fas fa-database",
                                    title: "Big Data Integration",
                                    description: "Manage and process large datasets efficiently, leveraging powerful analytics tools and cloud solutions."
                                },
                                {
                                    icon: "fas fa-chart-pie",
                                    title: "Predictive Analytics",
                                    description: "Use advanced statistical models to predict trends, customer behavior, and market shifts."
                                },
                                {
                                    icon: "fas fa-lightbulb",
                                    title: "Business Intelligence",
                                    description: "Convert raw data into actionable insights through visualization, dashboards, and comprehensive reports."
                                },
                                {
                                    icon: "fas fa-tachometer-alt",
                                    title: "Performance Optimization",
                                    description: "Improve operational efficiency by identifying key performance indicators and optimizing workflows."
                                },
                                {
                                    icon: "fas fa-user",
                                    title: "Customer Analytics",
                                    description: "Gain deep insights into customer behavior, preferences, and engagement for personalized marketing strategies."
                                },
                                {
                                    icon: "fas fa-shield-alt",
                                    title: "Data Security",
                                    description: "Ensure data protection with advanced security measures and compliance standards."
                                },
                                {
                                    icon: "fas fa-cloud",
                                    title: "Cloud Analytics",
                                    description: "Leverage cloud-based solutions for scalable and flexible data analytics capabilities."
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

                    {/* Service Process Section */}
                    
                </div>
            </div>

            {/* Testimonials Section */}
            <Testimonials testimonials={dataAnalyticsTestimonials} />

            {/* Quote Request Section */}
            <QuoteRequest />

            {/* Vendors Section */}
            <Vendors />
        </>
    )
}