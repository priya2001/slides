import LogoPlaceholder from '../../components/LogoPlaceholder';
import ComparisonTable from '../../components/ComparisonTable';
import Heading from '../../components/Heading';

const Layout1Slide10 = () => {
  const features = [
    "AI Automation",
    "200+ Integrations", 
    "Real-time Analytics",
    "Custom Workflows",
    "Enterprise Security",
    "Mobile App"
  ];

  const competitors = [
    {
      name: "TechFlow Solutions",
      isPrimary: true,
      features: [true, true, true, true, true, true]
    },
    {
      name: "Zapier",
      features: [false, true, false, false, false, true]
    },
    {
      name: "Microsoft Power Automate",
      features: [false, true, true, true, true, false]
    },
    {
      name: "Workato",
      features: [false, true, true, true, true, true]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
    
        <Heading 
          title="Competitive Analysis"
          size="xl"
          titleColor="text-black"
          subtitle="TechFlow Solutions offers superior integration capabilities and AI-powered automation compared to existing solutions."
          subtitleColor="text-gray-600"
          className="mb-4"
        />
        
        
        <div className="bg-white rounded-2xl shadow-sm p-1">
          <ComparisonTable features={features} competitors={competitors} />
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide10;