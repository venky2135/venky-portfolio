import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venkateswarreddykonda2135@gmail.com',
      href: 'mailto:venkateswarreddykonda2135@gmail.com',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9121190092',
      href: 'tel:+919121190092',
      color: 'text-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
      color: 'text-red-600',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/venky2135',
      color: 'hover:text-blue-600',
      description: 'Connect with me professionally',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/venky2135',
      color: 'hover:text-gray-800',
      description: 'Check out my code repositories',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a conversation? Whether you have a project in mind, want to collaborate, 
            or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold font-display mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.label}
                  className="group hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300`}>
                        <info.icon className={`h-5 w-5 ${info.color} group-hover:text-primary transition-colors duration-300`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {social.description}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium hover:shadow-large transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark shadow-medium hover:shadow-large transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            Prefer a more direct approach?
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('mailto:venkateswarreddykonda2135@gmail.com?subject=Hello%20Venkateswar', '_blank')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Me Directly
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;