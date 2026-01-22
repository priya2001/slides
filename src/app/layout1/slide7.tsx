'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import Heading from '../../components/Heading';

const Layout1Slide7 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
      
        <Heading 
          title="Product Demo"
          size="xl"
          titleColor="text-black"
          className="text-center mb-12"
        />
        
        
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Analytics dashboard with charts and metrics"
            className="rounded-2xl w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide7;