import LogoPlaceholder from '../../components/LogoPlaceholder';
import ComparisonTable from '../../components/ComparisonTable';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide10 = () => {
  // Get data for slide 10
  const slide = slideData.slides.find(s => s.id === 10);
  
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
          subtitle={slide.subtitle}
          subtitleColor="text-gray-600"
          className="mb-4"
        />
        
        
        <div className="bg-white rounded-2xl shadow-sm p-1">
          <ComparisonTable features={slide.content?.features || []} competitors={slide.content?.competitors || []} />
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide10;