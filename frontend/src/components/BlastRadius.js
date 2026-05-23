import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

function BlastRadius() {

  const data = [
    { service: 'payment', impact: 90 },
    { service: 'checkout', impact: 70 },
    { service: 'billing', impact: 60 }
  ];

  return (
    <div className="card">

      <h2>Blast Radius Analysis</h2>

      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="service" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="impact" fill="#ff4d4d" />
      </BarChart>

    </div>
  );
}

export default BlastRadius;
