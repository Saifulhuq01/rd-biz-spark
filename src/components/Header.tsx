import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import rdbizLogo from '@/assets/logo.jpg';
import ceoRavi from '@/assets/ceo-ravi.jpg';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-card border-b-4 border-primary px-8 py-6 shadow-soft">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Logo without Rotation & Circle */}
          <div className="flex-shrink-0">
  <img 
    src={rdbizLogo} 
    alt="RDbiz Logo" 
    className="h-20 object-contain"
  />
</div>

          {/* Header Text */}
          <div className="flex-1 mx-8 fade-in">
            <p className="text-foreground text-lg leading-relaxed max-w-2xl">
              <span className="gradient-text font-bold">RDbiz</span> stands for{' '}
              <strong>"Ravi Dakshinamoorthy's Business"</strong>
              <br />
              Specializing in Small Business Development under the{' '}
              <strong className="text-primary">SET-ME</strong> model.
            </p>
          </div>

          {/* CEO Section */}
          <div 
            className="text-center cursor-pointer hover-lift"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={ceoRavi} 
              alt="CEO Ravi Dakshinamoorthy" 
              className="w-20 h-20 rounded-full border-2 border-primary object-cover mx-auto"
            />
            <p className="mt-2 text-sm">
              <strong className="text-secondary">Ravi Dakshinamoorthy</strong>
              <br />
              <span className="text-primary text-xs font-medium">CEO</span>
            </p>
          </div>
        </div>
      </header>

      {/* CEO Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <img 
                src={ceoRavi} 
                alt="CEO Ravi Dakshinamoorthy" 
                className="w-32 h-32 rounded-full border-4 border-primary object-cover"
              />
            </div>
            <DialogTitle className="text-2xl gradient-text">
              Ravi Dakshinamoorthy
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground leading-relaxed">
            CEO of RDbiz — American return entrepreneur with a vision for small business growth.
            Passionate about SOA systems and inclusive innovation, bringing decades of experience 
            to empower businesses through strategic development and technology solutions.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
