import { useEffect } from 'react';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import Footer from '@/components/Footer';
import FloatingLogo from '@/components/FloatingLogo';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'RDbiz - Ravi Dakshinamoorthy Business | Small Business Development Solutions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'RDbiz specializes in small business development under the SET-ME model. Offering real estate, office management, conference centers, and education services with SOA systems expertise.'
      );
    }
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
