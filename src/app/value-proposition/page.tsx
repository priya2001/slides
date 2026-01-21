'use client';

import React from 'react';
import Heading from '../../components/Heading';
import FeatureGrid from '../../components/FeatureGrid';
import { Calendar, Users, Star, Shield } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

// Unique Value Proposition Section
const UniqueValueSection: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Calendar />,
      title: "Effortless Meal Planning",
      description: "Removes daily food decisions by offering pre-planned meals—users do not need to open the app daily. Meals are sorted in advance, providing routine and predictability for busy professionals.",
      gradient: "from-emerald-900/30 to-emerald-800/20"
    },
    {
      icon: <Users />,
      title: "Chef Partnership Model",
      description: "Chefs are treated as long-term partners, not vendors, cooking limited meals for a predictable number of subscribers. This fosters accountability and consistency.",
      gradient: "from-blue-900/30 to-blue-800/20"
    },
    {
      icon: <Star />,
      title: "Quality & Consistency",
      description: "Focuses on less waste, better quality, and more consistency compared to typical food delivery or tiffin services. Experience is built around trust—same chef, same taste, same timing.",
      gradient: "from-amber-900/30 to-amber-800/20"
    },
    {
      icon: <Shield />,
      title: "Stability Over Chaos",
      description: "Occupies the middle ground between messy tiffins and chaotic food delivery, prioritizing stability over variety or discounts.",
      gradient: "from-purple-900/30 to-purple-800/20"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-16 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <Heading 
            title="Unique Value Proposition"
            size="xl"
          />
        </div>
        
        <FeatureGrid features={values} variant="value" />
      </div>
    </section>
  );
};

export default UniqueValueSection;