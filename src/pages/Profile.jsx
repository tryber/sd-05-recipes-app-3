import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const storageUser = JSON.parse(localStorage.getItem('user'));
  const emailUser = storageUser.email;
  const logOut = () => localStorage.clear();
  return (
    <div>
      <Header />
      <p data-testid="profile-email">{emailUser}</p>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="profile-logout-btn" onClick={() => logOut()}>
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
