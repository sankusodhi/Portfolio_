
import React, { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
};

const ProjectsSection = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Leave Management System",
      description: "A comprehensive system built using Frappe Framework that allows employees to apply and manage leave requests efficiently.",
      technologies: ["Frappe", "Python", "JavaScript", "MySQL"],
      category: ["Web App", "ERP"],
      githubLink: "#"
    },
    {
      id: 2,
      title: "Expense Management System",
      description: "Track and analyze daily expenses with detailed reports and budget planning features.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["Web App", "Finance"],
      githubLink: "#"
    },
    {
      id: 3,
      title: "Library Management Web App",
      description: "Developed for Frappe Developer Hiring Test. Manages book inventory, borrowing and returns.",
      technologies: ["Frappe", "Python", "JavaScript", "MariaDB"],
      category: ["Web App", "ERP"],
      githubLink: "#"
    },
    {
      id: 4,
      title: "Quiz App (KBC Style)",
      description: "An interactive quiz application with timer and scoreboard similar to Kaun Banega Crorepati format.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: ["Web App", "Education"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 5,
      title: "Hotel Booking Website",
      description: "Designed for Dantewada district to promote local tourism and simplify hotel booking process.",
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      category: ["Web App", "Tourism"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 6,
      title: "Academic Doubt Resolver",
      description: "Uses Gemini API to automatically email solutions to academic doubts submitted by students.",
      technologies: ["Python", "Gemini API", "Flask"],
      category: ["Web App", "Education", "AI"],
      githubLink: "#"
    },
    {
      id: 7,
      title: "Weekly Mentee Progress Analyzer",
      description: "Automated reporting system for Navgurukul mentors to track and analyze student progress.",
      technologies: ["React", "Node.js", "Chart.js", "MySQL"],
      category: ["Web App", "Education", "Analytics"],
      githubLink: "#"
    },
    {
      id: 8,
      title: "TechSpark Website",
      description: "Landing page for my startup showcasing full-stack services and portfolio of work.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: ["Website", "Business"],
      githubLink: "#",
      demoLink: "#"
    },
  ];

  const allCategories = ["All", ...new Set(projects.flatMap(project => project.category))];
  
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.category.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mt-12">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-primary text-white"
                      : "bg-glass hover:bg-glass-light"
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full md:w-64 px-4 py-2 rounded-full bg-glass border border-white/10 focus:outline-none focus:border-primary/50"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="glass-card overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${(project.id % 6) * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-purple/30 to-purple-dark/30 relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code size={48} className="text-white/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/70 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/70 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={`${project.id}-${tech}`} 
                        className="bg-glass px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
