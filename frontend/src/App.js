import React from 'react';

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

  const data = {

    analysis: {

      risk_score: 85,

      risk_level: 'HIGH',

      recommendation: 'DELAY DEPLOYMENT',

      factors: [
        'Production deployment',
        'Weekend deployment risk',
        'Database migration',
        'Historical incident history'
      ]

    }

  };


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
