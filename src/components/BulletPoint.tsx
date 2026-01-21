import React from 'react';

const BulletPoint: React.FC<{ 
  title: string; 
  description: string;
  className?: string;
}> = ({ title, description, className = '' }) => {
  return (
    <div className={`flex items-start space-x-4 mb-6 ${className}`}>
      <div className="flex-shrink-0 mt-1">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default BulletPoint;