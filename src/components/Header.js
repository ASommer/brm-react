import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  align-self: normal;
  padding: .2rem .5rem;
  border-bottom: 1px solid var(--grey);
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-top: 0.3em;
  margin-bottom: 0;
`

const Header = () => {
  return (
    <MainHeader className="header">
      <Title data-test-id="header-title">Bikerentalmap</Title>
      <Navigation />
    </MainHeader>
  );
};

export default Header;
