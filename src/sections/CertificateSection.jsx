
// components/CertificateSection.jsx
import React, { useRef, useEffect } from "react";
import { certifications } from "../constants/index";
import CertificateCard from "../components/CertificateCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CertificateSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Title animation - appear when section enters viewport, disappear when it leaves
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: -50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    onLeave: () => {
                        gsap.to(titleRef.current, {
                            opacity: 0,
                            y: -30,
                            scale: 0.9,
                            duration: 0.6,
                            ease: "power2.in"
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(titleRef.current, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out"
                        });
                    }
                }
            }
        );

        // Cards animation - appear when section enters viewport, disappear when it leaves
        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play reverse play reverse",
                    onLeave: () => {
                        gsap.to(cardsRef.current, {
                            opacity: 0,
                            y: 30,
                            scale: 0.95,
                            duration: 0.5,
                            ease: "power2.in",
                            stagger: 0.05
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(cardsRef.current, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: "power3.out",
                            stagger: 0.1
                        });
                    }
                }
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === sectionRef.current ||
                    trigger.trigger === titleRef.current ||
                    cardsRef.current.includes(trigger.trigger)) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-5 md:px-20 bg-black text-green-100 overflow-hidden"
            id="certificates"
        >
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20"
                style={{ backgroundImage: "url('/images/green-abstract-background.jpg')" }}
            ></div>


            <div className="group mb-16">
                <h2
                    ref={titleRef}
                    className="mt-10 mb-30 text-5xl font-bold text-center text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:text-green-300 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                >
                    Certifications
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10">
            {certifications.map((cert, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <CertificateCard {...cert} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificateSection;