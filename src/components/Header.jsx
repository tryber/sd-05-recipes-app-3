import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header(props) {
  const [clicked, setClicked] = useState(false);
  const { title } = props;
  return (
    <div>
      <Link to="/perfil" data-testid="profile-top-btn">
        <img src={profileIcon} alt="profile icon" />
      </Link>
      <h2>Título: {title}</h2>
      <button type="button" data-testid="search-top-btn" onClick={() => setClicked(!clicked)}>
        <img
          src={searchIcon}
          alt="profile icon"
        />
      </button>
      {clicked && <SearchBar />}
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
