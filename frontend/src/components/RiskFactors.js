import React from 'react';

function RiskFactors({ analysis }) {

  return (

    <div className="card">

      <h2>Risk Factors</h2>

      <ul>

        {
          analysis.factors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))
        }

      </ul>

    </div>
  );
}

export default RiskFactors;
