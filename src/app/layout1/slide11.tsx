import LogoPlaceholder from '../../components/LogoPlaceholder';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import BulletPoint from '../../components/BulletPoint';

const Layout1Slide11 = () => {
  const data = [
    { name: "Product Development", value: 40, color: "text-blue-500" },
    { name: "Sales & Marketing", value: 35, color: "text-green-500" },
    { name: "Operations", value: 15, color: "text-yellow-500" },
    { name: "Working Capital", value: 10, color: "text-red-500" },
  ];

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, name } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25; // Position outside the donut
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = x >= cx ? 'start' : 'end';

    return (
      <text
        x={x}
        y={y}
        fill={data[index].color.replace('text-', '').replace('-500', '')}
        textAnchor={textAnchor}
        dominantBaseline="middle"
        fontSize={14}
        fontWeight={500}
      >
        {/* {`${name} ${(percent * 100).toFixed(0)}%`} */}
      </text>
    );
  };

  return (
    <section className="w-[1280px] h-[720px] flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute top-8 left-8 z-10">
        <LogoPlaceholder />
      </div>
      
      
      <div className="w-full max-w-6xl mx-auto px-8 z-10">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            The Ask: $8M Series A
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're raising $8M to accelerate product development, expand our sales team, and capture market share in the growing workflow automation space.
          </p>
        </div>
        
        
        <div className="flex items-center justify-center gap-12">
          {/* Donut Chart - Increased Size */}
          <div className="relative w-96 h-96">
            <ResponsiveContainer width={384} height={384}>
              <PieChart margin={{ top: 30, right: 80, bottom: 30, left: 80 }}>
                <Pie
                  data={[
                    { name: "Product Development", value: 40, color: "#3B82F6" },
                    { name: "Sales & Marketing", value: 35, color: "#10B981" },
                    { name: "Operations", value: 15, color: "#F59E0B" },
                    { name: "Working Capital", value: 10, color: "#EF4444" },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  // label={renderCustomizedLabel}
                >
                  <Cell fill="#3B82F6" />
                  <Cell fill="#10B981" />
                  <Cell fill="#F59E0B" />
                  <Cell fill="#EF4444" />
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
              {data.map((item, index) => (
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