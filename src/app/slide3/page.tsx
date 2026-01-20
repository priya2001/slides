'use client';

import React from 'react';
import Heading from '../../components/Heading';

interface SolutionSlideData {
  heading: string;
  description: string;
  features: Array<{
    title: string;
    subtitle: string;
    description: string;
    gradient: string;
  }>;
}


const SolutionSlide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};


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


const SolutionSlideComponent: React.FC<{ data: SolutionSlideData }> = ({ data }) => {
  return (
    <SolutionSlide>
      <div className="mb-16">
        <Heading 
          title={data.heading}
          subtitle={data.description}
          size="xl"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </SolutionSlide>
  );
};


const solutionSlideData: SolutionSlideData = {
  heading: "Solution",
  description: "MealMate transforms urban dining by connecting professionals with local home chefs through subscription-based, hyperlocal meal delivery that prioritizes quality, consistency, and community.",
  features: [
    {
      title: "Flexible Meal Subscriptions",
      subtitle: "Weekly & Monthly Plans",
      description: "Choose from various subscription tiers that fit your schedule and dietary needs, with options to pause or modify anytime.",
      gradient: "from-emerald-500/20 to-teal-600/20"
    },
    {
      title: "Home-Style Quality & Personalization",
      subtitle: "2–3 Dishes, Custom Options",
      description: "Enjoy authentic home-cooked meals with personalized portions and dietary accommodations from vetted local chefs.",
      gradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
      title: "Hyperlocal, Reliable Delivery",
      subtitle: "Batched, Warm, Fast",
      description: "Experience fast, temperature-controlled delivery from nearby kitchens, ensuring meals arrive fresh and satisfying.",
      gradient: "from-amber-500/20 to-orange-600/20"
    },
    {
      title: "Transparency & Accountability",
      subtitle: "Chef Ratings & Hygiene",
      description: "Every chef is verified and rated, with complete transparency about ingredients, preparation methods, and kitchen standards.",
      gradient: "from-purple-500/20 to-pink-600/20"
    }
  ]
};

const SolutionSlidePage = () => {
  return <SolutionSlideComponent data={solutionSlideData} />;
};

export default SolutionSlidePage;