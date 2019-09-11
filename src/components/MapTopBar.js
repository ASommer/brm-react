import React from 'react';
import LocationSearch from './LocationSearch';

import styled from 'styled-components';

const TopBar = styled.div`
  position: absolute;
  z-index: 2000;
  width: 100%;
  display: flex;
`;

const MapTopBar = ({ updateLocation }) => {
  return (
    <TopBar className="map-top-bar">
      <LocationSearch updateLocation={updateLocation} />
    </TopBar>
  );
};

export default MapTopBar;
