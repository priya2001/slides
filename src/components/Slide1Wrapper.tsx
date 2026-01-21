import React from 'react';

const Slide1Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
      {children}
    </section>
  );
};

export default Slide1Wrapper;