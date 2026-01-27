import LogoPlaceholder from '../../components/LogoPlaceholder';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import BulletPoint from '../../components/BulletPoint';

// Import slide data
import slideData from '../../../file.json';

const Layout1Slide11 = () => {
  // Get data for slide 11
  const slide = slideData.slides.find(s => s.id === 11);
  
  if (!slide) {
    return <div>Slide data not found</div>;
  }

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {slide.subtitle}
          </p>
        </div>
        
        
        <div className="flex items-center justify-center gap-12">
          {/* Donut Chart - Increased Size */}
          <div className="relative w-96 h-96">
            <ResponsiveContainer width={384} height={384}>
              <PieChart margin={{ top: 30, right: 80, bottom: 30, left: 80 }}>
                <Pie
                  data={slide.content?.allocation?.map((item: any) => ({
                    name: item.name,
                    value: item.value,
                    color: item.color.replace('text-', '').replace('-500', '')
                  })) || []}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  label={false}  // <-- labels removed here
                >
                  {slide.content?.allocation?.map((item: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={item.color.replace('text-', '').replace('-500', '')} />
                  ))}
                </Pie>
                
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xl font-semibold"
                  fontSize={18}
                  fontWeight={600}
                >
                  $8M Series A
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Bullet Points with Matching Colors */}
          <div className="w-80">
            <div className="space-y-4">
              {slide.content?.allocation?.map((item: any, index: number) => (
                <BulletPoint 
                  key={index}
                  title={`${item.name}: ${item.value}%`}
                  description=""
                  dotColor={item.color.replace('text-', '').replace('-500', '')}
                  textColor={item.color}
                  bgColor="text-gray-600"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout1Slide11;