import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants/index";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 border-b border-green-500 text-green-300 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">Yun's Portfolio</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm md:text-base">
                    {navItems.map(({ id, label, download }) =>
                        download ? (
                            <a
                                key={id}
                                href="/resume.pdf"
                                download
                                className="hover:text-green-100 transition duration-300 font-medium"
                            >
                                {label}
                            </a>
                        ) : (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="hover:text-green-100 transition duration-300 font-medium"
                            >
                                {label}
                            </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <Menu className="w-7 h-7 text-green-300" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide-in */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-black bg-opacity-95 text-green-200 z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-green-300 hover:text-green-100">
                        <X className="w-7 h-7" />
                    </button>
                </div>

                {/* Cute Buttons in flex-col */}
                <div className="flex flex-col items-center justify-center gap-6 px-6 mt-10">
                    {navItems.map(({ id, label, download }) =>
                        download ? (
                            <a
                                key={id}
                                href="/Yun_Resume.pdf"
                                download
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center text-lg font-semibold text-green-300 bg-green-900 hover:bg-green-700 active:bg-green-800 py-3 px-4 rounded-xl shadow transition-all duration-200"
                            >
                                {label}
                            </a>
                        ) : (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="w-full text-center text-lg font-semibold text-green-300 bg-green-900 hover:bg-green-700 active:bg-green-800 py-3 px-4 rounded-xl shadow transition-all duration-200"
                            >
                                {label}
                            </button>
                    ))}
                </div>
            </div>

            {/* Backdrop Blur on left 1/4 when open */}
            {isOpen && (
                <div
                    className="fixed inset-0 w-1/4 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
