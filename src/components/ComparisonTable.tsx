import React from 'react';

interface ComparisonTableProps {
  features: string[];
  competitors: {
    name: string;
    isPrimary?: boolean;
    features: boolean[];
  }[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ features, competitors }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">
              Features
            </th>
            {competitors.map((competitor, index) => (
              <th 
                key={index}
                className={`py-3 px-4 font-semibold text-gray-900 border-b border-gray-200 text-center ${
                  competitor.isPrimary 
                    ? 'bg-gradient-to-b from-indigo-500 to-indigo-600 text-white rounded-t-lg' 
                    : ''
                }`}
              >
                {competitor.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <tr key={featureIndex} className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-900 font-medium">
                {feature}
              </td>
              {competitors.map((competitor, competitorIndex) => (
                <td 
                  key={competitorIndex}
                  className={`py-3 px-4 text-center ${
                    competitor.isPrimary ? 'bg-indigo-50' : ''
                  }`}
                >
                  {competitor.features[featureIndex] ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;