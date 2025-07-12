import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card electric-glow animate-glow">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                  alt="Alex Johnson"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block gradient-text">Alex Johnson</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Full-Stack Developer & UI/UX Designer crafting beautiful digital experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="electric-glow hover-lift touch-button"
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="hover-lift touch-button"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 mb-16">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-button p-2 rounded-full">
                <Github size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-button p-2 rounded-full">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-button p-2 rounded-full">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors touch-button p-3 rounded-full"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;