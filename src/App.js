import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Recipes from './components/Home/Recipes/Recipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="recipeDetails/:idMeal" element={<RecipeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
