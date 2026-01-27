'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide1 = () => {
  // Get data for slide 1
  const slide = slideData.slides.find(s => s.id === 1);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="text-center px-8 max-w-4xl z-10">
        <Heading 
          title={slide.title}
          subtitle={slide.subtitle}
          size="xl"
          titleColor="text-black"
          subtitleColor="text-gray-600"
        />
        <p className="text-base md:text-lg text-blue-600">
          {slide.content?.description}
        </p>
      </div>
    </section>
  );
};

export default Layout1Slide1;