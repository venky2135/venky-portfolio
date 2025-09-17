import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Sree Vidyanikethan Engineering College',
      location: 'Bangalore, Karnataka',
      duration: '2021 - 2025',
      grade: '8.0/10 CGPA',
      status: 'Pursuing',
      description: 'Comprehensive program covering software engineering, data structures, algorithms, database systems, and modern development frameworks.',
      highlights: [
        'Core subjects: Data Structures, Algorithms, DBMS, Operating Systems',
        'Specialized in Full-Stack Development and Cloud Computing',
        'Active participation in coding competitions and hackathons',
        'Project-based learning with real-world applications',
      ],
      color: 'from-blue-500 to-indigo-600',
      icon: '🎓',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      location: 'Tirupati, Andhra Pradesh',
      duration: '2019 - 2021',
      grade: '954/1000',
      status: 'Completed',
      description: 'Mathematics, Physics, and Chemistry with a focus on analytical thinking and problem-solving skills.',
      highlights: [
        'Strong foundation in Mathematics and Physics',
        'Developed analytical and logical reasoning skills',
        'Excellence in problem-solving and critical thinking',
        'Leadership roles in academic activities',
      ],
      color: 'from-green-500 to-teal-600',
      icon: '📚',
    },
    {
      degree: 'SSC (10th Standard)',
      institution: 'VR High School',
      location: 'Rayachoty, Andhra Pradesh',
      duration: '2018 - 2019',
      grade: '9.8/10 GPA',
      status: 'Completed',
      description: 'Secondary education with exceptional academic performance and well-rounded development.',
      highlights: [
        'Outstanding academic performance across all subjects',
        'Strong foundation in core subjects',
        'Participation in school competitions and events',
        'Recognition for academic excellence',
      ],
      color: 'from-orange-500 to-red-600',
      icon: '🏫',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pursuing':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that shapes my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card
              key={education.degree}
              className="group hover-lift shadow-soft hover:shadow-large transition-all duration-300 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${education.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{education.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {education.degree}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium text-foreground">{education.institution}</span>
                          </div>
                          <div className="hidden sm:block text-muted-foreground">•</div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {education.duration}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(education.status)}>
                      {education.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Grade and Description */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">Grade</span>
                    </div>
                    <p className="text-lg font-bold text-primary">{education.grade}</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-muted-foreground leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Key Highlights
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievements Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold font-display mb-8 text-foreground">
            Academic Journey Summary
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
              <div className="text-3xl font-bold text-primary mb-2">8.0</div>
              <div className="text-sm text-muted-foreground">Current CGPA</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years in Tech</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
              <div className="text-3xl font-bold text-primary mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Consistent Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;