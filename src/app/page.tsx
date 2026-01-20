'use client';


import Link from 'next/link';

const HomePage = () => {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "MealMate Introduction - Professional pitch deck style introduction to the service",
      route: "/slide1",
      gradient: "from-blue-600 to-blue-800",
      icon: ""
    },
    {
      id: 2,
      title: "Slide 2", 
      description: "Problem Statement - 60/40 layout showing key pain points for urban professionals",
      route: "/slide2",
      gradient: "from-red-600 to-red-800",
      icon: ""
    },
    {
      id: 3,
      title: "Slide 3",
      description: "Solution Presentation - 2x2 grid showcasing MealMate's four solution pillars",
      route: "/slide3",
      gradient: "from-green-600 to-green-800",
      icon: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            MealMate Presentation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Click on any slide below to view the full presentation content
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slides.map((slide) => (
            <Link 
              key={slide.id}
              href={slide.route}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-gradient-to-br ${slide.gradient}`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 text-center">{slide.icon}</div>
                
                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  {slide.title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-100 text-center leading-relaxed mb-6">
                  {slide.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="flex justify-center">
                  <svg 
                    className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-lg">
            Built with Next.js, React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return <HomePage />;
}