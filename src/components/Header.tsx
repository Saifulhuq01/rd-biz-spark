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
              <span className="text-primary text-xs font-medium">Our Founder & CEO</span>
            </p>
          </div>
        </div>
      </header>

      {/* CEO Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl text-center">

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

Dr. Ravi Dakshinamoorthy, Ph.D. (USA)

Dr. Ravi Dakshinamoorthy, our CEO, is a multi-disciplinary, multi-project professional who has served in WCDMA/GSM/GPRS/GERAN/3GPP standards body as an American Representative.

He has served in multiple boards, councils, interviewing committees, and selection boards. He also served as a Proposal & Program Manager for the $2.4 Billion U.S. Joint Force Programme “Objective Gateway Inc. 2” at Boeing Integrated Defense Systems division.

Dr. Ravi also served as the Chief Systems Architect for the prestigious VC-X Recapitalization IRAD Programme for the US AF1 programme.

With deep expertise in U.S. defense and aerospace, Dr. Ravi has held very high capacities, leading multi-million to billion-dollar programmes for over 24 years.

He has successfully led System-of-Systems, System Engineering, and Architecture Management, along with integrated tasks for many large-scale programmes and projects world wide.

The Future Combat Systems (US Army)

Objective Gateway Increment 2 (US Joint Services)

Presidential Aircraft Recapitalizations VC-X (US AF-1) – Supreme Commander-in-Chief of operations plane (planned tentatively for the 2019 per 2009 predictions).

✅ Dr. Ravi has also served as an independent consultant and Project Manager to the State Governor of Washington, USA, in producing a 640-page report on the RV–1 Consolidation Program “for legislative assembly members’ discussion and budgetary debate.”

✅ Dr. Ravi is a legendary leader in IT development with thirty years of post-doctorate experience, having interest in diversified subject areas including:

System-of-Systems (SoS)

Service Oriented Architecture (SOA)

Very Large Scale Systems Integration

Systems – Software

Wired – Wireless – Mobile Ad-hoc Networks

Embedded Systems

Application Development in a variety of domains


✅ Dr. Ravi is a great mentor, involved in numerous projects and programmes in skills development and training. Mentees worldwide are pursuing their careers very successfully under his career guidance and training.

⭐ Dr. Ravi has coached and developed students entering the workforce in core professional categories, and working professionals to achieve and advance in their career to the next level.


          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
