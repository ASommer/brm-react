import React, { useState } from 'react';
import LocationSearch from './LocationSearch';
import BMap from './BMap';
import Layout from './Layout';

const Page1 = () => {
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
    <Layout pageName="Page1">
      <div className="page1">
        <strong>
          Page1 - LocationName: <span>{location.locationName}</span>
        </strong>
        <LocationSearch updateLocation={updateLocation} />
        <BMap />
      </div>
    </Layout>
  );
};

export default Page1;
