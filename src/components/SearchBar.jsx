import React from 'react';
import { useState } from 'react';
import RadioInput from './inputs/RadioInput';
import SearchBoxInput from './inputs/SearchBoxInput';
import '../components/SearchBar.css';

function SearchBar() {
  const [radio, setRadio] = useState('');
  const [search, setSearch] = useState('');

  function searchButton(selectRadio, typing) {
    if (!selectRadio || !typing) alert('Necessário dois parâmetros para buscar uma Receita!');
    else if (selectRadio === 'Primeira letra' && typing.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      setSearch('');
    } else console.log(`fetch Api_Recipe => ${selectRadio}: ${typing}`);
  }

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
        <div>
          <button data-testid="exec-search-btn" type="button" onClick={() => searchButton(radio, search)}>Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
