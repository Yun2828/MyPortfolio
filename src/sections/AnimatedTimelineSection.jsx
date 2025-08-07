// AnimatedTimelineSection - Debugged Version
import React, { useEffect, useRef } from "react";
import { projects, cards } from "../constants/index.js";
import ProjectCard from "../components/ProjectCard.jsx";
import TitleHeader from "../constants/TitleHeader.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTimelineSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null); // Added missing imageRef

    useEffect(() => {
        const pairs = gsap.utils.toArray(".timeline-pair");

        // Enhanced title animations with breathing effect
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, scale: 0.9, y: -30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top -10%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        // Image animation (moved outside nested useEffect)
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }

        // Pulsing glow effect for title
        gsap.to(titleRef.current, {
            textShadow: "0 0 40px rgba(34,197,94,1), 0 0 80px rgba(34,197,94,0.5)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Breathing scale effect for title
        gsap.to(titleRef.current, {
            scale: 1.05,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        pairs.forEach((pair, pairIndex) => {
            const project = pair.querySelector(".project-card");
            const card = pair.querySelector(".exp-card");
            const line = pair.querySelector(".connecting-line");
            const projectGlow = pair.querySelector(".project-glow-border");
            const cardGlow = pair.querySelector(".card-glow-border");

            // Staggered entrance animation for project cards
            if (project) {
                gsap.fromTo(
                    project,
                    {
                        x: -150,
                        opacity: 0,
                        rotation: -5,
                        boxShadow: "0 0 0px rgba(0,255,0,0)"
                    },
                    {
                        x: 0,
                        opacity: 1,
                        rotation: 0,
                        boxShadow: "0 10px 40px rgba(34,197,94,0.4)",
                        duration: 1,
                        ease: "back.out(1.7)",
                        delay: pairIndex * 0.2,
                        scrollTrigger: {
                            trigger: pair,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );

                // Floating animation for project cards
                gsap.to(project, {
                    y: -10,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: pairIndex * 0.3,
                });
            }

            // Enhanced experience card animation
            if (card) {
                gsap.fromTo(
                    card,
                    {
                        x: 150,
                        opacity: 0,
                        rotation: 5,
                        boxShadow: "0 0 0px rgba(0,255,0,0)"
                    },
                    {
                        x: 0,
                        opacity: 1,
                        rotation: 0,
                        boxShadow: "0 10px 40px rgba(34,197,94,0.3)",
                        duration: 1,
                        ease: "back.out(1.7)",
                        delay: pairIndex * 0.2 + 0.3,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );

                // Pulsing border effect for experience cards
                gsap.to(card, {
                    borderColor: "rgba(34,197,94,0.8)",
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: pairIndex * 0.4,
                });
            }

            // Function to create flowing edge glow animation
            const triggerEdgeGlowAnimation = (element, startSide = "left") => {
                // Create flowing edge effect using border-image with conic gradient
                gsap.set(element, {
                    opacity: 1,
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderImage: `conic-gradient(from ${startSide === "left" ? "180deg" : "0deg"}, 
                        transparent 0deg,
                        rgba(34,197,94,1) 0deg,
                        rgba(34,197,94,1) 10deg,
                        transparent 20deg,
                        transparent 360deg) 1`
                });

                // Animate the flowing glow around the edge
                const startAngle = startSide === "left" ? 180 : 0;
                const endAngle = startAngle + 360;

                gsap.to(element, {
                    borderImage: `conic-gradient(from ${endAngle}deg, 
                        transparent 0deg,
                        rgba(34,197,94,1) 0deg,
                        rgba(34,197,94,1) 10deg,
                        transparent 20deg,
                        transparent 360deg) 1`,
                    duration: 1.5,
                    ease: "none",
                    onComplete: () => {
                        // Fade out the flowing edge
                        gsap.to(element, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => {
                                // Reset border
                                gsap.set(element, {
                                    borderWidth: '0px',
                                    borderImage: 'none'
                                });
                            }
                        });
                    }
                });
            };

            // Enhanced connecting line animation with glow
            if (line) {
                gsap.set(line, {
                    opacity: 1,
                    scaleX: 0,
                    transformOrigin: "left center",
                    filter: "drop-shadow(0 0 10px rgba(34,197,94,0.8))"
                });

                gsap.to(line, {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: pairIndex * 0.2 + 0.6,
                    scrollTrigger: {
                        trigger: pair,
                        start: "top 75%",
                        end: "bottom 25%",
                        toggleActions: "play reverse play reverse",
                    },
                    onComplete: () => {
                        // Trigger project card glow animation when line reaches it
                        if (projectGlow) {
                            triggerEdgeGlowAnimation(projectGlow, "left");
                        }
                    },
                    onUpdate: function() {
                        // Check if line has reached the experience card (right side)
                        if (this.progress() > 0.7 && cardGlow) {
                            triggerEdgeGlowAnimation(cardGlow, "right");
                        }
                    }
                });

                // Glowing pulse effect for the line
                gsap.to(line, {
                    filter: "drop-shadow(0 0 20px rgba(34,197,94,1))",
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: pairIndex * 0.5,
                });
            }

            // Hover interactions
            const addHoverEffects = (element, scale = 1.05) => {
                element.addEventListener('mouseenter', () => {
                    gsap.to(element, {
                        scale: scale,
                        boxShadow: "0 20px 60px rgba(34,197,94,0.6)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                element.addEventListener('mouseleave', () => {
                    gsap.to(element, {
                        scale: 1,
                        boxShadow: "0 10px 40px rgba(34,197,94,0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            };

            if (project) addHoverEffects(project);
            if (card) addHoverEffects(card, 1.03);
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="timeline" className="relative w-full py-32 px-5 md:px-20 xl:px-0">
            <h2 ref={titleRef} className="text-5xl font-bold text-center text-green-400 mb-30">
                My Projects
            </h2>

            {/* XL: grid view with connecting lines */}
            <div className="hidden xl:flex flex-col gap-24 mt-20">
                {projects.map((project, index) => (
                    <React.Fragment key={`xl-pair-${index}`}>
                        <div className="timeline-pair relative grid grid-cols-2 gap-40 items-center">
                            <div className="project-card relative max-w-lg w-full ml-20 cursor-pointer">
                                {/* Flowing edge glow for project card */}
                                <div className="project-glow-border absolute inset-0 rounded-xl opacity-0 pointer-events-none border-0"></div>
                                <ProjectCard {...project} />
                            </div>
                            <div className="exp-card relative bg-green-900/10 border border-green-500/30 rounded-xl p-4 max-w-lg w-full cursor-pointer">
                                {/* Flowing edge glow for experience card */}
                                <div className="card-glow-border absolute inset-0 rounded-xl opacity-0 pointer-events-none border-0"></div>
                                <h1 className="text-green-300 font-bold text-2xl mb-4">{cards[index]?.title}</h1>
                                <p className="text-green-300 font-semibold italic text-base mb-4">{cards[index]?.tech}</p>
                                <ul className="list-disc ml-5 space-y-2 text-green-100">
                                    {cards[index]?.responsibilities.map((item, i) => (
                                        <li key={i} className="text-base">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="connecting-line absolute top-1/2 left-[calc(50%-5rem)] w-40 h-0.5 bg-green-400 opacity-0 scale-x-0" />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Small & Medium: stacked view */}
            <div className="xl:hidden flex flex-col gap-24 mt-20">
                {projects.map((project, index) => (
                    <React.Fragment key={`pair-${index}`}>
                        <div className="timeline-pair">
                            <div className="project-card relative mb-8 max-w-lg w-full mx-auto cursor-pointer">
                                {/* Flowing edge glow for project card (mobile) */}
                                <div className="project-glow-border absolute inset-0 rounded-xl opacity-0 pointer-events-none border-0"></div>
                                <ProjectCard {...project} />
                            </div>
                            <div className="exp-card relative bg-green-900/10 border border-green-500/30 rounded-xl p-4 max-w-lg w-full mx-auto mb-8 cursor-pointer">
                                {/* Flowing edge glow for experience card (mobile) */}
                                <div className="card-glow-border absolute inset-0 rounded-xl opacity-0 pointer-events-none border-0"></div>
                                <h1 className="text-green-300 font-bold text-2xl mb-4">{cards[index]?.title}</h1>
                                <ul className="list-disc ml-5 space-y-2 text-green-100">
                                    {cards[index]?.responsibilities.map((item, i) => (
                                        <li key={i} className="text-lg">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="flex flex-row items-center justify-center gap-4 mt-30">
                <img
                    ref={imageRef}
                    src="/images/cute-dino.png"
                    alt="Coming Soon"
                    className="w-20 h-20 animate-bounce drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                />
                <h2 className="text-3xl font-bold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                    More Projects Coming Soon...
                </h2>
            </div>
        </section>
    );
};

export default AnimatedTimelineSection;