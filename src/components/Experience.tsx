
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "RapidTrade",
      position: "Front-End Developer",
      location: "Johannesburg",
      period: "Feb 2024 – Current",
      achievements: [
        "Built fast, responsive front-end apps with React.js/Next.js (improved performance by 30%)",
        "Collaborated with UI/UX teams to deliver mobile-friendly, pixel-perfect interfaces",
        "Integrated REST APIs and AWS services",
        "Contributed to Agile workflows (sprints, reviews, retros)",
        "Implemented reusable components and design systems"
      ]
    },
    {
      company: "Active Media Industries",
      position: "Developer",
      location: "Johannesburg", 
      period: "Jan 2021 – Jan 2024",
      achievements: [
        "Learned and adapted quickly to new technologies",
        "Strong communication and teamwork skills",
        "Worked flexible hours and met deadlines under pressure"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Building innovative solutions and growing through challenging projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-primary/30"></div>
              )}
              
              <div className="flex items-start mb-12 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 mt-2">
                  <Briefcase className="text-primary-foreground" size={20} />
                </div>
                
                {/* Content */}
                <div className="glass-card p-8 rounded-xl flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
