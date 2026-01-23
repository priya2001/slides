'use client';

import LogoPlaceholder from '../../components/LogoPlaceholder';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from '../../components/Heading';

const Layout1Slide6 = () => {
  const marketMetrics = [
    {
      label: "TAM",
      value: "$68B",
      description: "Total global workflow automation market by 2028",
      bgColor: "bg-blue-500"
    },
    {
      label: "SAM", 
      value: "$24B",
      description: "Serviceable market in North America and Europe",
      bgColor: "bg-blue-600"
    },
    {
      label: "SOM",
      value: "$1.2B",
      description: "Serviceable obtainable market (5% market share)",
      bgColor: "bg-blue-700"
    }
  ];

  const chartData = [
    { year: '2022', marketSize: 28 },
    { year: '2023', marketSize: 35 },
    { year: '2024', marketSize: 43 },
    { year: '2025', marketSize: 53 },
    { year: '2026', marketSize: 61 },
    { year: '2027', marketSize: 65 },
    { year: '2028', marketSize: 68 },
  ];

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
     
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
    
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
     
        <Heading 
          title="Market Sizing: $68B Opportunity"
          size="xl"
          titleColor="text-black"
          className="mb-12 text-left"
        />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2">
            
            <div className="flex justify-between mb-8">
              {marketMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <span className="text-sm font-medium text-gray-500">{metric.label}</span>
                </div>
              ))}
            </div>
            
           
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {marketMetrics.map((metric, index) => (
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
          
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-sm" style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#6b7280"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `$${value}B`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}B`, 'Market Size']}
                    labelFormatter={(label) => `Year: ${label}`}
                    contentStyle={{ borderRadius: '0.5rem' }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="marketSize" 
                    fill="#8b5cf6" 
                    radius={[4, 4, 0, 0]} 
                    name="Market Size ($B)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide6;