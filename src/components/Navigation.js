import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="main-navigation">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
