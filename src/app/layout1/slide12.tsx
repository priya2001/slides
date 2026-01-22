import LogoPlaceholder from '../../components/LogoPlaceholder';

const Layout1Slide12 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
     
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
            Thank You
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Let's Transform Workflows Together
          </p>
        </div>
        
        
        <div className="absolute bottom-8 left-8">
          <h2 className="text-lg font-bold text-black mb-3">Get in Touch</h2>
          <div className="space-y-1 text-gray-700">
            <p>david.johnson@techflowsolutions.com</p>
            <p>+1 (555) 987-6543</p>
            <p>www.techflowsolutions.com</p>
          </div>
        </div>
        
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
          Series A Pitch - December 2024
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide12;