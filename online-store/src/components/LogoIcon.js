import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/logoRoupitcha.png';

class LogoIcon extends React.Component {
  render() {
    return (
      <Link to="/">
        <img src={logo} alt="TrybeStore" width="50px" className="icon" />
      </Link>
    );
  }
}

export default LogoIcon;
