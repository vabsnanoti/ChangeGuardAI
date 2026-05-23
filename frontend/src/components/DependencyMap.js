import React from 'react';

import dependencyMap from '../assets/dependency-map.png';


function DependencyMap() {

  return (

    <div className="card">

      <h2>Dependency Map</h2>

      <img
        src={dependencyMap}
        alt="dependency-map"
        style={{
          width: '400px',
          display: 'block',
          margin: 'auto'
        }}
      />

      <p
        style={{
          textAlign: 'center',
          marginTop: '10px'
        }}
      >
        Service Dependency Architecture
      </p>

    </div>
  );
}

export default DependencyMap;
