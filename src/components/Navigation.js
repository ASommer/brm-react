import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const NavLink = styled(Link)`
  color: var(--brand-color);
`;

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLink to="/">Home</NavLink>
        </NavListItem>
        <NavListItem >
          <NavLink to="/about">About</NavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
