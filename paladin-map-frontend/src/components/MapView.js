import React from 'react';

const MapView = ({ markers }) => {
  const center = markers.length ? markers[0] : { lat: 39.7392, lng: -104.9903 }; // default to Denver, CO but ill chagnge it to colardo srpings

  const markerParams = markers.map(marker => `&markers=color:red%7C${marker.lat},${marker.lng}`).join('');

  const src = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=12&size=800x400&maptype=roadmap${markerParams}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  return (
    <div>
      <img src={src} alt="Crime Hotspot Map" />
    </div>
  );
};

export default MapView;
