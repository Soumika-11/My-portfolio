
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Photo from "@/images/Photo.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center animate-fade-in mb-8 md:mb-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card electric-glow animate-glow mx-auto">
                <img 
                  src={Photo} 
                  alt="Soumika Das"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left animate-slide-in-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block gradient-text">Soumika Das</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
              Full-Stack Developer | Tech Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mb-8 md:mb-12">
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
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-10 md:mb-16">
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

        <div className="text-center mt-10 md:mt-16">
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