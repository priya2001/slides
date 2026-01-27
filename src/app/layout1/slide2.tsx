'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import { Database, Activity, Zap, TrendingDown } from 'lucide-react';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide2 = () => {
  // Get data for slide 2
  const slide = slideData.slides.find(s => s.id === 2);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch(iconName.toLowerCase()) {
      case 'database':
        return <Database className="w-8 h-8 text-gray-400" />;
      case 'activity':
        return <Activity className="w-8 h-8 text-gray-400" />;
      case 'zap':
        return <Zap className="w-8 h-8 text-gray-400" />;
      case 'trendingdown':
        return <TrendingDown className="w-8 h-8 text-gray-400" />;
      default:
        return <Database className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    // no scrolling container
    <div className="w-[1280px] h-[720px] bg-gray-100 flex justify-center items-start overflow-hidden">
      
      {/* fixed slide canvas */}
      <section className="w-[1280px] h-[720px] bg-gray-50 relative overflow-hidden">
        
        <div className="absolute top-8 left-8 z-10">
          <LogoPlaceholder />
        </div>
        
        
        <div className="px-12 pt-24">
          <Heading 
            title={slide.title}
            size="xl"
            titleColor="text-black"
            className="mb-16 text-left"
          />

          <div className="grid grid-cols-4 gap-6">
            {slide.content?.cards?.map((card: any, index: number) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                icon={getIcon(card.icon)}
              />
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Layout1Slide2;