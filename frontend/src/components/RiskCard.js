import React from 'react';

function RiskCard({ analysis }) {

  let color = 'green';

  if (analysis.risk_level === 'HIGH') {
    color = 'red';
  }
  else if (analysis.risk_level === 'MEDIUM') {
    color = 'orange';
  }

  return (
    <div className="card">

      <h2>Risk Analysis</h2>

      <div
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '20px',
          borderRadius: '10px'
        }}
      >

        <h1>{analysis.risk_score}%</h1>

        <h2>{analysis.risk_level}</h2>

        <p>{analysis.recommendation}</p>

      </div>

    </div>
  );
}

export default RiskCard;
