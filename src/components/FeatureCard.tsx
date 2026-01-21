import React from 'react';

const FeatureCard: React.FC<{ 
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  className?: string;
}> = ({ title, subtitle, description, gradient, className = '' }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-blue-300 font-medium mb-4">{subtitle}</p>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;