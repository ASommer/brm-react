import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock("react-geolocated", () => {
  return {
      geolocated: function(hocConf) {
          return function(component) {
              component.defaultProps = {
                  ...component.defaultProps,
                  isGeolocationAvailable: true,
                  isGeolocationEnabled: true,
                  coords: {
                      accuracy: 130,
                      altitude: null,
                      altitudeAccuracy: null,
                      heading: null,
                      latitude: 10,
                      longitude: 10,
                      speed: null
                   }
              };
              return component;
          };
        }
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
