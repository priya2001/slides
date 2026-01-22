'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

const Layout1Slide4 = () => {
  const teamMembers = [
    {
      name: "David Johnson",
      role: "CEO & Founder",
      description: "Former VP of Engineering at Microsoft with 15 years in enterprise software",
      bgColor: "bg-green-50"
    },
    {
      name: "Lisa Chen",
      role: "CTO",
      description: "Ex-Google senior engineer specializing in distributed systems and AI",
      bgColor: "bg-purple-50"
    },
    {
      name: "Robert Kim",
      role: "Head of Product",
      description: "Previously led product at Salesforce, expert in enterprise UX design",
      bgColor: "bg-yellow-50"
    },
    {
      name: "Maria Santos",
      role: "VP of Sales",
      description: "15+ years in B2B sales, previously grew revenue 500% at enterprise SaaS startup",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <Heading 
          title="Our Experienced Team"
          size="xl"
          titleColor="text-black"
          className="mb-16 text-left"
        />
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <FeatureCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              bgColor={member.bgColor}
              isTeamCard={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide4;