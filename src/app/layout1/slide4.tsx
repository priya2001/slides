'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide4 = () => {
  // Get data for slide 4
  const slide = slideData.slides.find(s => s.id === 4);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

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
            title={slide.title}
            size="xl"
            titleColor="text-black"
            className="mb-16 text-left"
          />

          {/* Team cards */}
          <div className="grid grid-cols-4 gap-6">
            {slide.content?.members?.map((member: any, index: number) => (
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