'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import BulletPoint from '../../components/BulletPoint';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide3 = () => {
  // Get data for slide 3
  const slide = slideData.slides.find(s => s.id === 3);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

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
                title={slide.title}
                size="xl"
                titleColor="text-black"
                className="mb-10 text-left"
              />

              <div className="space-y-2">
                {slide.content?.bulletPoints?.map((point: any, index: number) => (
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
                src={slide.content?.image?.src}
                alt={slide.content?.image?.alt}
                className={slide.content?.image?.className}
              />
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Layout1Slide3;