'use client';

import React from 'react';
import Heading from '../../components/Heading';
import BulletPoint from '../../components/BulletPoint';
import ImageCard from '../../components/ImageCard';

const Slide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between">
      {children}
    </section>
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