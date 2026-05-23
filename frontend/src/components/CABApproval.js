import React from 'react';

function CABApproval({ analysis }) {

  return (
    <div className="card">

      <h2>CAB Approval Decision</h2>

      {
        analysis.risk_level === 'HIGH'
        ?
        <button className="reject">Reject Deployment</button>
        :
        <button className="approve">Approve Deployment</button>
      }

    </div>
  );
}

export default CABApproval;
