import { ExternalLink, Github, Eye, Calendar, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Chat-Sphere',
      subtitle: 'Real-time Communication Platform',
      description: 'A comprehensive real-time chat platform built with Node.js, Express, and Socket.IO, supporting both private messages and group conversations. Features include chat history persistence, typing indicators, presence tracking, and a modular architecture designed for future expansion into voice and video calls.',
      technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time messaging with Socket.IO',
        'Private and group chat functionality',
        'Chat history persistence',
        'Typing indicators and user presence',
        'Responsive design for all devices',
        'Modular architecture for scalability',
      ],
      category: 'Full-Stack Web App',
      status: 'Completed',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'PG Life Project',
      subtitle: 'Accommodation Finder Platform',
      description: 'A responsive front-end website that enables users to search and locate nearby PG accommodations based on city and area. Built with vanilla HTML, CSS, and JavaScript, focusing on accessibility, ease of navigation, and improved user experience for accommodation seekers.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      features: [
        'Location-based PG search functionality',
        'Responsive design for mobile and desktop',
        'Interactive maps integration',
        'Advanced filtering options',
        'User-friendly interface design',
        'Fast loading and optimized performance',
      ],
      category: 'Frontend Web App',
      status: 'Completed',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Short Video Analysis Platform',
      subtitle: 'Deep Learning for Content Analytics',
      description: 'An innovative platform leveraging CNN, RNN, and LSTM neural networks to analyze short video content and provide insights to help content creators understand trends and improve their social media reach. Uses advanced machine learning techniques for video processing and trend analysis.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'RNN', 'LSTM', 'OpenCV', 'Pandas', 'NumPy'],
      features: [
        'Deep learning video analysis',
        'Trend prediction algorithms',
        'Content performance metrics',
        'Social media integration insights',
        'Visual analytics dashboard',
        'Batch processing capabilities',
      ],
      category: 'Machine Learning',
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'In Development':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            machine learning, and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover-lift shadow-soft hover:shadow-large transition-all duration-300 animate-slide-up overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient and status */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-xs text-primary font-medium">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs px-2 py-1 animate-fade-in"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
                    onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open('https://github.com/venky2135', '_blank')}
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open('https://github.com/venky2135', '_blank')}
              className="bg-primary hover:bg-primary-dark shadow-medium hover:shadow-large transition-all duration-300"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;