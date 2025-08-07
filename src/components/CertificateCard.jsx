// components/CertificateCard.jsx
import React, { useRef, useEffect } from "react";
import { FaShareSquare } from "react-icons/fa";
import gsap from "gsap";

const CertificateCard = ({ title, image, link }) => {
    const iconRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const moveIcon = (e) => {
            const card = e.currentTarget;
            const icon = iconRef.current;
            const tooltip = tooltipRef.current;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Move icon with trailing animation
            gsap.to(icon, {
                left: `${x}px`,
                top: `${y}px`,
                duration: 0.3,
                ease: "power2.out"
            });

            // Move tooltip with slight delay for trailing effect
            gsap.to(tooltip, {
                left: `${x + 20}px`,
                top: `${y - 10}px`,
                duration: 0.4,
                ease: "power2.out"
            });

            icon.style.transform = "translate(-50%, -50%)";
            tooltip.style.transform = "translate(0, -100%)";
        };

        const showElements = () => {
            gsap.to([iconRef.current, tooltipRef.current], {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const hideElements = () => {
            gsap.to([iconRef.current, tooltipRef.current], {
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out"
            });
        };

        const card = iconRef.current?.closest(".group");
        if (card) {
            card.addEventListener("mousemove", moveIcon);
            card.addEventListener("mouseenter", showElements);
            card.addEventListener("mouseleave", hideElements);
        }

        return () => {
            if (card) {
                card.removeEventListener("mousemove", moveIcon);
                card.removeEventListener("mouseenter", showElements);
                card.removeEventListener("mouseleave", hideElements);
            }
        };
    }, []);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden max-w-sm mx-auto rounded-xl border border-green-500/80 shadow-lg shadow-green-500/20 hover:shadow-green-400/40 transition-all duration-500 hover:scale-105 cursor-pointer"
        >
        <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover group-hover:blur-sm transition duration-500"
            />
            <div className="absolute inset-0 pointer-events-none">
                <div
                    ref={iconRef}
                    className="absolute w-10 h-10 bg-green-500 text-white text-xl rounded-full flex items-center justify-center opacity-0 pointer-events-none z-10 shadow-lg"
                >
                    <FaShareSquare />
                </div>
                <div
                    ref={tooltipRef}
                    className="absolute bg-gray-900 border border-green-500/50 text-green-100 px-3 py-1 rounded-lg text-sm font-medium opacity-0 pointer-events-none z-20 whitespace-nowrap shadow-lg"
                >
                    Open Certificate
                </div>
            </div>
            <div className="p-4 bg-gray-900/90 text-center text-green-100 text-sm font-semibold">
                {title}
            </div>
        </a>
    );
};

export default CertificateCard;