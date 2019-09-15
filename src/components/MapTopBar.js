import React from 'react';
import LocationSearch from './LocationSearch';

import styled from 'styled-components';

const TopBar = styled.div`
  position: absolute;
  z-index: 800;
  width: 100%;
  display: flex;
`;

const MapTopBar = ({ updateLocation }) => {
  return (
    <TopBar>
      <LocationSearch updateLocation={updateLocation} />
    </TopBar>
  );
};

export default MapTopBar;
