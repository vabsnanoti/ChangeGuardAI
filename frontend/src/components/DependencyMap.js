import React from 'react';

function DependencyMap() {

  return (

    <div className="card">

      <h2>Dependency Map</h2>

      <div style={{ textAlign: 'center' }}>

        <img
          src="https://kubernetes.io/images/kubernetes-horizontal-color.png"
          alt="Dependency Map"
          style={{
            width: '500px',
            maxWidth: '100%',
            borderRadius: '10px'
          }}
        />

      </div>

    </div>
  );
}

export default DependencyMap;
