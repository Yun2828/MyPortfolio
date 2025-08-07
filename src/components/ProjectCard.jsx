import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image, title, link }) => {
    return (
        <div className="rounded-xl relative overflow-hidden group">
            <img
                src={image}
                alt={title}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-[#B5FE83] rounded-xl flex flex-col items-center justify-center text-white text-center px-10 h-0 group-hover:h-full transition-all duration-500 overflow-hidden">
                <h3 className="text-lg font-medium mb-5">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 bg-white text-[#79D70F] w-14 h-14 flex items-center justify-center rounded-full text-xl"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
