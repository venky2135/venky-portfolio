import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      id: 1,
      title: 'AWS Academy Data Engineering',
      issuer: 'AWS Academy & AICTE EduSkills',
      period: 'July - September 2024',
      duration: '10 weeks (40 hours)',
      description: 'Comprehensive AWS data engineering program covering cloud data solutions, ETL pipelines, and analytics services.',
      skills: ['AWS S3', 'AWS Redshift', 'AWS Glue', 'AWS Athena', 'ETL Pipelines', 'Data Analytics', 'Cloud Computing'],
      certificateId: '31bf365df4f7d78ea21237463a20969e',
      image: '/certificates/AWS data engineering.png', // Your actual image
      verificationUrl: 'https://www.credly.com/go/yV8ErTBP',
      gradient: 'from-orange-500 to-amber-600',
      verified: true,
    },
    {
      id: 2,
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      period: 'June 2024',
      duration: '20 hours',
      description: 'Foundational AWS cloud computing course covering core AWS services, security, and architectural principles.',
      skills: ['AWS Core Services', 'Cloud Security', 'EC2', 'S3', 'Cloud Architecture', 'Cost Management'],
      image: '/certificates/AWS cloud.png',
      verificationUrl: 'https://www.credly.com/go/TAOSmj8i',
      gradient: 'from-blue-500 to-indigo-600',
      verified: true,
    },
    {
      id: 3,
      title: 'Android Developer Virtual Internship',
      issuer: 'Google for Developers & AICTE EduSkills',
      period: 'January - March 2024',
      duration: '10 weeks',
      description: 'Comprehensive Android development program supported by Google\'s India Edu Program covering modern mobile development.',
      skills: ['Android Development', 'Kotlin', 'Java', 'Mobile UI/UX', 'Google APIs', 'App Architecture'],
      certificateId: '9abd0e20731f96158d62f7811ccfb711',
      image: '/certificates/Android dev.png',
      gradient: 'from-green-500 to-emerald-600',
      verified: true,
    },
    {
      id: 4,
      title: 'Web Development Training',
      issuer: 'Internshala Trainings',
      period: 'April 2024',
      duration: '8 weeks',
      description: 'Complete full-stack web development training covering frontend and backend technologies with hands-on projects.',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'DBMS', 'Final Project'],
      certificateId: 'itsl0k817gy',
      verificationUrl: 'https://trainings.internshala.com/verify_certificate',
      image: '/certificates/Web development.png',
      gradient: 'from-cyan-500 to-blue-600',
      verified: true,
    },
    {
      id: 5,
      title: 'Salesforce Developer Virtual Internship',
      issuer: 'Salesforce & SmartInternz',
      period: 'May - July 2023',
      duration: '8 weeks',
      description: 'Advanced Salesforce development program covering CRM fundamentals, Apex programming, and Lightning Web Components.',
      skills: ['Salesforce Fundamentals', 'Apex Programming', 'Lightning Web Components', 'Process Automation', 'VS Code Setup'],
      certificateId: 'SISFVIPAD2022-62851',
      verificationUrl: 'https://smartinternz.com/internships/salesforce_certificates/0559109a26611411de7acdb477d63f10',
      image: '/certificates/Salesforce.png',
      gradient: 'from-blue-600 to-indigo-700',
      verified: true,
    },
    {
      id: 6,
      title: 'Introduction to Cloud Computing',
      issuer: 'IBM & Coursera',
      period: 'July 2024',
      duration: 'Self-paced',
      description: 'Foundational cloud computing course covering cloud service models, deployment models, and key technologies.',
      skills: ['Cloud Computing Fundamentals', 'IaaS', 'PaaS', 'SaaS', 'Cloud Security', 'Virtualization'],
      verificationUrl: 'https://coursera.org/verify/9KGZLXWCC2PT',
      image: '/certificates/Cloud computing.png',
      gradient: 'from-teal-500 to-cyan-600',
      verified: true,
    },
    {
      id: 7,
      title: 'Introduction to DevOps',
      issuer: 'IBM & Coursera',
      period: 'July 2024',
      duration: 'Self-paced',
      description: 'Comprehensive DevOps fundamentals course covering CI/CD pipelines, automation, and modern development practices.',
      skills: ['DevOps Fundamentals', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Git', 'Automation'],
      verificationUrl: 'https://coursera.org/verify/LPNYECFQJWXL',
      image: '/certificates/Devops.png',
      gradient: 'from-purple-500 to-indigo-600',
      verified: true,
    },
    {
      id: 8,
      title: 'Critical Thinking Skills for the Professional',
      issuer: 'UC Davis & Coursera',
      period: 'April 2023',
      duration: 'Self-paced',
      description: 'Professional development course focusing on analytical thinking, problem-solving, and decision-making skills.',
      skills: ['Critical Thinking', 'Problem Solving', 'Decision Making', 'Analytical Skills', 'Professional Development'],
      verificationUrl: 'https://coursera.org/verify/VANKWKJV22MD',
      image: '/certificates/Critical thinking.png',
      gradient: 'from-amber-500 to-orange-600',
      verified: true,
    },
    {
      id: 9,
      title: 'Life Skills (OE2)',
      issuer: 'Coursera',
      period: 'May 2023',
      duration: 'Self-paced',
      description: 'Essential life skills certification focusing on personal development and workplace effectiveness.',
      skills: ['Communication', 'Leadership', 'Time Management', 'Teamwork', 'Professional Ethics', 'Self-Management'],
      verificationUrl: 'https://www.credly.com/go/kTkupQRY',
      image: '/certificates/Life skills.png',
      gradient: 'from-pink-500 to-rose-600',
      verified: true,
    },
    {
      id: 10,
      title: 'Build Reports and Dashboards in Power BI',
      issuer: 'Vodafone Idea Foundation & Coursera',
      period: 'July 2024',
      duration: 'Self-paced',
      description: 'Hands-on Power BI training covering data visualization, report creation, and dashboard development.',
      skills: ['Power BI', 'Data Visualization', 'Dashboard Creation', 'Report Building', 'Business Intelligence', 'Data Analysis'],
      certificateId: 'VFLMS24_113404',
      image: '/certificates/Power bi.png',
      gradient: 'from-yellow-500 to-red-500',
      verified: true,
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, certificates.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications from leading technology companies and educational institutions
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Certificate Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                {/* Certificate Image */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={currentCert.image}
                    alt={`${currentCert.title} Certificate`}
                    className="w-full h-full object-contain bg-white transition-all duration-500"
                  />
                  
                  {/* Overlay with verification badge */}
                  <div className="absolute top-4 right-4">
                    {currentCert.verified && (
                      <Badge className="bg-green-500 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-6">
              <div>
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${currentCert.gradient} text-white mb-4`}>
                  <Award className="h-6 w-6" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {currentCert.title}
                </h3>
                
                <p className="text-lg text-muted-foreground font-medium mb-4">
                  {currentCert.issuer}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentCert.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>{currentCert.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {currentCert.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Skills Acquired</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCert.skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  className={`bg-gradient-to-r ${currentCert.gradient} hover:opacity-90 text-white shadow-lg`}
                  onClick={() => {
                    // Open certificate image in full screen
                    window.open(currentCert.image, '_blank');
                  }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Certificate
                </Button>
                
                {currentCert.verificationUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(currentCert.verificationUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation - Show 5 at a time */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {certificates.slice(0, 10).map((cert, index) => (
            <Card
              key={cert.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:scale-105'
              }`}
              onClick={() => goToSlide(index)}
            >
              <CardContent className="p-3">
                <div className="aspect-[4/3] mb-2 overflow-hidden rounded bg-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-medium text-sm text-center line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Hours of Training</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Skills Acquired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
