'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import Heading from '../../components/Heading';

const Layout1Slide1 = () => {
  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="text-center px-8 max-w-4xl z-10">
        <Heading 
          title="TechFlow Solutions"
          subtitle="Innovative software solutions for modern businesses"
          size="xl"
          titleColor="text-black"
          subtitleColor="text-gray-600"
        />
        <p className="text-base md:text-lg text-blue-600">
          Transforming digital workflows with cutting-edge technology
        </p>
      </div>
    </section>
  );
};

export default Layout1Slide1;