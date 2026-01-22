import React from 'react';

interface BulletPointProps { 
  title: string; 
  description: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
  dotColor?: string;
  titleSize?: string;
  descSize?: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ 
  title, 
  description, 
  className = '',
  textColor = 'text-white',
  bgColor = 'text-gray-400',
  dotColor = 'bg-blue-500',
  titleSize = 'text-lg md:text-xl',
  descSize = 'text-sm md:text-base'
}) => {
  return (
    <div className={`flex items-start space-x-4 mb-6 ${className}`}>
      <div className="flex-shrink-0 mt-1">
        <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
      </div>
      <div>
        <h3 className={`${titleSize} font-semibold ${textColor} mb-1`}>{title}</h3>
        <p className={`${bgColor} ${descSize}`}>{description}</p>
      </div>
    </div>
  );
};

export default BulletPoint;