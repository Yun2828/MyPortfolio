// components/ContactSection.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {

    return (
        <section className="py-24 px-5 md:px-20 bg-black text-green-100" id="contact">
            <div className="text-center mb-12">
                <h2
                    className="text-5xl font-bold text-green-400 transition-all duration-1000 opacity-0 animate-fade-in"
                >
                    Contact Me
                </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-green-900/10 p-8 rounded-xl border border-green-500 shadow-lg space-y-6">
                <p className="text-center text-green-200">
                    I’d love to connect! Reach out to me via email or social media:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
                    <a
                        href="mailto:yunwaddyoo01@gmail.com"
                        className="w-48 text-center py-3 border border-green-500 rounded-md text-green-300 hover:text-green-100 transition-colors duration-300"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaEnvelope /> Yun's Email
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yun-waddy-oo-a46666346/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-48 text-center py-3 border border-green-500 rounded-md text-green-300 hover:text-green-100 transition-colors duration-300"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaLinkedin /> Yun's LinkedIn
                        </div>
                    </a>
                    <a
                        href="https://github.com/Yun2828"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-48 text-center py-3 border border-green-500 rounded-md text-green-300 hover:text-green-100 transition-colors duration-300"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaGithub /> Yun's GitHub
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
