
import React from "react";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-16 glass-card p-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/5">
              <div className="glass-card h-full p-6 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-primary">Sanku Ram Sodhi</h3>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>Dantewada, Chhattisgarh, India</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" />
                    <span>B.Tech
                     , Software Developer.
                    </span>
                  </div>
                  
                  <p className="mt-6">
                    Currently pursuing my B.Tech in  from Assam University and learning Software Engineering at Navgurukul.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <p className="text-gray-200">
                  I'm a passionate Full-Stack Developer who loves solving real-world problems through elegant code. My journey in technology began when I discovered my passion for creating solutions that make a difference.
                </p>
                
                <p className="text-gray-300">
                  With a unique background blending and software development, I bring a different perspective to technical challenges. I believe in continuous learning and pushing my boundaries to grow personally and professionally.
                </p>
                
                <p className="text-gray-300">
                  My experiences as a Life Skills Coach, Mentor, and Academic Associate have honed my leadership and communication skills, making me an effective team player who can adapt to various environments.
                </p>
                
                <div className="pt-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-glass px-3 py-1 rounded-full text-sm">Problem Solver</span>
                    <span className="bg-glass px-3 py-1 rounded-full text-sm">Fast Learner</span>
                    <span className="bg-glass px-3 py-1 rounded-full text-sm">Team Player</span>
                    <span className="bg-glass px-3 py-1 rounded-full text-sm">Detail-Oriented</span>
                    <span className="bg-glass px-3 py-1 rounded-full text-sm">Adaptable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
