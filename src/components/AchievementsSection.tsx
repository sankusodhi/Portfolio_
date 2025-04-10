
import React from "react";
import { Award, Trophy, UserCheck, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "JEE Mains Qualifier",
      description: "Successfully cracked the prestigious JEE Mains examination.",
      icon: Award,
    },
    {
      id: 2,
      title: "Multiple Competitive Exams",
      description: "Successfully cleared PET, SSC, NTA, and Science Exhibition.",
      icon: Target,
    },
    {
      id: 3,
      title: "Gold Medal Recipient",
      description: "Won 2 gold medals for JEE ranking – awarded by MLA & PM.",
      icon: Trophy,
    },
    {
      id: 4,
      title: "Recognition by Leaders",
      description: "Met Rahul Gandhi and received recognition from District Collector & CEO.",
      icon: UserCheck,
    }
  ];

  const experiences = [
    {
      id: 1,
      role: "Life Skills Coach",
      description: "Guided students in developing essential life skills for personal and professional growth.",
      period: "2022 - Present",
    },
    {
      id: 2,
      role: "Mentor",
      description: "Mentored 90+ students, providing guidance for their academic and career development.",
      period: "2021 - Present",
    },
    {
      id: 3,
      role: "Academic Associate",
      description: "Provided academic support to students across various subjects and learning levels.",
      period: "2020 - 2022",
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Achievements & Experience</h2>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Trophy className="mr-2 text-primary" size={24} />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((item) => (
                <div key={item.id} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${item.id * 0.1}s` }}>
                  <div className="flex">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-light/20 flex items-center justify-center">
                        <item.icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <UserCheck className="mr-2 text-primary" size={24} />
              Experience
            </h3>
            
            <div className="relative pl-8 border-l border-primary/30">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="mb-10 relative animate-fade-in" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary/80 border-4 border-purple-dark"></div>
                  <div className="glass-card p-6">
                    <span className="text-xs font-medium text-primary/80 block mb-2">{exp.period}</span>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-gray-400 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
