import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';

const verifyChecked = async (setState, element, id, type, i, check, tic) => {
  const style = document.querySelector(`label[for="${element}"]`).style;
  if (
    document.querySelectorAll('input[name="cname"]:checked').length ===
    document.querySelectorAll('input[name="cname"]').length
  ) {
    document.getElementById('btn').disabled = false;
    setState(true);
  } else {
    document.getElementById('btn').disabled = true;
    setState(false);
  }
  // fonte https://qastack.com.br/programming/5541387/check-if-all-checkboxes-are-selected
  if (i.checked === true) {
    style.textDecoration = 'line-through';
    check(!tic);
  } else {
    style.textDecoration = null;
    check(!tic);
  }

  const ingredients = Array.from(document.querySelectorAll('input[name="cname"]:checked'));
  console.log(ingredients.length);
  const storage = JSON.parse(
    localStorage.getItem('InProgressRecipes' /*  || "{ meals: {}, cocktails: {} }" */)
  );
  console.log(ingredients.map((item) => item.id));
  if (type === 'comida' && storage) {
    storage.meals[id] = ingredients.map((item) => item.id);
    localStorage.setItem(
      'InProgressRecipes',
      JSON.stringify({ ...storage, meals: { ...storage.meals } })
    );
    console.log(JSON.parse(localStorage.getItem('InProgressRecipes')));
  } else if (storage === null && type === 'comida') {
    localStorage.setItem(
      'InProgressRecipes',
      JSON.stringify({ ...storage, meals: { [id]: ingredients.map((item) => item.id) } })
    );
  } else if (type === 'bebida' && storage) {
    storage.cocktails[id] = ingredients.map((item) => item.id);
    localStorage.setItem(
      'InProgressRecipes',
      JSON.stringify({ ...storage, cocktails: { ...storage.cocktails } })
    );
    console.log(JSON.parse(localStorage.getItem('InProgressRecipes')));
  } else if (storage === null && type === 'bebida') {
    localStorage.setItem(
      'InProgressRecipes',
      JSON.stringify({ ...storage, cocktails: { [id]: ingredients.map((item) => item.id) } })
    );
  }
};

function IngredientOngoing(props) {
  const { ingredient, measure, idRecipe, type } = props;
  const foundRecipe = JSON.parse(
    localStorage.getItem('InProgressRecipes' /* || "{ meals: {}, cocktails: {}}" */)
  );
  const [store, setStore] = useState('');
  const [reload, setReload] = useState(false);

  const { setDone } = useContext(RecipeContext);
  //
  useEffect(() => {
    if (type === 'comida') {
      return setStore(foundRecipe.meals[idRecipe]);
    } else {
      return setStore(foundRecipe.cocktails[idRecipe]);
    }
  }, [reload]);
  //
  // console.log(store);
  return (
    <div className="ingredients-details">
      <h4>Ingredientes</h4>
      {ingredient.map((item, i) => {
        return store ? (
          <div data-testid={`${i}-ingredient-step`}>
            <input
              checked={item === store[i]}
              type="checkbox"
              id={item}
              name="cname"
              value={`${item} : ${measure[i]}`}
              onChange={({ target }) =>
                verifyChecked(setDone, item, idRecipe, type, target, setReload, reload)
              }
            />
            <label
              htmlFor={item}
              style={store[i] && { textDecoration: 'line-through' }}
            >{`${item} : ${measure[i]}`}</label>
          </div>
        ) : (
          <div data-testid={`${i}-ingredient-step`}>
            <input
              type="checkbox"
              id={item}
              name="cname"
              value={`${item} : ${measure[i]}`}
              onChange={({ target }) =>
                verifyChecked(setDone, item, idRecipe, type, target, setReload, reload)
              }
            />
            <label htmlFor={item}>{`${item} : ${measure[i]}`}</label>
          </div>
        );
      })}
    </div>
  );
}

export default IngredientOngoing;

IngredientOngoing.propTypes = {
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  idRecipe: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
