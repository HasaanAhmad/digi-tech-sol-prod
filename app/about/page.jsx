import About from '@/components/home/About'
import Facts from '@/components/home/Facts'
import Vendors from '@/components/home/Vendors'


export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">About Us</h1>
                        <div className="d-inline-flex text-white mb-5">
                            <p className="m-0 text-white"><a className="text-white" href="/">Home</a></p>
                            <i className="far fa-circle text-white px-2"></i>
                            <p className="m-0 text-white">About</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />

            {/* Facts Section */}
            <Facts />

           

            {/* Vendors Section */}
            <Vendors />
        </>
    )
}

// Add metadata
export const metadata = {
    title: 'About Us | Digital Tech Solutions',
    description: 'Learn about Digital Tech Solutions - your partner for website development, graphic design, data analytics, video editing, SEO, and digital marketing services.'
}