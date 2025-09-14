import testimonialJane from '@/assets/testimonial-jane.jpg';
import testimonialJohn from '@/assets/testimonial-john.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Entrepreneur",
      content: "RDbiz helped me scale my startup with affordable solutions. Their comprehensive approach to business development gave me the infrastructure I needed to focus on growth. The team's expertise in SOA systems was exactly what my tech startup required.",
      image: testimonialJane
    },
    {
      name: "John Smith",
      role: "Manager",
      content: "Their training center boosted my team's performance significantly. The education programs are world-class and the facilities are top-notch. We've seen measurable improvements in productivity and employee satisfaction since partnering with RDbiz.",
      image: testimonialJohn
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 fade-in">
      <h2 className="text-3xl font-bold gradient-text text-center mb-12">
        What Our Clients Say
      </h2>
      
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex items-start gap-6 p-6 bg-gradient-to-r from-accent/20 to-primary/5 rounded-xl hover-lift"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-20 h-20 rounded-full border-2 border-primary object-cover flex-shrink-0"
            />
            
            <div className="flex-1">
              <div className="mb-3">
                <h4 className="font-bold text-secondary text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-primary text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;