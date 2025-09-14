import ServiceCard from './ServiceCard';
import realEstateImg from '@/assets/real-estate.jpg';
import relaxationImg from '@/assets/relaxation-center.jpg';
import officeImg from '@/assets/office-management.jpg';
import conferenceImg from '@/assets/conference-center.jpg';
import educationImg from '@/assets/education-center.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "Real Estate Division",
      description: "We provide innovative real estate solutions designed to meet modern business needs. Our comprehensive approach includes property development, management, and strategic planning to maximize investment returns for our clients.",
      image: realEstateImg,
      reverse: false
    },
    {
      title: "Relaxation Centre",
      description: "A peaceful environment designed for stress relief and wellness. Our state-of-the-art relaxation facilities provide the perfect retreat for busy professionals to recharge and maintain work-life balance.",
      image: relaxationImg,
      reverse: true
    },
    {
      title: "Office & Business Management Centre",
      description: "Fully equipped office spaces with modern amenities and professional services. We provide comprehensive business management solutions including co-working spaces, virtual offices, and administrative support.",
      image: officeImg,
      reverse: false
    },
    {
      title: "Conference Centre",
      description: "Modern conference rooms with advanced facilities for meetings, presentations, and corporate events. Our venues are equipped with cutting-edge technology to ensure seamless business communications.",
      image: conferenceImg,
      reverse: true
    },
    {
      title: "Education & Training Centre",
      description: "Comprehensive learning facilities including event halls, mini library, and advanced training rooms. We support continuous learning and professional development through our specialized educational programs.",
      image: educationImg,
      reverse: false
    }
  ];

  return (
    <section className="space-y-12">
      {services.map((service, index) => (
        <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;