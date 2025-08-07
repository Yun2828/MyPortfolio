import React, { useEffect, useRef } from "react";
import { skillCategories } from "../constants/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
    const titleRef = useRef(null);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    // Animate title
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: -30,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                },
            }
        );
    }, []);

    // Animate cards only on desktop (≥640px)
    useEffect(() => {
        if (window.innerWidth < 640) return; // skip animation on mobile

        skillCategories.forEach((_, i) => {
            const card = cardsRef.current[i];

            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Floating parallax effect
            gsap.to(card, {
                y: (i % 2 === 0 ? 1 : -1) * 10,
                duration: 3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: i * 0.2,
            });
        });
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-screen py-48 px-4 md:px-20 bg-black text-green-100 scroll-mt-28"
        >
            <h2
                ref={titleRef}
                className="text-4xl font-bold text-center text-green-400 mb-10 sm:mb-16 transition-transform duration-500 hover:scale-105 hover:text-green-300"
            >
                Technical Skills
            </h2>

            {/* Mobile Layout: simple vertical boxes with no animation */}
            <div className="block sm:hidden space-y-10">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="w-full min-h-[24rem] p-6 flex flex-col justify-start items-center
              border border-green-400 shadow-md
              bg-black/70 rounded-xl text-center"
                    >
                        <h3 className="text-xl font-semibold text-green-300 mb-4">
                            {category.title}
                        </h3>
                        <ul className="space-y-2 text-sm w-full">
                            {category.skills.map((skill, i) => (
                                <li
                                    key={i}
                                    className="text-green-100"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Desktop Layout: animated grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (cardsRef.current[idx] = el)}
                        className="w-full min-h-[26rem] p-6 flex flex-col justify-start items-center
              border border-green-400 shadow-lg hover:shadow-green-400/60
              bg-black/70 rounded-xl text-center transition-all duration-300 hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold text-green-300 mb-4">
                            {category.title}
                        </h3>
                        <ul className="space-y-2 text-sm w-full">
                            {category.skills.map((skill, i) => (
                                <li
                                    key={i}
                                    className="text-green-100 hover:text-green-400 transition-colors duration-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;
