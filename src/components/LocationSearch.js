import React, { useState, useMemo, useEffect } from 'react';
import getLocationByCityname from '../helper/geoLocationByCityName';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';
import GeoLocation from './GeoLocation';

const LocationSearchWrapper = styled.div`
  margin: 0 auto;
  padding: 0.2rem 1rem;
`;

const Notification = styled.div`
  padding: 0.5em;
`;

const LocationSearch = ({ updateLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locSuggestions, setLocSuggestions] = useState([]);
  const [notification, setNotification] = useState(null);
  const [myPosition, setMyPosition] = useState(null);

  const submitFormHandler = e => {
    e.preventDefault();
    if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      updateLocation(selectedLocation);
      setNotification(null);
    } else if (searchTerm && searchTerm.length > 2) {
      // retireve location
      setNotification(null); //TODO: check for best UX(show loader or hint)
    } else {
      setNotification({
        status: 'error',
        msg: 'could not retrieve location, please try another one'
      });
    }
  };

  const loadSuggestions = async value => {
    const retrievedLocations = await getLocationByCityname(value);
    if (retrievedLocations) {
      const suggestions = retrievedLocations.map(item => ({
        id: item.LocationId,
        locationName: item.Address.Label,
        lat: item.DisplayPosition.Latitude,
        lng: item.DisplayPosition.Longitude,
        mapView: item.MapView
      }));
      setLocSuggestions(suggestions);
    }
  };

  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  const getSuggestionValue = suggestion => {
    return suggestion.locationName;
  };

  const shouldRenderSuggestions = value => value.trim().length > 2;

  const onSuggestionsFetchRequested = ({ value }) => {
    loadSuggestions(value);
  };

  const onSuggestionSelected = (suggestion, suggestionValue) => {
    setSelectedLocation(suggestionValue.suggestion);
  };

  const onSuggestionsClearRequested = () => {
    // console.log('onSuggestionsClearRequested');
  };

  const renderSuggestion = suggestion => {
    return (
      <span data-location-id={suggestion.id}>{suggestion.locationName}</span>
    );
  };

  useMemo(
    () => () => {
      updateLocation(selectedLocation);
    },
    [selectedLocation, updateLocation]
  );

  useEffect(() => {
    if (!selectedLocation && myPosition) {
      updateLocation({
        lat: myPosition.latitude,
        lng: myPosition.longitude
      });
    }
  }, [myPosition, selectedLocation, updateLocation]);

  return (
    <LocationSearchWrapper>
      <form onSubmit={submitFormHandler} className="location-search-form">
        <label htmlFor="brm-location-search" className="sr-only">
          Search for Address or City
        </label>
        <Autosuggest
          suggestions={locSuggestions}
          inputProps={{
            placeholder: 'Type Adress or Cityname',
            value: searchTerm,
            onChange: onChange,
            id: 'brm-location-search'
          }}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          highlightFirstSuggestion={true}
        />
        {notification && <Notification>{notification.msg}</Notification>}
      </form>
      <GeoLocation setMyPosition={setMyPosition} />
    </LocationSearchWrapper>
  );
};

export default LocationSearch;
