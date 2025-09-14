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
          <div className="max-w-4xl mx-auto p-8 fade-in text-center">
            <h2 className="text-3xl font-bold gradient-text mb-8">About Us</h2>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                RDbiz is dedicated to empowering small businesses through innovative infrastructure,
                services, and training under the SET-ME model. Founded by visionary entrepreneur
                Ravi Dakshinamoorthy, we combine American business acumen with global perspectives
                to deliver world-class solutions that help businesses thrive in today's competitive landscape.
              </p>
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