import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MainFood from './pages/MainFood';
import MainDrink from './pages/MainDrink';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/FoodDetails';
// import FoodProcess from './pages/FoodProcess';
// import DrinkProcess from './pages/DrinkProcess';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainFood} />
        <Route exact path="/bebidas" component={MainDrink} />
        <Route
          exact
          path="/comidas/:idRecipe"
          render={(props) => <FoodDetails {...props} />}
        />
        <Route
          exact
          path="/bebidas/:idRecipe"
          render={(props) => <DrinkDetails {...props} />}
        />
        {/* <Route exact path="/comidas/:idRecipe/in-progress"
render={(props) => <FoodProcess {...props} />} />
<Route exact path="/bebidas/:idRecipe/in-progress"
render={(props) => <DrinkProcess {...props} />} /> */}
        <Route path="/perfil" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
