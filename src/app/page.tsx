'use client';

import Link from 'next/link';

const HomePage = () => {
  const layouts = [
    {
      id: 1,
      title: "Layout 1",
      description: "Summit Layout",
      route: "/layout1",
      gradient: "from-red-600 to-black-800",
    },
    {
      id: 2,
      title: "MealMate",
      description: "Meals for Working Professionals",
      route: "/presentation",
      gradient: "from-blue-600 to-black-800",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {layouts.map((layout) => (
            <Link 
              key={layout.id}
              href={layout.route}
              className={`group relative overflow-hidden rounded-xl p-6 hover:shadow-2xl cursor-pointer bg-gradient-to-br ${layout.gradient} w-full max-w-sm`}
            >
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {layout.title}
                </h2>
                <p className="text-gray-100 text-sm leading-relaxed mb-4">
                  {layout.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;