import React from 'react';

interface IconCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    className?: string;
  }
  
  const IconCard: React.FC<IconCardProps> = ({ 
    icon, 
    title, 
    description, 
    className = '' 
  }) => {
    return (
      <div className={`bg-black rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-[#f5c96a]/20 ${className}`}>
        <div className="flex flex-col items-center text-center">
          {icon && <div className="mb-4">{icon}</div>}
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    );
  };
  
  export default IconCard;