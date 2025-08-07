import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const sectionRef = useRef(null);
    const tooltipRef = useRef(null);

    const [showTooltip, setShowTooltip] = useState(false);

    // Proper GSAP-powered mouse tracking
    const handleMouseMove = (e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(tooltipRef.current, {
            left: x,
            top: y,
            duration: 0.2,
            ease: "power2.out"
        });
    };

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="education"
            className="relative py-24 px-5 md:px-20 bg-black text-green-100 overflow-hidden"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={handleMouseMove}
        >
            {/* ✅ Resume Tooltip with GSAP-controlled position */}
            <a
                ref={tooltipRef}
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className={`
                    absolute z-50
                    bg-green-700 hover:bg-green-600
                    text-white text-sm font-semibold
                    px-3 py-1 rounded shadow
                    pointer-events-auto
                    translate-x-[-50%] translate-y-[-50%]
                    ${showTooltip ? "block": "hidden"}
              `}
                style={{ top: 0, left: 0 }}
            >
                Resume
            </a>


            <h2
                ref={titleRef}
                className="text-5xl font-bold text-center text-green-400 mb-16 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            >
                Education
            </h2>

            <div
                ref={cardRef}
                className="max-w-4xl mx-auto bg-green-900/10 p-8 rounded-xl border border-green-500 shadow-xl space-y-4"
            >
                <div className="text-xl font-semibold text-green-300">
                    California Polytechnic State University, San Luis Obispo
                </div>
                <div className="text-green-200 text-sm italic">
                    B.S. in Computer Science – Expected Graduation: May 2027
                </div>
                <div className="text-sm text-green-100">
                    <strong>Concentrations:</strong> Artificial Intelligence and Machine Learning<br />
                    <strong>Minor:</strong> Data Science<br />
                    <strong>GPA:</strong> 3.86/4.00<br />
                    <strong>Related Coursework:</strong> Data Structures & Algorithms, Machine Learning,
                    Artificial Intelligence, Object-Oriented Programming, Full-stack Web Development,
                    Discrete Mathematics.
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
