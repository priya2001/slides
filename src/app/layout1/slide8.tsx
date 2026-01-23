'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import Heading from '../../components/Heading';

const Layout1Slide8 = () => {
  const businessModels = [
    {
      title: "SaaS Subscriptions",
      subtitle: "Recurring Revenue",
      description: "$50–500/month per user with 95% gross margins. Tiered pricing based on features and usage.",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "Enterprise Licenses",
      subtitle: "High-Value Contracts",
      description: "$50K–500K annual contracts for large organizations with custom implementations.",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    },
    {
      title: "Professional Services",
      subtitle: "Implementation Support",
      description: "Custom integrations, training, and consulting services with 70% gross margins.",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "Marketplace Revenue",
      subtitle: "Partner Ecosystem",
      description: "30% revenue share from third-party integrations and add-ons sold through our platform.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">

      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>

      <div className="w-full h-full px-16 pt-24 z-10">

        <Heading 
          title="Scalable Business Model"
          size="xl"
          titleColor="text-black"
          subtitle="Multiple revenue streams with high recurring revenue and expanding customer value."
          subtitleColor="text-gray-500"
          className="mb-12 text-left"
        />

        <div className="grid grid-cols-4 gap-6">
          {businessModels.map((model, index) => (
            <FeatureCard
              key={index}
              title={model.title}
              subtitle={model.subtitle}
              description={model.description}
              bgColor={model.bgColor}
              isBusinessModelCard={true}
              largePadding={true}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Layout1Slide8;
