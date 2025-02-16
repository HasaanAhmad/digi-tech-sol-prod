'use client'
import Image from 'next/image'

export default function Team() {
    const teamMembers = [
        {
            name: "John Doe",
            position: "CEO & Founder",
            image: "/img/team-1.jpg",
            socials: {
                twitter: "#",
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Jane Smith",
            position: "Technical Lead",
            image: "/img/team-2.jpg",
            socials: {
                twitter: "#",
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Robert Johnson",
            position: "Marketing Manager",
            image: "/img/team-3.jpg",
            socials: {
                twitter: "#",
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        }
    ]

    return (
        <div className="row g-5">
            {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-4 wow slideInUp" data-wow-delay={`${0.3 * (index + 1)}s`}>
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={500}
                                height={500}
                                className="img-fluid w-100"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.socials.twitter}><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.socials.facebook}><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.socials.instagram}><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.socials.linkedin}><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">{member.name}</h4>
                            <p className="text-uppercase m-0">{member.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
} 