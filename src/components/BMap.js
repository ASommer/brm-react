import React, { useState, useEffect, createRef, Suspense } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import VehicleMarker from './VehicleMarker';
import { useQuery } from '@apollo/react-hooks';
import '../styles/bmap.css';
import gql from 'graphql-tag';

// import {Query} from 'react-apollo'
import DetailView from './DetailView';
import LoadingIndicator from './LoadingIndicator';
import LocationSearch from './LocationSearch';

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
    setlocation({
      ...location,
      ...newLocation
    });
  };

  const showVehicleDetails = (e, item) => {
    const itemActive = item !== selectedVehicle ? item : null
    setDetailsVisible(!!itemActive); 
    setSelectedVehicle(itemActive);
  };

  useEffect(() => {
    console.log('rerender on location change');

    const map = mapRef.current;
    if (map !== null && location.mapView) {
      //this might be already submitted by locationsearch component in a proper manner
      // const LatLngBounds = [
      //   [location.mapView.TopLeft.Latitude, location.mapView.TopLeft.Longitude],
      //   [
      //     location.mapView.BottomRight.Latitude,
      //     location.mapView.BottomRight.Longitude
      //   ]
      // ];
      // map.leafletElement.fitBounds(LatLngBounds)
    }
    //TODO: else: zoom default
    // location.zoom = location.zoom || 14;
    location.lat && location.lng && setMapPosition(location);
    // map.leafletElement.setZoom(14);
  }, [location, mapRef]);

  const onZoomEnd = e => {
    console.log('zoomend ', e);
  };

  const onMooveEnd = e => {
    console.log('onmooveend');
  };

  const { data, loading, error } = useQuery(GET_BIKES, {
    variables: mapPosition
  });

  return (
    <div className="map-container">
      <LocationSearch updateLocation={updateLocation} />
      <small className="help-text">
        We search vehicles within an radius of max 400m. It might help sometimes
        to move the map in order to find vehicles
      </small>
      {error && <div className="notification">Note: {error}</div>}

      <LeafletMap
        id="map1"
        center={[mapPosition.lat, mapPosition.lng]}
        // zoom={mapPosition.zoom}
        zoom={15}
        // maxZoom={16}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onZoomEnd={onZoomEnd}
        onMoveend={onMooveEnd}
        ref={mapRef}
        style={{ position: 'relative' }}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

        {loading && <LoadingIndicator />}

        {!loading && !data.vehicles.length && (
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
            .slice(0, 10)
            .map(item => (
              <VehicleMarker
                position={[item.lat, item.lng]}
                providerSlug={item.provider.slug}
                key={item.id}
                props={item}
                clickHandler={e => showVehicleDetails(e, item)}
              />
            ))}
      </LeafletMap>
      <DetailView isVisible={detailsVisible} vehicleProps={selectedVehicle} />
    </div>
  );
};

export default BMap;
