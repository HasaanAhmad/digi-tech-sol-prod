'use client'
import { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Facts() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const facts = [
        {
            icon: "fa-users",
            title: "Happy Clients",
            count: 12345,
            bgClass: "bg-primary",
            iconBgClass: "bg-white",
            textClass: "text-white"
        },
        {
            icon: "fa-check",
            title: "Projects Done",
            count: 12345,
            bgClass: "bg-light",
            iconBgClass: "bg-primary",
            textClass: "text-primary"
        },
        {
            icon: "fa-award",
            title: "Win Awards",
            count: 12345,
            bgClass: "bg-primary",
            iconBgClass: "bg-white",
            textClass: "text-white"
        }
    ]

    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0" ref={ref}>
                    {facts.map((fact, index) => (
                        <div key={index} className="col-lg-4 wow zoomIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                            <div className={`${fact.bgClass} shadow d-flex align-items-center justify-content-center p-4`} style={{ height: '150px' }}>
                                <div className={`${fact.iconBgClass} d-flex align-items-center justify-content-center rounded mb-2`} style={{ width: '60px', height: '60px' }}>
                                    <i className={`fa ${fact.icon} ${fact.bgClass === 'bg-light' ? 'text-white' : 'text-primary'}`}></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className={`${fact.textClass} mb-0`}>{fact.title}</h5>
                                    <h1 className={`${fact.textClass} mb-0`}>
                                        {inView && (
                                            <CountUp
                                                end={fact.count}
                                                duration={2}
                                                separator=","
                                            />
                                        )}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 