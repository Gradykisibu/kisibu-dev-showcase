
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center text-hero-text animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Kisibu <span className="text-primary">Grady</span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-text/80 mb-2">Front-End Developer</p>
          <p className="text-lg md:text-xl text-hero-text/70 max-w-2xl mx-auto">
            Specializing in React.js, Next.js & Modern Web Technologies
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-hero-text/90 max-w-3xl mx-auto leading-relaxed">
            Results-driven developer with expertise in building fast, scalable, and user-focused 
            web applications. Passionate about clean code, innovative solutions, and creating 
            exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 border border-primary/20"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="mailto:kisibugrady3980@gmail.com" 
            className="text-hero-text/70 hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com" 
            className="text-hero-text/70 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-hero-text/70 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-hero-text/50" size={32} />
        </div>
      </div>
    </section>
  );
};
