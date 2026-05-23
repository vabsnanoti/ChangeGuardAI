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
          width: '100%',
          borderRadius: '10px'
        }}
      />

    </div>
  );
}

export default DependencyMap;
