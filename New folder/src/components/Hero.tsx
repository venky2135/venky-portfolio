import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo2.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-large hover-glow">
              <img
                src={profilePhoto}
                alt="Venkateswar Reddy Konda"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Venkateswar Reddy Konda
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
              Full-Stack Developer | Java | React | Spring Boot
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Building scalable applications & solving real-world problems with modern technologies.
              Passionate about creating seamless user experiences and robust backend systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary-dark shadow-medium hover:shadow-large transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex justify-center space-x-6 mb-12" style={{ animationDelay: '0.9s' }}>
            <a
              href="https://linkedin.com/in/venky2135"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/venky2135"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:venkateswarreddykonda2135@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;