import { Code, Database, Cloud, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly interfaces with React, Angular, and modern CSS frameworks.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications using Spring Boot, Node.js, and RESTful APIs.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Experience with AWS services, CI/CD pipelines, and containerization with Docker.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges and implementing innovative solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold font-display mb-4 text-foreground">
                Hello! I'm Venkateswar Reddy Konda
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science and Engineering student with a deep love for full-stack development. 
                 I specialize in building scalable web applications that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in technology has led me to gain hands-on experience with modern frameworks like React and Angular 
                for frontend development, and Spring Boot and Node.js for backend systems. I'm also exploring the exciting 
                world of cloud computing with AWS, focusing on data engineering and DevOps practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me learning about new technologies, contributing to open-source projects, 
                or brainstorming innovative solutions to everyday problems. I believe in the power of clean, maintainable 
                code and collaborative development.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'Spring Boot', 'React', 'Angular', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group hover-lift glass-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;