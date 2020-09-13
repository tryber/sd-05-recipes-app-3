import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Header.css';

function FavoriteRecipes() {
  return (
    <div className="header">
      <Header title="Receitas Favoritas" />
      <p>Tela de Receitas Favoritas</p>
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
