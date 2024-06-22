// src/components/Charts/PieChart.js
import React from 'react';
import {
  PieChart, Pie, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
