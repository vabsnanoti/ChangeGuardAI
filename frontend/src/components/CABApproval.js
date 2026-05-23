import React from 'react';


function CABApproval({ analysis }) {

  const approve =
    analysis.risk_level === 'LOW';

  return (

    <div className="card">

      <h2>CAB Approval Decision</h2>

      {

        approve ? (

          <button
            style={{
              background: 'green',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            APPROVE DEPLOYMENT
          </button>

        ) : (

          <button
            style={{
              background: 'red',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            REJECT DEPLOYMENT
          </button>

        )

      }

    </div>
  );
}

export default CABApproval;
