import React from 'react';
import '../styles/detail-view.css';

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
    isVisible &&
    vehicleProps && (
      <div className={'selected-vehicle'}>
        <div className="vehicle-details details-row">
          <div className="provider-logo">
            <LogoImage slug={vehicleProps.provider.slug} />
          </div>
          <div className="provider-name">
            <a href={vehicleProps.provider.website}>
              {vehicleProps.provider.name}
            </a>
          </div>
          <div className="vehicle-type">{vehicleProps.type}</div>
        </div>
        <div className="app-links details-row">
          <a href={vehicleProps.provider.app.ios} className="ios">
            <img src={require(`../assets/ios-badge.png`)} alt="ios-badge" />{' '}
          </a>
          <a href={vehicleProps.provider.app.android} className="android">
            <img
              src={require(`../assets/android-badge.png`)}
              alt="android-badge"
            />
          </a>
        </div>
      </div>
    )
  );
};

export default DetailView;
