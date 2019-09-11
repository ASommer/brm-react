import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
