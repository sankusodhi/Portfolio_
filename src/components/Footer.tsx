
import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-white/10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-primary">S</span>anku <span className="text-primary">R</span>am <span className="text-primary">S</span>odhi
            </h2>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <a href="#home" className="flex items-center justify-center w-10 h-10 rounded-full bg-glass hover:bg-primary/20 transition-colors">
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sanku Ram Sodhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
