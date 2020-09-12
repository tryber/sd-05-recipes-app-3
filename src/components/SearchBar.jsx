import React, { useContext } from 'react';
import { useState } from 'react';
import RadioInput from './inputs/RadioInput';
import SearchBoxInput from './inputs/SearchBoxInput';
import '../components/SearchBar.css';
import { foodIngredientAPI, foodNameAPI, foodLetterAPI, drinkIngredientAPI, drinkNameAPI, drinkLetterAPI } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import ButtonSearch from './ButtonSearch';

function validateClick(radio, search, setSearch) {
  if (!radio || !search) {
    alert('Necessário dois parâmetros para buscar uma Receita!');
  }
  if (radio === 'Primeira letra' && search.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
    setSearch('');
  }
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
  validateClick(radio, search, setSearch);
  if (page === 'MainFood') {
    fetchMealsAPI(radio, search).then((data) => setData(data.meals));
  }
  if (page === 'MainDrink') {
    fetchDrinksAPI(radio, search).then((data) => setData(data.drinks));
  }
}

function SearchBar() {
  const [radio, setRadio] = useState('');
  const [search, setSearch] = useState('');
  const { setData, page } = useContext(RecipeContext);
  return (
    <div>
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
