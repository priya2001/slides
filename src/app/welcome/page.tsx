'use client';

import Heading from '../../components/Heading';
import HighlightLine from '../../components/HighlightLine';
import LogoPlaceholder from '../../components/LogoPlaceholder';

const Slide1 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
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
    </section>
  );
};

export default Slide1;