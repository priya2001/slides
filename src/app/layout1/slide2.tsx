'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import FeatureCard from '../../components/FeatureCard';
import { Database, Activity, Zap, TrendingDown } from 'lucide-react';
import Heading from '../../components/Heading';

const Layout1Slide2 = () => {
  const problemCards = [
    {
      title: "Fragmented Systems",
      description: "85% of businesses use 10+ disconnected tools, leading to data silos and inefficiency.",
      bgColor: "bg-green-50",
      icon: <Database className="w-8 h-8 text-gray-400" />
    },
    {
      title: "Manual Processes",
      description: "Employees spend 40% of their time on repetitive tasks that could be automated.",
      bgColor: "bg-purple-50",
      icon: <Activity className="w-8 h-8 text-gray-400" />
    },
    {
      title: "Poor Integration",
      description: "60% of businesses struggle with data sync issues between different platforms.",
      bgColor: "bg-yellow-50",
      icon: <Zap className="w-8 h-8 text-gray-400" />
    },
    {
      title: "Productivity Loss",
      description: "Companies lose $37B annually due to poor workflow management and inefficient processes.",
      bgColor: "bg-pink-50",
      icon: <TrendingDown className="w-8 h-8 text-gray-400" />
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <Heading 
          title="The Problem: Digital Workflow Inefficiencies"
          size="xl"
          titleColor="text-black"
          className="mb-16 text-left"
        />
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide2;