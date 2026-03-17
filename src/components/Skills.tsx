
import { Code, Database, Cloud, Palette, Users, Zap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["AWS S3", "DynamoDB", "Athena", "Lambda", "CodeCommit", "CloudWatch", "SWF", "CloudFormation", "Automation & Workflow Optimization", "Cloud-Based Reporting Systems"]
    },
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["ReactJS", "NextJS", "React Native", "JavaScript (ES6+)", "Basic Angular (Learning)"]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: ["GoLang", "Python", "SQL", "RESTful APIs", "AI Integrations (AWS Bedrock)"]
    },
    {
      title: "Other",
      icon: <Users size={24} />,
      skills: ["Cross-platform Development", "Mentorship & Team Collaboration", "IT Support", "Client Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="glass-card p-6 rounded-xl animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
