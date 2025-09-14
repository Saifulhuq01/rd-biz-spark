import { Button } from '@/components/ui/button';
import hiringTeamImg from '@/assets/hiring-team.jpg';

const HiringSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 rounded-xl text-center my-16 fade-in">
      <h2 className="text-3xl font-bold gradient-text mb-4">
        Join Our Team
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        We're always looking for talented individuals who want to make a positive impact
        in the business world. Join RDbiz and be part of our mission to empower small businesses
        through innovative solutions and collaborative growth.
      </p>
      
      <div className="flex justify-center mb-8">
        <div className="hover-lift">
          <img 
            src={hiringTeamImg} 
            alt="Join Our Team" 
            className="w-full max-w-md rounded-xl shadow-medium"
          />
        </div>
      </div>

      <Button 
        size="lg" 
        className="bg-gradient-primary hover:shadow-strong pulse-glow text-primary-foreground font-semibold px-8 py-3"
      >
        Explore Career Opportunities
      </Button>
    </section>
  );
};

export default HiringSection;