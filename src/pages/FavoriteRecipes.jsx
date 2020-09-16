import React from 'react';
import Header from '../components/Header';
import '../css/Header.css';

function FavoriteRecipes() {
  return (
    <div className="header">
      <Header title="Receitas Favoritas" />
      <p>Tela de Receitas Favoritas</p>
    </div>
  );
}

export default FavoriteRecipes;
