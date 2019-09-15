import React from 'react';
// import '../styles/detail-view.css';
import styled from 'styled-components';

const ViewWrapper = styled.div`
  background: transparent;
  opacity: 1;
  height: 0;
  transition: height 50ms;

  &.is--visible {
    height: 100px;
    background: white;
    transition: height 0.05s;
  }
`;

const SelectedVehicleContainer = styled.div`
  background-color: rgba(240, 240, 240, 0.5);
  border: 2px solid var(--brand-color);
  padding: 0.5rem;
  color: var(--brand-color);
`;

const DetailRow1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
//TODO: how to handle more or less equal styled components?
const DetailsRow2 = styled.div``;

const ProviderName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;

  a {
    color: var(--brand-color);
    text-decoration: none;
  }
`;

const ProviderLogo = styled.div``;

const DetailView = ({ isVisible, vehicleProps }) => {
  const LogoImage = ({ slug }) => {
    let logo = null;
    try {
      logo = require(`../assets/provider/${slug}.jpg`);
    } catch (error) {
      console.log('could not find providerlogo');
    }

    return logo && <img src={logo} alt={slug} />;
  };

  return (
    <ViewWrapper className={isVisible && 'is--visible'}>
      {vehicleProps && (
        <SelectedVehicleContainer className={'selected-vehicle'}>
          <DetailRow1 className="vehicle-details details-row">
            <ProviderLogo className="provider-logo">
              <LogoImage slug={vehicleProps.provider.slug} />
            </ProviderLogo>
            <ProviderName className="provider-name">
              <a href={vehicleProps.provider.website}>
                {vehicleProps.provider.name}
              </a>
            </ProviderName>
            <div className="vehicle-type">{vehicleProps.type}</div>
          </DetailRow1>
          <DetailsRow2 className="app-links details-row">
            <a href={vehicleProps.provider.app.ios} className="ios">
              <img src={require(`../assets/ios-badge.png`)} alt="ios-badge" />{' '}
            </a>
            <a href={vehicleProps.provider.app.android} className="android">
              <img
                src={require(`../assets/android-badge.png`)}
                alt="android-badge"
              />
            </a>
          </DetailsRow2>
        </SelectedVehicleContainer>
      )}
    </ViewWrapper>
  );
};

export default DetailView;
