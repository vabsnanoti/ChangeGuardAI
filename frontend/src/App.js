import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import RiskCard from './components/RiskCard';
import BlastRadius from './components/BlastRadius';
import DependencyMap from './components/DependencyMap';
import CABApproval from './components/CABApproval';
import ExecutiveSummary from './components/ExecutiveSummary';

import RiskFactors from './components/RiskFactors';
import IncidentHistory from './components/IncidentHistory';
import DeploymentTimeline from './components/DeploymentTimeline';
import OpenAlerts from './components/OpenAlerts';

import './styles.css';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios.post('http://localhost:8000/analyze-change', {

      change_id: 'CHG001245',

      service: 'payment-service',

      environment: 'production',

      deployment_time: 'Friday 20:00',

      changes: [
        'database migration',
        'new payment API'
      ]

    })
    .then(response => {

      setData(response.data);

    })
    .catch(error => {

      console.error(error);

    });

  }, []);


  if (!data) {

    return <h1>Loading ChangeGuard AI Dashboard...</h1>;

  }


  return (

    <div className="container">

      <Navbar />

      <ExecutiveSummary analysis={data.analysis} />

      <RiskCard analysis={data.analysis} />

      <RiskFactors analysis={data.analysis} />

      <OpenAlerts />

      <IncidentHistory />

      <DeploymentTimeline />

      <BlastRadius />

      <DependencyMap />

      <CABApproval analysis={data.analysis} />

    </div>

  );
}

export default App;
