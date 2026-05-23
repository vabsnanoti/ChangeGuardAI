import React from 'react';

function ExecutiveSummary({ analysis }) {

  return (
    <div className="card">

      <h2>SVP Executive Summary</h2>

      <ul>
        <li>Risk Level: {analysis.risk_level}</li>
        <li>Recommendation: {analysis.recommendation}</li>
        <li>Potential Impact: Checkout Failure</li>
        <li>Estimated Blast Radius: 3 Services</li>
      </ul>

    </div>
  );
}

export default ExecutiveSummary;
