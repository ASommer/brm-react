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
    console.log('updateLocation in page1: ', newLocation)
    setlocation({
      ...location,
      ...newLocation
    });
  };

  return (
      <div className="homepage" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <LocationSearch updateLocation={updateLocation} />
        <BMap location={location} />
      </div>
  );
};

export default HomePage;
