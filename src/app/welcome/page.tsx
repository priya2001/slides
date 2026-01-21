'use client';

import React from 'react';
import Heading from '../../components/Heading';
import Slide1Wrapper from '../../components/Slide1Wrapper';
import HighlightLine from '../../components/HighlightLine';
import LogoPlaceholder from '../../components/LogoPlaceholder';

const Slide1 = () => {
  return (
    <Slide1Wrapper>
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
    </Slide1Wrapper>
  );
};

export default Slide1;