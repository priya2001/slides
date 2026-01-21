'use client';

import React from 'react';
import Heading from '../../components/Heading';
import FeatureGrid from '../../components/FeatureGrid';
import { User, ChefHat, ClipboardList, Truck, MessageCircle, ShieldCheck, BarChart3, Settings } from 'lucide-react';

// Product Overview Section
const ProductOverviewSection: React.FC = () => {
  const features = [
    {
      title: "Seamless Onboarding",
      description: "Mobile app guides users to input location, meal preference, lunch/dinner, and budget for a quick, tailored setup.",
      gradient: "from-emerald-500/20 to-teal-600/20",
      icon: <User size={32} />
    },
    {
      title: "Curated Chef Selection",
      description: "Users see only a relevant, curated list of nearby chefs and kitchens, not an overwhelming number of options.",
      gradient: "from-blue-500/20 to-indigo-600/20",
      icon: <ChefHat size={32} />
    },
    {
      title: "Transparent Menus & Flexible Plans",
      description: "Weekly menus and meal timings are visible before subscribing. Choose weekly or monthly subscriptions with options to pause, skip, or change plans anytime.",
      gradient: "from-amber-500/20 to-orange-600/20",
      icon: <ClipboardList size={32} />
    },
    {
      title: "Effortless Meal Delivery",
      description: "No daily ordering required—meals are delivered by default unless paused or skipped. Batched deliveries use consistent partners within small radii.",
      gradient: "from-purple-500/20 to-pink-600/20",
      icon: <Truck size={32} />
    },
    {
      title: "Instant Feedback Loop",
      description: "Quick 1–2 tap feedback after meals enables continuous improvement for chefs and the platform.",
      gradient: "from-cyan-500/20 to-blue-600/20",
      icon: <MessageCircle size={32} />
    },
    {
      title: "Chef Quality Assurance",
      description: "Chefs undergo hygiene checks and tastings before onboarding, ensuring high standards for every meal.",
      gradient: "from-green-500/20 to-emerald-600/20",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Chef Tools & Demand Visibility",
      description: "Chefs receive fixed subscriber counts, advance demand visibility, and a simple dashboard for menu uploads and feedback.",
      gradient: "from-yellow-500/20 to-amber-600/20",
      icon: <BarChart3 size={32} />
    },
    {
      title: "Simple, Predictable Tech",
      description: "Intentionally simple technology prioritizes predictability and ease of use for both users and chefs.",
      gradient: "from-violet-500/20 to-purple-600/20",
      icon: <Settings size={32} />
    }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Heading 
            title="Product Overview"
            size="xl"
          />
        </div>
        
        <FeatureGrid features={features} />
      </div>
    </section>
  );
};

export default ProductOverviewSection;