import { useEffect } from 'react';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import Footer from '@/components/Footer';
import FloatingLogo from '@/components/FloatingLogo';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'RDbiz - Small Business Development Solutions | Dr. Ravi Dakshinamoorthy | SET-ME Model';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'RDbiz (Ravi Dakshinamoorthy\'s Business) specializes in small business development under the SET-ME model. Expert solutions in real estate, office management, conference centers, education & training with SOA systems expertise. Based in Chennai, India.'
      );
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://rdbizbsd.com/');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* SEO Headers */}
      <header className="sr-only">
        <h1>RDbiz - Small Business Development Solutions by Ravi Dakshinamoorthy</h1>
      </header>
      
      <main>
        <Header />
        <div className="container mx-auto px-4">
          <TabNavigation />
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Interactive Logo */}
      <FloatingLogo />
    </div>
  );
};

export default Index;
