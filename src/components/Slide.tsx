import React from 'react';
import Heading from './Heading';
import IconCard from './IconCard';

interface SlideProps {
  headingTitle: string;
  headingSubtitle?: string;
  headingSize?: 'sm' | 'md' | 'lg' | 'xl';
  cards: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ 
  headingTitle, 
  headingSubtitle, 
  headingSize = 'md',
  cards = [],
  className = ''
}) => {
  return (
    <div className={`container mx-auto px-4 py-12 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-[500px] w-full bg-black [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        <div className="absolute inset-y-0 right-0 -z-10 w-1/3 bg-gradient-to-l from-[#f5c96a]/20 to-transparent"></div>
        <Heading 
          title={headingTitle} 
          subtitle={headingSubtitle} 
          size={headingSize}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            <div className="
                      pointer-events-none absolute inset-0 rounded-3xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-[radial-gradient(circle_at_center,rgba(245,201,106,0.25),transparent_70%)]
                    "></div>
            <IconCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;