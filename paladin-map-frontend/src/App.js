import React, { useState } from 'react';
import LiveMap from './components/LiveMap';

function App() {
  const [markers, setMarkers] = useState([
    { lat: 38.8339, lng: -104.8214 },
    { lat: 38.8452, lng: -104.8007 },
  ]);

  return (
    <div className="App">
      <h1>PALADIN: Live Crime Hotspot Map</h1>
      <LiveMap markers={markers} />
    </div>
  );
}

export default App;
