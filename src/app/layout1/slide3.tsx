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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
     
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2">
            <Heading 
              title="Our Solution: Unified Workflow Platform"
              size="xl"
              titleColor="text-black"
              className="mb-10 text-left"
            />
            
            <div className="space-y-0">
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
          
         
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Business dashboard with analytics and workflow visualization"
              className="rounded-2xl shadow-sm w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide3;