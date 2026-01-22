import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';

const Layout1Slide9 = () => {
  const metrics = [
    {
      metric: "$4.2M",
      title: "Annual Recurring Revenue",
      description: "285% YoY growth",
      bgColor: "bg-violet-50"
    },
    {
      metric: "850+",
      title: "Active Customers",
      description: "20% month-over-month growth",
      bgColor: "bg-emerald-50"
    },
    {
      metric: "94%",
      title: "Customer Retention",
      description: "industry-leading retention",
      bgColor: "bg-rose-50"
    },
    {
      metric: "$180K",
      title: "Average Contract Value",
      description: "growing 15% annually",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Strong Traction & Growth
          </h1>
          <p className="text-lg text-gray-600">
            Consistent growth metrics with strong unit economics and customer satisfaction.
          </p>
        </div>
        
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {metrics.slice(0, 3).map((metric, index) => (
            <FeatureCard
              key={index}
              metric={metric.metric}
              title={metric.title}
              description={metric.description}
              bgColor={metric.bgColor}
              isMetricsCard={true}
              largePadding={true}
            />
          ))}
        </div>
        
        
        <div className="flex justify-center">
          <div className="md:w-1/3">
            <FeatureCard
              metric={metrics[3].metric}
              title={metrics[3].title}
              description={metrics[3].description}
              bgColor={metrics[3].bgColor}
              isMetricsCard={true}
              largePadding={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide9;