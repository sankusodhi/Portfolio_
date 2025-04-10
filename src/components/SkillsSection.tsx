import React from "react";
import { Code, Database, Layout, Server, Wrench, Cpu, Monitor } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
    ],
    backend: [
      { name: "Python", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 70 },
    ],
    frameworks: [
      { name: "Frappe Framework", level: 85 },
      { name: "ERPNext", level: 80 },
      { name: "WordPress", level: 75 },
    ],
    database: [
      { name: "MySQL", level: 80 },
      { name: "MariaDB", level: 75 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Linux (Ubuntu)", level: 75 },
    ],
    other: [
      { name: "Excel", level: 80 },
      { name: "Canva", level: 85 },
      { name: "Digilocker", level: 70 },
    ]
  };

  const SkillCard = ({ 
    title, 
    skills, 
    icon: Icon 
  }: { 
    title: string; 
    skills: { name: string; level: number }[]; 
    icon: React.ElementType 
  }) => (
    <div className="glass-card p-6 h-full animate-fade-in">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-purple-light/20 flex items-center justify-center mr-4">
          <Icon size={24} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700/30 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-purple-light to-purple h-1.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <SkillCard title="Frontend" skills={skills.frontend} icon={Layout} />
          <SkillCard title="Backend" skills={skills.backend} icon={Server} />
          <SkillCard title="Frameworks" skills={skills.frameworks} icon={Code} />
          <SkillCard title="Database" skills={skills.database} icon={Database} />
          <SkillCard title="Tools" skills={skills.tools} icon={Wrench} />
          <SkillCard title="Other" skills={skills.other} icon={Monitor} />
        </div>
        
        <div className="mt-12 glass-card p-6 animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-glass rounded-full">Leadership</span>
            <span className="px-4 py-2 bg-glass rounded-full">Mentorship</span>
            <span className="px-4 py-2 bg-glass rounded-full">Communication</span>
            <span className="px-4 py-2 bg-glass rounded-full">Problem Solving</span>
            <span className="px-4 py-2 bg-glass rounded-full">Team Collaboration</span>
            <span className="px-4 py-2 bg-glass rounded-full">Time Management</span>
            <span className="px-4 py-2 bg-glass rounded-full">Adaptability</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
