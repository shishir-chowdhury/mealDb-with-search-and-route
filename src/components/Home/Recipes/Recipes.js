import React, { useEffect, useState } from 'react';
import Recipe from '../../Recipe/Recipe';
import './Recipes.css'

const Recipes = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipes(data.meals));
    }, [recipes])

    return (
        <div>
            <input onChange={handleSearchField} placeholder='Seatch Recipes Here' type="text" />
            <div className='recipes-container'>
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.idMeal}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>

        </div>
    );
};

export default Recipes;