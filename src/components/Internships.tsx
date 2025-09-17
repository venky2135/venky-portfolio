import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Internships = () => {
  const internships = [
    {
      title: 'Full Stack Java Intern',
      company: 'Naythra Ai Applications',
      location: 'Remote',
      duration: 'June 2025',
      type: 'Internship',
      description: [
        'Developed and deployed full-stack web applications using Spring Boot for backend and Angular for frontend',
        'Integrated RESTful APIs and implemented comprehensive SQL database operations',
        'Followed CI/CD practices for smooth deployment and maintained version control using Git & GitHub',
        'Collaborated with cross-functional teams to deliver scalable solutions',
      ],
      technologies: ['Spring Boot', 'Angular', 'REST APIs', 'SQL', 'Git', 'CI/CD'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Data Engineering Intern',
      company: 'AWS Academy',
      location: 'Virtual',
      duration: 'July 2024 – September 2024',
      type: 'Virtual Internship',
      description: [
        'Gained hands-on experience in building robust data pipelines and performing ETL operations',
        'Managed complex data workflows using AWS services including S3, Redshift, Glue, and Athena',
        'Implemented data transformation processes for large-scale data analytics projects',
        'Optimized query performance and data storage strategies in cloud environments',
      ],
      technologies: ['AWS S3', 'AWS Redshift', 'AWS Glue', 'AWS Athena', 'ETL', 'Data Pipelines'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="internships" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experience gained through internships and hands-on projects in modern technology stacks.
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card
              key={internship.title}
              className="group hover-lift shadow-soft hover:shadow-large transition-all duration-300 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${internship.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {internship.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium text-foreground">{internship.company}</span>
                      </div>
                      <div className="hidden sm:block text-muted-foreground">•</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {internship.duration}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      {internship.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    {internship.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in my professional journey?
          </p>
          <a
            href="https://linkedin.com/in/venky2135"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 font-medium"
          >
            View my LinkedIn profile
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internships;