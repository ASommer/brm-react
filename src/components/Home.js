import React, { useState } from 'react';
import LocationSearch from './LocationSearch';
import BMap from './BMap';

const HomePage = () => {
  const [location, setlocation] = useState({
    lat: null,
    lng: null,
    locationName: ''
  });

  const updateLocation = newLocation => {
    setlocation({
      ...location,
      ...newLocation
    });
  };

  return (
      <div className="homepage page">
        <LocationSearch updateLocation={updateLocation} />
        <BMap location={location} />
      </div>
  );
};

export default HomePage;
