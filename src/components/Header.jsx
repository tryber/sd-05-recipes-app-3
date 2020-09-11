import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar.jsx';
import './Header.css';

function Header(props) {
  const [clicked, setClicked] = useState(false);
  const { title } = props;
  return (
    <div className="header">
      <div className="topbar">
          <div className="perfil">
            <Link to="/perfil" data-testid="profile-top-btn">
              <img src={profileIcon} alt="profile icon" />
            </Link>
          </div>
          <div className="titulo">
            <p>Título{title}</p>
          </div>
          <div className="explorer">
            <button
              type="button"
              data-testid="search-top-btn"
              onClick={() => setClicked(!clicked)}
            >
              <img src={searchIcon} alt="profile icon" />
            </button>
          </div>
      </div>
      <div className="searchBar">
        {clicked && <SearchBar />}
      </div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
