import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { idMeal } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])

    const history = useNavigate();
    const handleAllRecipes = () => {
        history('/recipes');
    }
    return (
        <div>
            <button onClick={handleAllRecipes}>All Recipes</button>
            <br />
            <img src={details.strMealThumb} alt="" />
            <h2>Recipe Name: {details.strMeal}</h2>
            <p>{details.strInstructions}</p>


        </div>
    );
};

export default RecipeDetails;