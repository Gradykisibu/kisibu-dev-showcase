
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple success message - no email sending
    setTimeout(() => {
      toast({
        title: "Thank you for your interest!",
        description: "Please contact me directly at kisibugrady3980@gmail.com",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "kisibugrady3980@gmail.com", href: "mailto:kisibugrady3980@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+27 61 649 3416", href: "tel:+27616493416" },
    { icon: <MapPin size={20} />, label: "Location", value: "52 Andrews Street, Kenilworth", href: null },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Mail size={24} />, label: "Email", href: "mailto:kisibugrady3980@gmail.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Available for:</strong><br />
                  Freelance Projects • Full-time Opportunities • Consulting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 Kisibu Grady. Built with React, Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
