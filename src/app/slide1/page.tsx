'use client';

import React from 'react';
import Heading from '../../components/Heading';

const SlideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      {children}
    </section>
  );
};

const HighlightLine: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-8">
      <div className="inline-block relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-sm"></div>
        <p className="relative text-blue-400 font-medium italic">
          {text}
        </p>
      </div>
    </div>
  );
};


const LogoPlaceholder: React.FC = () => {
  return (
    <div className="absolute top-8 left-8">
      <span className="text-blue-400 italic text-sm">Add your logo here</span>
    </div>
  );
};


const Slide1 = () => {
  return (
    <SlideWrapper>
      <LogoPlaceholder />
      
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <Heading 
          title="MealMate: Home-Style Meals for Working Professionals"
          subtitle="Connecting young professionals with local home chefs and small kitchens for healthier, reliable, and subscription-based meals—bringing routine and comfort to those living away from family."
          size="xl"
        />
        
        <HighlightLine 
          text="A better alternative to daily food delivery apps, focused on predictability and wellness."
        />
      </div>
    </SlideWrapper>
  );
};

export default Slide1;