'use client'

import Link from 'next/link'

export default function Topbar() {
    return (
        <div className="container-fluid px-5" style={{ backgroundColor: '#091E3E' }}>
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <small className="me-3 text-light">
                            <i className="fa fa-map-marker-alt me-2"></i>PECHS Block 6, Karachi
                        </small>
                        <small className="me-3 text-light">
                            <i className="fa fa-phone-alt me-2"></i>+923110378575
                        </small>
                        <small className="text-light">
                            <i className="fa fa-envelope-open me-2"></i>info@digitaltechsolutions.com
                        </small>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <Link href="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                            <i className="fab fa-twitter fw-normal"></i>
                        </Link>
                        <Link href="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                            <i className="fab fa-facebook-f fw-normal"></i>
                        </Link>
                        <Link href="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                            <i className="fab fa-linkedin-in fw-normal"></i>
                        </Link>
                        <Link href="#" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2">
                            <i className="fab fa-instagram fw-normal"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 