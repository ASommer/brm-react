import React from 'react';
import BMap from './BMap';

const HomePage = () => {

  return (
      <div className="homepage" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <BMap />
      </div>
  );
};

export default HomePage;
