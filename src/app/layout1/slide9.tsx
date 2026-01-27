'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide9 = () => {
  // Get data for slide 9
  const slide = slideData.slides.find(s => s.id === 9);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full h-full px-16 pt-24 z-10">
        
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-600">
            {slide.subtitle}
          </p>
        </div>
        

        <div className="grid grid-cols-4 gap-6 mb-6">
          {slide.content?.metrics?.map((metric: any, index: number) => (
            <FeatureCard
              key={index}
              metric={metric.metric}
              title={metric.title}
              description={metric.description}
              bgColor={metric.bgColor}
              isMetricsCard={true}
              largePadding={true}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Layout1Slide9;