
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "CloudMix",
      description: "A responsive social media web application built with React.js and Tailwind CSS. Users can interact via posts with a clean UI and optimized performance.",
      status: "In Progress",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://cloud-mix-phase-1.vercel.app/",
      githubUrl: "#",
      image: "/lovable-uploads/32bc5025-161b-4b7b-b0ab-7a559378b21c.png"
    },
    {
      title: "FitSense",
      description: "AI outfit rater and stylist application. Upload your look or mix items to get smart, actionable style advice with features like style critique and closet suggestions.",
      status: "Complete",
      technologies: ["React.js", "Next.js", "AI Integration", "TypeScript"],
      liveUrl: "https://fit-sense-lemon.vercel.app/login",
      githubUrl: "#",
      image: "/lovable-uploads/23786134-77a8-4615-807c-bdaf1e5cc4d2.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing my passion for creating innovative web applications with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="skill-badge text-xs">{project.status}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
