import React from 'react';

function IncidentHistory() {

  const incidents = [
    'Database migration outage - April',
    'Payment API latency spike - March',
    'Checkout rollback failure - February'
  ];

  return (

    <div className="card">

      <h2>Historical Incidents</h2>

      <ul>

        {
          incidents.map((incident, index) => (
            <li key={index}>{incident}</li>
          ))
        }

      </ul>

    </div>
  );
}

export default IncidentHistory;
