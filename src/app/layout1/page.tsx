'use client';

// Import all 12 slides for Layout 1
import Layout1Slide1 from './slide1';
import Layout1Slide2 from './slide2';
import Layout1Slide3 from './slide3';
import Layout1Slide4 from './slide4';
import Layout1Slide5 from './slide5';
import Layout1Slide6 from './slide6';
import Layout1Slide7 from './slide7';
import Layout1Slide8 from './slide8';
import Layout1Slide9 from './slide9';
import Layout1Slide10 from './slide10';
import Layout1Slide11 from './slide11';
import Layout1Slide12 from './slide12';
import SlideWrapper from '../../components/SlideWrapper';

const Layout1Page = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 pt-8">
      <SlideWrapper exportMode={false} allowDynamicHeight={true}>
        {/* Layout 1 - Presentation Slides */}
        
        {/* Slide 1 - Intro */}
        <div className="mb-8">
          <Layout1Slide1 />
        </div>
        
        {/* Slide 2 - Problem */}
        <div className="mb-8">
          <Layout1Slide2 />
        </div>
        
        {/* Slide 3 - Solution */}
        <div className="mb-8">
          <Layout1Slide3 />
        </div>
        
        {/* Slide 4 - Team */}
        <div className="mb-8">
          <Layout1Slide4 />
        </div>
        
        {/* Slide 5 - Market Opportunity */}
        <div className="mb-8">
          <Layout1Slide5 />
        </div>
        
        {/* Slide 6 - Market Sizing */}
        <div className="mb-8">
          <Layout1Slide6 />
        </div>
        
        {/* Slide 7 - Product Demo */}
        <div className="mb-8">
          <Layout1Slide7 />
        </div>
        
        {/* Slide 8 - Business Model */}
        <div className="mb-8">
          <Layout1Slide8 />
        </div>
        
        {/* Slide 9 - Traction & Growth */}
        <div className="mb-8">
          <Layout1Slide9 />
        </div>
        
        {/* Slide 10 - Competitive Analysis */}
        <div className="mb-8">
          <Layout1Slide10 />
        </div>
        
        {/* Slide 11 - Fundraising */}
        <div className="mb-8">
          <Layout1Slide11 />
        </div>
        
        {/* Slide 12 - Thank You */}
        <div className="mb-8 pb-8">
          <Layout1Slide12 />
        </div>
      </SlideWrapper>
    </div>
  );
};

export default Layout1Page;