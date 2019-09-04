import React, { useState, useEffect, useMemo } from 'react';
import getLocationByCityname from '../helper/geoLocationByCityName';
import Autosuggest from 'react-autosuggest';

const LocationSearch = ({ updateLocation }) => {
  // const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locSuggestions, setLocSuggestions] = useState([]);

  const submitFormHandler = e => {
    e.preventDefault();
    console.log('formahandler - seleted location', selectedLocation);
    if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      updateLocation(selectedLocation);
    } else if (searchTerm && searchTerm.length > 2) {
      console.log('unknown location, use searchterm instead: ', searchTerm);
      // retireve location
    } else {
      console.log('no slection no searchterm , habdle error');
    }
  };

  const loadSuggestions = async value => {
    setIsLoading(true);
    const retrievedLocations = await getLocationByCityname(value);
    if (retrievedLocations) {
      const suggestions = retrievedLocations.map(item => ({
        id: item.LocationId,
        locationName: item.Address.Label,
        lat: item.DisplayPosition.Latitude,
        lng: item.DisplayPosition.Longitude,
        mapView: item.MapView
      }));
      setIsLoading(false);
      setLocSuggestions(suggestions);
    }
  };

  const onChange = (event, { newValue }) => {
    console.log('selectedLocation ==== ', selectedLocation);
    setSearchTerm(newValue);
  };

  const getSuggestionValue = suggestion => {
    // console.log('getsuggestionsvalue', suggestion);
    return suggestion.locationName;
  };

  const shouldRenderSuggestions = value => value.trim().length > 2; // render suggustion if string longer than 2 chars

  const onSuggestionsFetchRequested = ({ value }) => {
    loadSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    console.log('onSuggestionsClearRequested');
  };

  const onSelectLocation = val => {
    console.log('onselectedLocation -> val :', val);
  };

  const onSuggestionSelected = (suggestion, suggestionValue) => {
    // console.log('suggestion == ', suggestion);
    // console.log('suggestionValue == ', suggestionValue.suggestion);
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
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          onSelect={onSelectLocation}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          highlightFirstSuggestion={true}
        />
      </form>
    </div>
  );
};

export default LocationSearch;
