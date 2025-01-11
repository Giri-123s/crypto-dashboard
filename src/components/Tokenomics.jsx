// Tokenomics.js
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import './Tokenomics.css';

const data = [
  { name: 'Crowdsale investors', value: 80, color: '#4285F4' },
  { name: 'Foundation', value: 20, color: '#FBBC05' },
];

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <h2>Tokenomics</h2>
      <div className="distribution">
        <h3>Initial Distribution</h3>
        <div className="chart">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="legend">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="legend-item">
                <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
                {entry.name}: {entry.value}%
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. 
        Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. 
        Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. 
        Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. 
        Sed lorem sit mauris id eget arcu ut. Vulpate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;