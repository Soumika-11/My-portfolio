import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather data visualization.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, automated reporting, and social media platform integrations.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "D3.js", "MongoDB", "Twitter API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimized performance.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout logging, progress visualization, and social sharing features.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Express", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group animate-fade-in cursor-pointer touch-manipulation"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.demo, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 touch-manipulation"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 touch-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 touch-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;