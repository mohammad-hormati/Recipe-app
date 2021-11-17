import React , {useEffect} from 'react';
import './Recipes.css';

function Recipes({query , setRecipes , recipes}) {
    const App_ID = "02d2814d";
    const App_KEY = "5bba1842412a8be85c7067804f105748";
    const Req = `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`;	
  
    useEffect(() => {
      getRecipes();
    }, [query])
  
    const getRecipes = async () => {
      const response = await fetch(Req);
      const data = await response.json();
      setRecipes(data.hits)
    }
  
    return (
        <div className="container">
            {
            recipes.map(recipe => {
                return(
                    <div className="recipe-container">
                        <h2 className="title">{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt="" />
                        <p className="cal">calories : {recipe.recipe.calories}</p>
                    </div>
                )
            })
            }
        </div>
        
    )
}

export default Recipes
