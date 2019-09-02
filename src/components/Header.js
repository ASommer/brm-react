import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div>
      <h1>Bikerentalmap</h1>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
