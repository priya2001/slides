'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

const Layout1Slide5 = () => {
  const statCards = [
    {
      metric: "$68B Market",
      subtitle: "Total Addressable Market",
      description: "Global workflow automation market expected to reach $68B by 2028, growing at 23% CAGR.",
      bgColor: "bg-green-50"
    },
    {
      metric: "500M+ Users",
      subtitle: "Potential User Base",
      description: "Over 500 million knowledge workers globally who could benefit from workflow automation.",
      bgColor: "bg-purple-50"
    },
    {
      metric: "85% Adoption",
      subtitle: "Enterprise Demand",
      description: "85% of enterprises plan to increase workflow automation spending in the next 2 years.",
      bgColor: "bg-yellow-50"
    },
    {
      metric: "$2.4M Average",
      subtitle: "Annual Savings",
      description: "Average enterprise saves $2.4M annually by implementing comprehensive workflow automation.",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
      
        <Heading 
          title="Massive Market Opportunity"
          subtitle="The workflow automation market is experiencing explosive growth driven by digital transformation initiatives."
          size="xl"
          titleColor="text-black"
          subtitleColor="text-gray-600"
          className="mb-12 text-left"
        />
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {statCards.map((card, index) => (
            <FeatureCard
              key={index}
              metric={card.metric}
              subtitle={card.subtitle}
              description={card.description}
              bgColor={card.bgColor}
              isStatCard={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide5;