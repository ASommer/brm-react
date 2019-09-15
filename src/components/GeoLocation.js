import React from 'react';
import { geolocated } from 'react-geolocated';

const Geolocation = props => {
  if (!props.isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation</div>;
  } else if (!props.isGeolocationAvailable) {
    return <div>Geolocation is not enabled</div>
  } else if (props.coords) {
      props.setMyPosition(props.coords)
    return null
  } else {
    return <div>Getting location data</div>;
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Geolocation);
