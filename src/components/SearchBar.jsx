import React, { useContext } from 'react';
import { useState } from 'react';
import RadioInput from './inputs/RadioInput';
import SearchBoxInput from './inputs/SearchBoxInput';
import '../components/SearchBar.css';
// import { fetchDrinksAPI, fetchMealsAPI } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../components/SearchBar.css';

// function searchButton(page, radio, search, setSearch, setData) {
//     if (!radio || !search) {
//       console.log(radio, search)
//       alert('Necessário dois parâmetros para buscar uma Receita!');
//     }
//     if (radio === 'Primeira letra' && search.length > 1) {
//       alert('Sua busca deve conter somente 1 (um) caracter');
//       setSearch('');
//     }
//     if (page === 'MainFood') {
//       fetchMealsAPI(radio, search).then((data) => setData(data.meals));
//     } 
//     if (page === 'MainDrink') {
//       fetchDrinksAPI(radio, search).then((data) => setData(data.drinks));
//     }
//   }
  
//   const Button = (page, radio, search, setData, setSearch) => (
//     <div>
//       <button
//         data-testid="exec-search-btn"
//         type="button" onClick={() => searchButton(page, radio, search, setData, setSearch)}
//       >
//         Buscar
//       </button>
//     </div>
//   );

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
          {/* {Button(page, radio, search, setData, setSearch)} */}
        </form>
      </div>
    );
}

export default SearchBar;
