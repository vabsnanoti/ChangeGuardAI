import React from 'react';

function OpenAlerts() {

  const alerts = [
    'Redis latency spike',
    'Kubernetes node memory pressure',
    'Payment API 5xx increase'
  ];

  return (

    <div className="card">

      <h2>Open Infrastructure Alerts</h2>

      <ul>

        {
          alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))
        }

      </ul>

    </div>
  );
}

export default OpenAlerts;
