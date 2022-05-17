import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Recipe.css'

const Recipe = (props) => {

    const { idMeal, strMealThumb, strMeal, strInstructions } = props.recipe;
    const history = useNavigate();
    const handleMealDetails = id => {
        history(`/recipeDetails/${idMeal}`)

    }
    return (
        <div className='recipe'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h2>Meal Id: {idMeal}</h2>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={handleMealDetails}>View Details</button>
            <Link to={``}></Link>
        </div>
    );
};

export default Recipe;