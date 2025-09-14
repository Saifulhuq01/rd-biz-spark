import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ServicesSection from './ServicesSection';
import HiringSection from './HiringSection';
import TestimonialsSection from './TestimonialsSection';

type TabType = 'home' | 'vision' | 'mission' | 'values' | 'testimonials' | 'about';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'values', label: 'Values' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About Us' }
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
            className={`flex-1 min-w-fit px-6 py-4 text-base font-semibold rounded-none tab-button ${
              activeTab === tab.id
                ? 'active bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
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