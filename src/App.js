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
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
// import ExploreDrinkIngredient from './pages/ExploreDrinkIngredient';
import ExploreFood from './pages/ExploreFood';
// import ExploreFoodIngredient from './pages/ExploreFoodIngredient';
// import ExploreFoodOrigin from './pages/ExploreFoodOrigin';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
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
        <Route exact path="/explorar" component={Explore} />
        <Route exact path="/explorar/comidas" component={ExploreFood} />
        <Route exact path="/explorar/bebidas" component={ExploreDrink} />
        {/* <Route exact path="/explorar/comidas/ingredientes" component={ExploreFoodIngredient} />
        <Route exact path="/explorar/bebidas/ingredientes" component={ExploreDrinkIngredient} />
        <Route exact path="/explorar/comidas/area component={ExploreFoodOrigin} /> */}
     
        <Route path="/perfil" component={Profile} />
        <Route path="/receitas-feitas" component={DoneRecipes} />
        <Route path="/receitas-favoritas" component={FavoriteRecipes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
