'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide5 = () => {
  // Get data for slide 5
  const slide = slideData.slides.find(s => s.id === 5);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full h-full px-16 pt-24 z-10">
        
        <Heading 
          title={slide.title}
          subtitle={slide.subtitle}
          size="xl"
          titleColor="text-black"
          subtitleColor="text-gray-600"
          className="mb-12 text-left"
        />
        

        <div className="grid grid-cols-4 gap-6">
          {slide.content?.statCards?.map((card: any, index: number) => (
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