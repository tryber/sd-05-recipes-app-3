import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/Linet.css';
import RecipeContext from '../../context/RecipeContext';

const verifyChecked = (setState) => {
  // fonte https://qastack.com.br/programming/5541387/check-if-all-checkboxes-are-selected
 if (document.querySelectorAll('input[name="cname"]:checked').length === document.querySelectorAll('input[name="cname"]').length) {
    setState(true);
  } else {
    setState(false);
  }
}

function IngredientOngoing(props) {
    const { ingredient, measure } = props;
    const { setDone } = useContext(RecipeContext)
    return (
      <div className="ingredients-details">
        <h4>Ingredients</h4>
        <div>
          {ingredient.map((item, i) => (
            <div>
              <input type="checkbox" id={item} name="cname" value={`${item} : ${measure[i]}`} onChange={() => verifyChecked(setDone)} />
              {/* ideia de checar o check https://stackoverflow.com/questions/30975459/add-strikethrough-to-checked-checkbox */}
              <label data-testid={`${i}-ingredient-step`} className="strikethrough" for={item}>{`${item} : ${measure[i]}`}</label>
            </div>
          ))}
        </div>
      </div>
    );
}

export default IngredientOngoing;

IngredientOngoing.propTypes = {
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
};
