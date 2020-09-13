import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import RadioInput from './inputs/RadioInput';
import SearchBoxInput from './inputs/SearchBoxInput';
import '../components/SearchBar.css';
import {
  foodIngredientAPI,
  foodNameAPI,
  foodLetterAPI,
  drinkIngredientAPI,
  drinkNameAPI,
  drinkLetterAPI,
} from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import ButtonSearch from './ButtonSearch';

let teste = true;
function validateClick(radio, search, setSearch) {
  let validated = true;
  if (!radio || !search) {
    alert('Todos os campos devem estar  preenchidos!');
    validated = false;
  }
  if (radio === 'Primeira letra' && search.length > 1) {
    alert('Digite somente 1 (um) caracter para esta opção');
    validated = false;
    setSearch('');
  }
  return validated;
}

const fetchMealsAPI = (radio, search) => {
  if (radio === 'Ingrediente') return foodIngredientAPI(search);
  if (radio === 'Nome') return foodNameAPI(search);
  if (radio === 'Primeira letra') return foodLetterAPI(search);
  return null;
};

const fetchDrinksAPI = (radio, search) => {
  if (radio === 'Ingrediente') return drinkIngredientAPI(search);
  if (radio === 'Nome') return drinkNameAPI(search);
  if (radio === 'Primeira letra') return drinkLetterAPI(search);
  return null;
};

function handleClick(page, search, setData, radio, setSearch) {
  const validated = validateClick(radio, search, setSearch);
  if (validated && page === 'MainFood') {
    fetchMealsAPI(radio, search)
      .then((data) => {
        if (!data.meals) alert('Sua pesquisa não teve resultado! Tente novamente.');
        else setData(data.meals);
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
        alert('Algo inesperado aconteceu! Tente novamente.');
      });
  }
  if (validated && page === 'MainDrink') {
    fetchDrinksAPI(radio, search)
      .then((data) => {
        if (!data.drinks) alert('Sua pesquisa não teve resultado! Tente novamente.');
        else setData(data.drinks);
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
        alert('Algo inesperado aconteceu! Tente novamente.');
      });
    // para que uma funcao assincrona funcione propriamente, precisamos ter
    // certeza que estamos lidando com os dois cenarios possiveis:
    // tanto exito, como falha na resposta da API
  }
}

function SearchBar() {
  const [radio, setRadio] = useState('');
  const [search, setSearch] = useState('');
  const { setData, page } = useContext(RecipeContext);
  return (
    <div className="searchBar">
      <form>
        <SearchBoxInput
          handleChange={setSearch}
          name="search"
          value={search}
          dataTestId="search-input"
        />
        <div className="radio-set">
          <RadioInput
            handleChange={setRadio}
            value="Ingrediente"
            validation={radio}
            dataTestId="ingredient-search-radio"
          />
          <RadioInput
            handleChange={setRadio}
            value="Nome"
            validation={radio}
            dataTestId="name-search-radio"
          />
          <RadioInput
            handleChange={setRadio}
            value="Primeira letra"
            validation={radio}
            dataTestId="first-letter-search-radio"
          />
        </div>
        <ButtonSearch onClick={() => handleClick(page, search, setData, radio, setSearch)} />
      </form>
    </div>
  );
}

export default SearchBar;
