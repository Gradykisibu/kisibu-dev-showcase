
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/grady-profile.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left text-hero-text animate-fade-in order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-scale-in">
                Available for opportunities
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-primary">Grady</span>
              </h1>
              <p className="text-xl md:text-2xl text-hero-text/80 mb-2 font-medium">
                Front-End Developer
              </p>
              <p className="text-lg text-hero-text/60">
                React.js • Next.js • TypeScript
              </p>
            </div>

            <p className="text-lg text-hero-text/80 max-w-xl leading-relaxed mb-8">
              Results-driven developer with expertise in building fast, scalable, and user-focused 
              web applications. Passionate about clean code and exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 shadow-lg shadow-primary/25"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-hero-text/50 text-sm">Find me on</span>
              <div className="flex space-x-4">
                <a 
                  href="mailto:kisibugrady3980@gmail.com" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-hero-text/10 text-hero-text/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://github.com" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-hero-text/10 text-hero-text/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-hero-text/10 text-hero-text/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full blur-sm opacity-60 animate-pulse" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={profileImage} 
                  alt="Kisibu Grady - Front-End Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-2 -left-4 bg-card px-4 py-2 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-sm font-semibold text-foreground">React.js</span>
              </div>
              <div className="absolute top-8 -right-4 bg-card px-4 py-2 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="text-sm font-semibold text-foreground">Next.js</span>
              </div>
              <div className="absolute bottom-16 -right-8 bg-primary px-4 py-2 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-sm font-semibold text-primary-foreground">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-hero-text/50 hover:text-hero-text/70 transition-colors">
          <span className="text-xs mb-2">Scroll down</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
