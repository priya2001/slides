import React from 'react';

interface FeatureCardProps { 
  title?: string;
  subtitle?: string;
  description: string;
  gradient?: string;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  className?: string;
  icon?: React.ReactNode;
  name?: string;
  role?: string;
  isTeamCard?: boolean;
  metric?: string;
  isStatCard?: boolean;
  isBusinessModelCard?: boolean;
  largePadding?: boolean;
  isMetricsCard?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  gradient, 
  bgColor = 'bg-white',
  textColor = 'text-gray-600',
  titleColor = 'text-black',
  subtitleColor = 'text-gray-500',
  className = '',
  icon,
  name,
  role,
  isTeamCard = false,
  metric,
  isStatCard = false,
  isBusinessModelCard = false,
  largePadding = false,
  isMetricsCard = false
}) => {
  // Extract base color from bgColor to create a matching border
  let borderColor = 'border-gray-100';
  if (bgColor.includes('green')) {
    borderColor = 'border-green-200';
  } else if (bgColor.includes('purple') || bgColor.includes('violet')) {
    borderColor = 'border-violet-200';
  } else if (bgColor.includes('yellow')) {
    borderColor = 'border-yellow-200';
  } else if (bgColor.includes('pink') || bgColor.includes('rose')) {
    borderColor = 'border-rose-200';
  } else if (bgColor.includes('blue')) {
    borderColor = 'border-blue-200';
  } else if (bgColor.includes('indigo')) {
    borderColor = 'border-indigo-200';
  } else if (bgColor.includes('red')) {
    borderColor = 'border-red-200';
  } else if (bgColor.includes('orange')) {
    borderColor = 'border-orange-200';
  } else if (bgColor.includes('gray')) {
    borderColor = 'border-gray-200';
  }
  
  const bgClass = gradient ? `bg-gradient-to-br ${gradient}` : bgColor;
  const paddingClass = largePadding ? 'p-8' : 'p-6';
  
  if (isMetricsCard) {
    return (
      <div className={`${bgClass} rounded-2xl ${paddingClass} border ${borderColor} flex flex-col items-center text-center ${className}`}>
        <div className="text-3xl font-bold text-gray-900 mb-2">{metric}</div>
        <div className="text-gray-800 font-medium mb-2">{title}</div>
        <p className={`${textColor} text-sm`}>{description}</p>
      </div>
    );
  }
  
  if (isBusinessModelCard) {
    return (
      <div className={`${bgClass} rounded-2xl ${paddingClass} border ${borderColor} ${className}`}>
        {title && <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>}
        {subtitle && <p className="text-blue-600 font-normal mb-3">{subtitle}</p>}
        <p className={`${textColor} text-sm leading-relaxed`}>{description}</p>
      </div>
    );
  }
  
  if (isStatCard) {
    return (
      <div className={`${bgClass} rounded-2xl p-6 flex flex-col items-center text-center h-full border ${borderColor} ${className}`}>
        <h3 className="font-bold text-3xl text-black mb-2">{metric}</h3>
        <p className="text-blue-600 font-medium mb-3">{subtitle}</p>
        <p className={`${textColor} text-sm`}>{description}</p>
      </div>
    );
  }
  
  if (isTeamCard) {
    return (
      <div className={`${bgClass} rounded-2xl p-6 flex flex-col items-center text-center h-full border ${borderColor} ${className}`}>
        <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-gray-300 mb-4 flex items-center justify-center">
          <span className="text-gray-500 text-3xl">👤</span>
        </div>
        <h3 className="font-bold text-lg text-black mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{role}</p>
        <p className={`${textColor} text-sm`}>{description}</p>
      </div>
    );
  }

  return (
    <div className={`${bgClass} rounded-2xl p-6 shadow-sm border ${borderColor} flex flex-col items-center text-center h-full ${className}`}>
      {icon && <div className="mb-4 flex items-center justify-center">{icon}</div>}
      {title && <h3 className={`font-bold text-lg ${titleColor} mb-2`}>{title}</h3>}
      {subtitle && <p className={`${subtitleColor} font-medium mb-2`}>{subtitle}</p>}
      <p className={`${textColor} text-sm`}>{description}</p>
    </div>
  );
};

export default FeatureCard;