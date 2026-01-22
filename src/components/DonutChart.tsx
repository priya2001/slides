import React from 'react';

interface DonutChartProps {
  segments: {
    label: string;
    percentage: number;
    color: string;
  }[];
  centerText: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ segments, centerText }) => {
  const size = 200;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const centerX = size / 2;
  const centerY = size / 2;

  let cumulativePercentage = 0;

  return (
    <div className="relative flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {segments.map((segment, index) => {
          const segmentLength = (segment.percentage / 100) * circumference;
          const offset = circumference - (cumulativePercentage / 100) * circumference;

          const result = (
            <circle
              key={index}
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-in-out"
            />
          );

          cumulativePercentage += segment.percentage;
          return result;
        })}
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold">{centerText}</span>
      </div>
    </div>
  );
};

export default DonutChart;