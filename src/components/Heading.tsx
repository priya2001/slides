import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle, 
  size = 'md',
  className = '',
  titleColor = 'text-white',
  subtitleColor = 'text-gray-300'
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  const titleSizeClass = sizeClasses[size];

  return (
    <div className={`mb-6 ${className}`}>
      <h1 className={`${titleSizeClass} font-bold ${titleColor} mb-2`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;