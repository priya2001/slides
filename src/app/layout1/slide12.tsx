'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide12 = () => {
  // Get data for slide 12
  const slide = slideData.slides.find(s => s.id === 12);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-4xl mx-auto px-8 z-10 text-center">
        
        <Heading 
          title={slide.title}
          subtitle={slide.subtitle}
          size="xl"
          titleColor="text-black"
          subtitleColor="text-gray-600"
          className="mb-12"
        />
        
        
        <div className="text-left mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {slide.content?.contact?.title}
          </h3>
          <div className="space-y-2">
            {slide.content?.contact?.items?.map((item: string, index: number) => (
              <p key={index} className="text-lg text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
        
        
        <div className="text-center">
          <p className="text-sm text-gray-500">
            {slide.content?.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide12;