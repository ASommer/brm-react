import React, { Suspense } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@apollo/react-hooks';

import '../styles/bmap.css'

import gql from 'graphql-tag';
// import {Query} from 'react-apollo'

const defaultCoords = {
  lat: 52.52,
  lng: 13.41
}

const GET_BIKES = gql`
  query getBikesQuery($lat: Float!, $lng: Float!) {
    vehicles(lat: $lat, lng: $lng) {
      id
      __typename
      type
      attributes
      lat
      lng
      battery
      provider {
        __typename
        slug
        name
        website
        app {
          __typename
          android
          ios
        }
        deepLink {
          __typename
          android
          ios
        }
      }
    }
  }
`;


const BMap = () => {
  const { data, error } = useQuery(GET_BIKES, {
    variables: defaultCoords
  });

  function VehicleMarker() {
    if(error) return <div>New Error</div>

    return <div>test to prevent query</div>

    // return (
    //     <h2>Results: {data.vehicles && data.vehicles.length && <span>{data.vehicles.length} </span>} </h2>
    // )
  }

  return (
    <div className="map-container" style={{height: '100%', minHeight: 400}}>
      <h2>BMap</h2>
      <LeafletMap
        center={[defaultCoords.lat, defaultCoords.lng]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[defaultCoords.lat, defaultCoords.lng]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>


      </LeafletMap>
      <Suspense fallback={<div>Loading ...</div> }>

        <h3>Within Suspense</h3>
        <VehicleMarker />

      </Suspense>
    </div>
  );
};

export default BMap;
