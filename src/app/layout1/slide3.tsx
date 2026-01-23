'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import BulletPoint from '../../components/BulletPoint';
import Heading from '../../components/Heading';

const Layout1Slide3 = () => {
  const bulletPoints = [
    {
      title: "All-in-One Platform",
      description: "Single dashboard that connects all your business tools and data sources"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent workflows that learn and adapt to your business processes"
    },
    {
      title: "Real-time Analytics",
      description: "Actionable insights and performance metrics across all departments"
    },
    {
      title: "Seamless Integration",
      description: "200+ pre-built integrations with popular business tools and APIs"
    }
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-gray-100 flex justify-center items-start overflow-hidden">
      
      {/* Fixed slide canvas */}
      <section className="w-[1280px] h-[720px] bg-gray-50 relative overflow-hidden">
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <LogoPlaceholder />
        </div>

        {/* Content */}
        <div className="px-12 pt-24 h-full">
          <div className="flex flex-row items-center justify-between gap-16 h-full">
            
            {/* Left content */}
            <div className="w-1/2">
              <Heading 
                title="Our Solution: Unified Workflow Platform"
                size="xl"
                titleColor="text-black"
                className="mb-10 text-left"
              />

              <div className="space-y-2">
                {bulletPoints.map((point, index) => (
                  <BulletPoint
                    key={index}
                    title={point.title}
                    description={point.description}
                    textColor="text-black"
                    bgColor="text-gray-600"
                  />
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className="w-1/2 flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80" 
                alt="Business dashboard with analytics and workflow visualization"
                className="w-[520px] h-[360px] object-cover rounded-2xl shadow-sm"
              />
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Layout1Slide3;
