'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Heading from '../../components/Heading';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide6 = () => {
  // Get data for slide 6
  const slide = slideData.slides.find(s => s.id === 6);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  const chartData = slide.content?.chartData || [];

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
     
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full h-full px-16 pt-24 z-10">
        
        <Heading
          title={slide.title}
          size="xl"
          titleColor="text-black"
          className="mb-12 text-left"
        />

        {/* fixed layout */}
        <div className="flex gap-10">

          {/* Left: Metrics */}
          <div className="w-[520px]">
            <div className="flex justify-between mb-8">
              {slide.content?.marketMetrics?.map((metric: any, index: number) => (
                <div key={index} className="text-center">
                  <span className="text-sm font-medium text-gray-500">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {slide.content?.marketMetrics?.map((metric: any, index: number) => (
                <div
                  key={index}
                  className={`${metric.bgColor} rounded-xl p-6 flex flex-col items-center justify-center text-white h-40`}
                >
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <div className="text-xs text-center">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chart */}
          <div className="w-[640px]">
            <div className="bg-white p-6 rounded-2xl shadow-sm" style={{ height: '400px' }}>
              <BarChart
                width={600}
                height={360}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}B`} />
                <Tooltip
                  formatter={(value) => [`$${value}B`, 'Market Size']}
                  labelFormatter={(label) => `Year: ${label}`}
                  contentStyle={{ borderRadius: '0.5rem' }}
                />
                <Legend />
                <Bar dataKey="marketSize" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Market Size ($B)" />
              </BarChart>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Layout1Slide6;