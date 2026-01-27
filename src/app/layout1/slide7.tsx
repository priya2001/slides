'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide7 = () => {
  // Get data for slide 7
  const slide = slideData.slides.find(s => s.id === 7);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <Heading 
          title={slide.title}
          size="xl"
          titleColor="text-black"
          className="text-center mb-12"
        />
        
        
        <div className="flex justify-center">
          <img 
            src={slide.content?.image?.src}
            alt={slide.content?.image?.alt}
            className={slide.content?.image?.className}
          />
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide7;