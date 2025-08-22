
import { User, MapPin, Phone, Mail } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-2xl">
              <User className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Results-driven Front-End Developer with expertise in building fast, scalable, 
                and user-focused web applications using React.js, Next.js, JavaScript, HTML, and CSS. 
                Proficient in Python and SQL, with a strong foundation in frontend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in AWS cloud platforms, UI/UX design principles, and Agile environments. 
                Recognized for clean code practices, team collaboration, and a growth-oriented mindset.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-muted-foreground">52 Andrews Street, Kenilworth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <span className="text-muted-foreground">+27 61 649 3416</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span className="text-muted-foreground">kisibugrady3980@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="skill-badge">Problem-solving</div>
                  <div className="skill-badge">Time Management</div>
                  <div className="skill-badge">Teamwork</div>
                  <div className="skill-badge">Attention to Detail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
