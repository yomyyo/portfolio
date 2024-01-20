import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import linkedinLogo from "../assets/linkedin-logo.png"; // replace with actual path
import githubLogo from "../assets/github-logo.png"; // replace with actual path

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Sammy Tang
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/sammy-huynh-tang" target="_blank" rel="noopener noreferrer" className="mr-3">
            <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com/yomyyo" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
