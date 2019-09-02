import React, {useState} from 'react'
import LocationSearch from './LocationSearch';
import BMap from './BMap';
import Layout from './Layout';

const Page1 = () => {

  const [location, setlocation] = useState({
    coords: [],
    locationName: ''
  });

  const updateLocation = newLocation => setlocation({
    ...location,
    newLocation
  })

  return (
        <Layout pageName="Page1">
            <div className="page1">
                <strong>Page-> Location: <span>{location.locationName}</span></strong>
                <LocationSearch updateLocation={updateLocation} />
                <BMap />
            </div>
        </Layout>
    )
}

export default Page1
