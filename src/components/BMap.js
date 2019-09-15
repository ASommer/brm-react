import React, { useState, useEffect, createRef } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import VehicleMarker from './VehicleMarker';
import { useQuery } from '@apollo/react-hooks';
// import '../styles/bmap.css';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DetailView from './DetailView';
import LoadingIndicator from './LoadingIndicator';
import MapTopBar from './MapTopBar';

const BMapContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex: '1 0 100%';
`;

const LeafletContainer = styled(LeafletMap)`
  flex: 1;
`;

const defaultPosition = {
  lat: 52.52,
  lng: 13.41,
  locationName: 'myBerlin',
  zoom: 14
};

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
  const [mapPosition, setMapPosition] = useState(defaultPosition);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [location, setlocation] = useState({
    lat: null,
    lng: null,
    locationName: ''
  });

  const mapRef = createRef();

  const updateLocation = newLocation => {
    const mapMoveTreshold = 0.002; //TODO: should calculatetd more precisely and separately for lat and lng
    if (
      newLocation &&
      (Math.abs(location.lat - newLocation.lat) > mapMoveTreshold ||
        Math.abs(location.lng - newLocation.lng) > mapMoveTreshold)
    ) {
      setlocation({
        ...location,
        ...newLocation
      });
    }
  };

  // const setDetailAnimationStatus = (boolVal) =>  setIsAnimatingDetailsView(boolVal)

  const showVehicleDetails = (e, item) => {
    const itemActive = item !== selectedVehicle ? item : null;
    setDetailsVisible(!!itemActive);
    setSelectedVehicle(itemActive);
  };


  useEffect(() => {
    location.lat && location.lng && setMapPosition(location);
  }, [location]);

  const onMoveEnd = e => {
    updateLocation(e.target.getCenter());
  };

  const { data, loading, error } = useQuery(GET_BIKES, {
    variables: mapPosition
  });

  return (
    <BMapContainer className="map-container">
      <MapTopBar updateLocation={updateLocation} />
      {error && <div className="notification">Note: {error}</div>}

      <LeafletContainer
        id="map1"
        center={[mapPosition.lat, mapPosition.lng]}
        zoom={15}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        onMoveEnd={onMoveEnd}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        ref={mapRef}
        style={{ position: 'relative' }}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {loading && <LoadingIndicator />}

        {!loading && (!data || !data.vehicles) && (
          <Marker position={[mapPosition.lat, mapPosition.lng]}>
            <Popup>
              We searched here, but there seems to be no available vehicle
              within a radius of 400 meters
            </Popup>
          </Marker>
        )}

        {data &&
          data.vehicles &&
          data.vehicles
            .map(item => (
              <VehicleMarker
                position={[item.lat, item.lng]}
                providerSlug={item.provider.slug}
                key={item.id}
                props={item}
                clickHandler={e => showVehicleDetails(e, item)}
              />
            ))}
      </LeafletContainer>

      <DetailView
        isVisible={detailsVisible}
        vehicleProps={selectedVehicle}
      />
    </BMapContainer>
  );
};

export default BMap;
