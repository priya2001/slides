'use client';

import WelcomeSlide from '../welcome/page';
import ProblemSlide from '../problem-statement/page';
import SolutionSlide from '../solution-approach/page';
import ProductFeaturesSlide from '../product-features/page';
import ValuePropositionSlide from '../value-proposition/page';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-white">
     
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <WelcomeSlide />
      </div>
      
      
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <ProblemSlide />
      </div>
      
    
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <SolutionSlide />
      </div>
      
      
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <ProductFeaturesSlide />
      </div>
      
      
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <ValuePropositionSlide />
      </div>
    </div>
  );
};

export default function Home() {
  return <HomePage />;
};