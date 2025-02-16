'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Check if the current path matches the link
    const isActive = (path) => pathname === path

    // Check if the current path is a service page
    const isServicePage = pathname.startsWith('/') && [
        'website-development',
        'graphics',
        'data-science',
        'data-analytics',
        'digital-marketing',
        'seo',
        'video-editing'
    ].some(service => pathname === `/${service}`)

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 bg-[#a4a4a468] py-lg-0 ${isSticky ? 'sticky-top' : ''}`}
            style={{
                backgroundColor: isSticky ? '#FFFFFF' : 'transparent',
                marginTop: isSticky ? '0' : '45px', // Remove margin when sticky
                transition: 'all 0.5s',
                position: isSticky ? 'fixed' : 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 999
            }}>
            <Link href="/" className="navbar-brand d-flex align-items-center p-0" style={{ gap: '0.5rem' }}>
                <i className="fa fa-laptop-code" style={{ fontSize: '1.5rem', color: '#06A3DA' }}></i>
                <span style={{
                    fontWeight: 800,
                    fontSize: '1.30rem',
                    color: '#06A3DA'
                }}>
                    Digital Tech Solutions
                </span>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link
                        href="/"
                        className={`nav-item nav-link ${isActive('/') ? 'active' : ''} ${isSticky ? 'text-dark' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`nav-item nav-link ${isActive('/about') ? 'active' : ''} ${isSticky ? 'text-dark' : ''}`}
                    >
                        About
                    </Link>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className={`nav-link dropdown-toggle ${isServicePage ? 'active' : ''} ${isSticky ? 'text-dark' : ''}`}
                            data-bs-toggle="dropdown"
                        >
                            Services
                        </a>
                        <div className="dropdown-menu m-0">
                            <Link
                                href="/website-development"
                                className={`dropdown-item ${isActive('/website-development') ? 'active' : ''}`}
                            >
                                Website Development
                            </Link>
                            <Link
                                href="/graphics"
                                className={`dropdown-item ${isActive('/graphics') ? 'active' : ''}`}
                            >
                                Graphics
                            </Link>
                            <Link
                                href="/data-science"
                                className={`dropdown-item ${isActive('/data-science') ? 'active' : ''}`}
                            >
                                Data Science
                            </Link>
                            <Link
                                href="/data-analytics"
                                className={`dropdown-item ${isActive('/data-analytics') ? 'active' : ''}`}
                            >
                                Data Analytics
                            </Link>
                            <Link
                                href="/digital-marketing"
                                className={`dropdown-item ${isActive('/digital-marketing') ? 'active' : ''}`}
                            >
                                Digital Marketing
                            </Link>
                            <Link
                                href="/seo"
                                className={`dropdown-item ${isActive('/seo') ? 'active' : ''}`}
                            >
                                SEO
                            </Link>
                            <Link
                                href="/video-editing"
                                className={`dropdown-item ${isActive('/video-editing') ? 'active' : ''}`}
                            >
                                Video Editing
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="/blogs"
                        className={`nav-item nav-link ${pathname.startsWith('/blogs') ? 'active' : ''} ${isSticky ? 'text-dark' : ''}`}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''} ${isSticky ? 'text-dark' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
} 