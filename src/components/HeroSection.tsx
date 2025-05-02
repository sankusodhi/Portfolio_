
// import React from "react";
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
//       <div className="section-container">
//         <div className="flex flex-col md:flex-row items-center justify-center">
//           <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0 animate-fade-in">
//             <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-glass mb-5">
//               👋 Full-Stack Developer
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//               Hi, I'm <span className="text-primary">Sanku Ram Sodhi</span>
//             </h1>
//             <p className="text-lg text-gray-300 mb-8 max-w-xl">
//               A passionate Full-Stack Developer from Dantewada, Chhattisgarh, creating elegant solutions through code.
//             </p>
//             <div className="flex flex-wrap justify-center md:justify-start gap-4">
//               <a href="#contact" className="button-primary">
//                 Hire Me
//               </a>
//               <a 
//                 href="#projects" 
//                 className="px-6 py-3 rounded-full border border-white/20 hover:border-primary/50 transition-all duration-300"
//               >
//                 View Projects
//               </a>
//             </div>
//             <div className="flex items-center mt-10 space-x-5 justify-center md:justify-start">
//               <a href="https://github.com/sankusodhi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
//                 <Github size={22} />
//               </a>
//               <a href="https://www.linkedin.com/in/sanku-ram-sodhi-331191291/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
//                 <Linkedin size={22} />
//               </a>
//               <a href="mailto:sankuramsodhi23@navgurukul.org" className="text-gray-300 hover:text-primary transition-colors">
//                 <Mail size={22} />
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/3 flex justify-center relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             <div className="relative w-64 h-64 md:w-80 md:h-80">
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-light to-purple-dark opacity-70 blur-xl animate-pulse-slow"></div>
//               <div className="absolute inset-0 glass-card rounded-full overflow-hidden border-4 border-white/10">
//                 {/* Placeholder for profile image - replace with actual image */}
//                 <div className="w-full h-full bg-gradient-to-br from-purple-light/40 to-purple-dark/40 flex items-center justify-center text-3xl font-bold">
//                 <img
//                  src="profile.jpeg"
//                  alt="Sanku Ram Sodhi"
//                  className="w-full h-full object-cover"
//                  />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
//           <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors">
//             <span className="text-sm mb-2">Scroll Down</span>
//             <ArrowDown size={20} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* === Left Text Section === */}
          <div className="md:w-2/3 text-center md:text-left animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-glass mb-5">
              👋 Full-Stack Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Sanku Ram Sodhi</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              A passionate Full-Stack Developer from Dantewada, Chhattisgarh, creating elegant solutions through code.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="button-primary">
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-primary/50 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center mt-10 space-x-5 justify-center md:justify-start">
              <a
                href="https://github.com/sankusodhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanku-ram-sodhi-331191291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:sankuramsodhi23@navgurukul.org"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* === Right Profile Image === */}
<div className="md:w-1/3 w-full flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl flex items-center justify-center">
    {/* Glowing Background */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 opacity-60 blur-2xl animate-pulse-slow z-0"></div>

    {/* Profile Image */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 z-10">
      <img
        src="WhatsApp Image 2025-02-05 at 12.22.25 PM.jpeg"
        alt="Sanku Ram Sodhi"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
