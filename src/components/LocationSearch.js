import React, { useState, useMemo } from 'react';
import getLocationByCityname from '../helper/geoLocationByCityName';
import Autosuggest from 'react-autosuggest';

const LocationSearch = ({ updateLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locSuggestions, setLocSuggestions] = useState([]);

  const submitFormHandler = e => {
    e.preventDefault();
    if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      updateLocation(selectedLocation);
    } else if (searchTerm && searchTerm.length > 2) {
      // retireve location
    } else {
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

  const renderSuggestion = suggestion => {
    return (
      <span data-location-id={suggestion.id}>{suggestion.locationName}</span>
    );
  };

  useMemo(() => ()=> {
    updateLocation(selectedLocation)
  }, [selectedLocation, updateLocation]);

  return (
    <div className="forma-wrapper">
      <form onSubmit={submitFormHandler} className="location-form-as">
        <Autosuggest
          suggestions={locSuggestions}
          inputProps={{
            placeholder: 'Type a Cityname',
            value: searchTerm,
            onChange: onChange
          }}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          highlightFirstSuggestion={true}
        />
      </form>
    </div>
  );
};

export default LocationSearch;
