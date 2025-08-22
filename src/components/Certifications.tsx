
import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    "React.js",
    "Node.js", 
    "Python",
    "Golang",
    "JavaScript",
    "CSS",
    "Next.js",
    "AWS Cloud Practitioner"
  ];

  const award = {
    title: "Key Contributor Award",
    description: "Recognized for key contributions to internal design system used across multiple projects",
    icon: <Award size={32} className="text-primary" />
  };

  return (
    <section id="certifications" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Awards</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Continuous learning and recognition for excellence in development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Certifications */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="text-primary mr-3" size={28} />
                Professional Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert} 
                    className="skill-badge justify-center py-3 animate-scale-in"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="text-primary mr-3" size={28} />
                Recognition & Awards
              </h3>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  {award.icon}
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary">{award.title}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{award.description}</p>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "Recognized for creating reusable components and establishing design patterns 
                  that improved development efficiency across multiple project teams."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
