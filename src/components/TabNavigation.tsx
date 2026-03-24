import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, Utensils, Cpu, ArrowUpRight } from 'lucide-react';
import ServicesSection from './ServicesSection';
import HiringSection from './HiringSection';
import TestimonialsSection from './TestimonialsSection';

type TabType = 'home' | 'vision' | 'mission' | 'values' | 'testimonials' | 'about' | 'gallery';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images data (placeholder - user will update later)
  const galleryImages = [
    { 
      id: 1, 
      src: '/images/office/1.jpeg', 
      alt: 'RDbiz Modern Office Space',
      category: 'Achievement'
    },
    { 
      id: 2, 
      src: '/images/office/2.jpeg', 
      alt: 'Business Conference Success',
      category: 'Celebration'
    },
    { 
      id: 3, 
      src: '/images/office/3.jpeg', 
      alt: 'SET-ME Education Center',
      category: 'Achievement'
    },
    { 
      id: 4, 
      src: '/images/office/4.jpeg', 
      alt: 'Real Estate Development',
      category: 'Achievement'
    },
    { 
      id: 5, 
      src: '/images/office/5.jpeg', 
      alt: 'Team Building Success',
      category: 'Celebration'
    },
    { 
      id: 6, 
      src: '/images/office/6.jpeg', 
      alt: 'Professional Development',
      category: 'Achievement'
    },
    { 
      id: 7, 
      src: '/images/office/7.jpeg', 
      alt: 'Wellness & Recreation Center',
      category: 'Achievement'
    },
    { 
      id: 8, 
      src: '/images/office/8.jpeg', 
      alt: 'Leadership Excellence',
      category: 'Celebration'
    },
    { 
      id: 9, 
      src: '/images/office/9.jpeg', 
      alt: 'Leadership Excellence',
      category: 'Celebration'
    },
    { 
      id: 10, 
      src: '/images/office/10.jpeg', 
      alt: 'Leadership Excellence',
      category: 'Celebration'
    },
    { 
      id: 11, 
      src: '/images/office/11.jpeg', 
      alt: 'Leadership Excellence',
      category: 'Celebration'
    },
    { 
      id: 12, 
      src: '/images/office/12.jpg', 
      alt: 'Leadership Excellence',
      category: 'Celebration'
    }
  ];

  const achievements = [
    '🏆 Successfully implemented SOA systems for 50+ small businesses',
    '🎯 Achieved 95% customer satisfaction rate in business solutions',
    '📈 Helped clients increase profitability by an average of 40%',
    '🌟 Established partnerships with global education institutions',
    '💼 Created 200+ job opportunities through our hiring programs',
    '🏢 Developed state-of-the-art conference and recreation centers'
  ];

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'vision', label: 'Vision' },
    { id: 'values', label: 'Values' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="fade-in">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <section className="text-center mb-16 fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  We focus on developing infrastructure, products, and services to help our customers
                  meet their business demands in a cost-effective manner and achieve their targeted profitability.
                  <br /><br />
                  RDbiz meets <strong className="text-primary">"Service Oriented Architecture (SOA)"</strong> and{' '}
                  <strong className="text-primary">"Net Enabled SOA"</strong> standards,
                  delivering high-performance, cost-effective solutions that match world-class standards.
                </p>
              </section>
              <ServicesSection />
              <HiringSection />
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RD biz VISION STATEMENTS</h2>
            <div className="space-y-6 text-foreground">
              <div className="bg-accent/20 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">People working together, providing small business management services through:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Service Oriented Architecture (SOA)</li>
                  <li>• System of Systems Philosophy</li>
                  <li>• Innovation implementing value-adding features (products and services)</li>
                  <li>• Capabilities to our customer bases and end users</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">We focus on our Products and Services to help our customer bases, including:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Lucky Girls Hostel (LGH)</li>
                  <li>• SET-ME (Science, Engineering and Technology Institution)</li>
                  <li>• Recreation and conference centers (hourly basis renters)</li>
                  <li>• Helping small business customers provide cost-effective solutions to their end customers</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">Our vision support plan also focuses on:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Quality and Reliability metrics development</li>
                  <li>• Leveraging partnerships with other small businesses, education, and training centers</li>
                  <li>• Collaborating with governments worldwide</li>
                  <li>• Fostering an inclusive and diverse workforce</li>
                  <li>• Aspiring to be the best in our serving metropolis / cosmopolitan area</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RD biz MISSION STATEMENTS</h2>
            <div className="space-y-6 text-foreground">
              <div className="bg-accent/20 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">We do "Operations Support System" (OSS) covering:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Fault</li>
                  <li>• Configuration</li>
                  <li>• Accounting</li>
                  <li>• Performance</li>
                  <li>• Systems Management</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">Our System comprises of:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Doctrine Experience (DOTMLPF)</li>
                  <li>• Operations</li>
                  <li>• Training</li>
                  <li>• Material (hardware & software solutions)</li>
                  <li>• Logistics</li>
                  <li>• Processes</li>
                  <li>• Facilities with data / meta-data metrics implementation</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <p className="font-semibold text-secondary mb-3">We develop "Service Oriented Architecture (SOA) Systems".</p>
                <h3 className="font-semibold text-secondary mb-3 mt-6">We define & develop products and services to cater to our customers' needs, providing:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Cost effectiveness</li>
                  <li>• Risk reductions</li>
                  <li>• Marketability</li>
                  <li>• Benefits and profitability</li>
                  <li>• Career advancement for employees, clients, interns, and partners</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RD biz VALUES STATEMENTS</h2>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="font-semibold text-secondary mb-4 text-lg">We take on responsibility for our mission to:</h3>
              <ul className="space-y-3 ml-6 text-muted-foreground text-lg leading-relaxed">
                <li>• Design, build, and service our business customers' chosen products and services</li>
                <li>• Meet high quality and reliability standards</li>
                <li>• Ensure sound decision-making in all processes</li>
              </ul>
            </div>
          </div>
        );

      case 'testimonials':
        return <TestimonialsSection />;

      case 'about':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">About Us</h2>
            
            {/* Our Products Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a 
                href="http://rdbizfp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-[#FF9D6C] to-[#BB4E75] hover-lift transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-[14px] p-6 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-transparent">
                  <div className="mb-4 p-4 rounded-full bg-[#FF9D6C]/10 text-[#FF9D6C] group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                    <Utensils size={40} className="animate-pulse-subtle" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-500">
                    RDbiz Food Products
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                    Specializing in innovative food solutions and quality products for a healthier lifestyle.
                  </p>
                  <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[#BB4E75] group-hover:text-white transition-all duration-500">
                    Explore Venture <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>

              <a 
                href="http://rdbizaisolutions.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] hover-lift transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-[14px] p-6 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-transparent">
                  <div className="mb-4 p-4 rounded-full bg-[#4facfe]/10 text-[#4facfe] group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                    <Cpu size={40} className="animate-pulse-subtle" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-500">
                    RDbiz AI Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-500">
                    Cutting-edge Artificial Intelligence solutions for small businesses and modern infrastructure.
                  </p>
                  <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[#00f2fe] group-hover:text-white transition-all duration-500">
                    Explore Venture <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
            
            {/* Company Description */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                RDbiz is dedicated to empowering small businesses through innovative infrastructure,
                services, and training under the <span className="font-bold text-primary">SET-ME model</span>. 
                Founded by visionary entrepreneur Ravi Dakshinamoorthy, we combine 
                <span className="font-bold text-secondary"> American business acumen</span> with 
                <span className="font-bold text-primary"> global perspectives</span> to deliver 
                world-class solutions that help businesses thrive in today's competitive landscape.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-primary/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">📍 Address:</span>
                    <span>Old# 27/ New# 10, 9th Avenue, 45th Street, Ashok Nagar, Chennai, Tamil Nadu - 600083</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">📞 Phone:</span>
                    <span className="font-mono">(004) 31568424</span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">✉️ Email:</span>
                    <span>info@rdbiz.com</span>
                  </div> */}
                  {/* <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">🌐 Website:</span>
                    <span>www.rdbiz.com</span>
                  </div> */}
                </div>
              </div>

              <div className="bg-card border border-secondary/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">SOA Systems</strong> Expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-secondary">SET-ME</strong> Training Model</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">Cost-Effective</strong> Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-secondary">Global</strong> Partnerships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">24/7</strong> Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-secondary mb-3">Business Hours</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <span className="font-semibold text-primary">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </div>
                <div>
                  <span className="font-semibold text-primary">Saturday:</span> 10:00 AM - 4:00 PM
                </div>
              </div>
              <p className="mt-2 text-sm italic">Closed on Sundays and major holidays</p>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="max-w-6xl mx-auto p-4 sm:p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Our Achievements & Celebrations</h2>
            
            {/* Achievements Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-6 text-center">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card border border-primary/20 p-4 rounded-lg">
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="mb-6">
              {/* <div className="flex flex-wrap gap-2 justify-center mb-6">
                <Badge variant="secondary" className="text-sm font-medium">
                  🏆 Achievements
                </Badge>
                <Badge variant="outline" className="text-sm font-medium">
                  🎉 Celebrations
                </Badge>
              </div> */}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id} 
                    className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      {/* <Badge 
                        variant={image.category === 'Achievement' ? 'secondary' : 'outline'} 
                        className="text-xs mb-1"
                      >
                        {image.category}
                      </Badge> */}
                      {/* <p className="text-white text-sm font-medium truncate">{image.alt}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Screen Image Modal */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-4xl w-[95vw] h-[95vh] p-0 overflow-hidden">
                <DialogHeader className="absolute top-0 right-0 z-10 p-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogHeader>
                {selectedImage && (
                  <img 
                    src={selectedImage} 
                    alt="Full screen view"
                    className="w-full h-full object-contain"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-8 bg-card rounded-xl shadow-medium overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex flex-wrap border-b-2 border-primary">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`flex-1 min-w-fit px-6 py-4 text-base font-semibold rounded-none transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground border-b-2 border-primary'
                : 'bg-card hover:bg-muted/50 text-foreground hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab.id as TabType)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabNavigation;