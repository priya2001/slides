'use client';

import React from 'react';
import Heading from '../../components/Heading';

const Slide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between">
      {children}
    </section>
  );
};


const BulletPoint: React.FC<{ 
  title: string; 
  description: string;
  className?: string;
}> = ({ title, description, className = '' }) => {
  return (
    <div className={`flex items-start space-x-4 mb-6 ${className}`}>
      <div className="flex-shrink-0 mt-1">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};


const ImageCard: React.FC<{ 
  imageUrl: string;
  alt: string;
  className?: string;
}> = ({ imageUrl, alt, className = '' }) => {
  return (
    <div className={`w-full lg:w-2/5 max-w-lg ${className}`}>
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>
    </div>
  );
};


interface ProblemSlideData {
  heading: string;
  subtitle: string;
  subheading: string;
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  image: {
    url: string;
    alt: string;
  };
}


const ProblemSlide: React.FC<{ data: ProblemSlideData }> = ({ data }) => {
  return (
    <Slide>
     
      <div className="w-full lg:w-3/5 lg:pr-16 mb-12 lg:mb-0">
        <Heading 
          title={data.heading}
          subtitle={data.subtitle}
          size="xl"
        />
        
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8">
          {data.subheading}
        </h2>
        
        <div className="space-y-2">
          {data.painPoints.map((point, index) => (
            <BulletPoint
              key={index}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
      
      
      <ImageCard
        imageUrl={data.image.url}
        alt={data.image.alt}
      />
    </Slide>
  );
};


const problemSlideData: ProblemSlideData = {
  heading: "Problem",
  subtitle: "Urban professionals struggle with inconsistent meal quality and lack of healthy options in their busy lifestyles.",
  subheading: "Key Pain Points for Urban Professionals:",
  painPoints: [
    {
      title: "Unhealthy Food Options",
      description: "Limited access to nutritious meals during work hours"
    },
    {
      title: "Time Constraints",
      description: "Too busy to cook or research healthy meal options"
    },
    {
      title: "Quality Inconsistency",
      description: "Food delivery apps offer unpredictable meal quality"
    },
    {
      title: "Budget Concerns",
      description: "Healthy eating often feels expensive and inaccessible"
    },
    {
      title: "Social Isolation",
      description: "Missing home-cooked meals and family dining experiences"
    }
  ],
  image: {
    url: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    alt: "Professional working late with unhealthy food options"
  }
};

const ProblemSlidePage = () => {
  return <ProblemSlide data={problemSlideData} />;
};

export default ProblemSlidePage;