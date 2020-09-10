import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeContext from '../context/RecipeContext';

// test email and clearStorage do not pass, storage is cleared before i donot know why

function Profile() {
  const { email } = useContext(RecipeContext);
  return (
    <div>
      <Header />
      <p data-testid="profile-email">{email}</p>
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
        <button type="button" data-testid="profile-logout-btn" onClick={localStorage.clear()}>
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
