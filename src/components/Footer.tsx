import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/venky2135',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/venky2135',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:venkateswarreddykonda2135@gmail.com',
      color: 'hover:text-green-600',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold font-display text-primary hover:text-primary-light transition-colors duration-300 mb-2"
            >
              VRK
            </button>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                className={`p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
              by Venkateswar Reddy Konda
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <div className="hidden sm:block">•</div>
            <span>Designed for performance & accessibility</span>
            <div className="hidden sm:block">•</div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary-light transition-colors duration-300 font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;