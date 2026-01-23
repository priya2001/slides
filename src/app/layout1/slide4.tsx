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
    <div className="w-[1280px] h-[720px] bg-gray-100 flex justify-center items-start overflow-hidden">
      
      {/*Fixed slide canvas */}
      <section className="w-[1280px] h-[720px] bg-gray-50 relative overflow-hidden">
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <LogoPlaceholder />
        </div>

        {/* Content */}
        <div className="px-12 pt-24">
          <Heading 
            title="Our Experienced Team"
            size="xl"
            titleColor="text-black"
            className="mb-16 text-left"
          />

          {/* Team cards */}
          <div className="grid grid-cols-4 gap-6">
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
    </div>
  );
};

export default Layout1Slide4;
