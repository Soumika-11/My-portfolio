import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-8">
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold gradient-text tracking-tight px-1 py-1">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm xs:text-base sm:text-lg md:text-xl px-2 sm:px-3 md:px-4 py-2 rounded-md text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105 touch-nav font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden touch-button p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`fixed inset-0 bg-background/95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ minHeight: '100dvh' }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 touch-button p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </Button>
          <div className="flex flex-col space-y-3 xs:space-y-4 sm:space-y-6 text-lg xs:text-xl sm:text-2xl font-semibold w-full max-w-xs px-2 sm:px-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-center text-muted-foreground hover:text-primary transition-colors duration-200 touch-nav swipe-indicator px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;