import React from 'react';
import IconCard from './IconCard';


interface Feature {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  className?: string;
  variant?: 'compact' | 'value';
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className = '', variant = 'compact' }) => {
  if (variant === 'value') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
        {features.map((feature, index) => (
          <div key={index} className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 `}>
            <div className="flex flex-col h-full">
              <div className="text-4xl mb-6 text-white/90 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Compact variant (original)
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className={`bg-gradient-to-br ${feature.gradient} rounded-md p-2 shadow-md backdrop-blur-sm border border-white/10`}>
          <IconCard
            icon={<div className="text-lg mb-1">{feature.icon}</div>}
            title={feature.title}
            description={feature.description}
            className="bg-transparent border-0 shadow-none p-0 text-xs"
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;