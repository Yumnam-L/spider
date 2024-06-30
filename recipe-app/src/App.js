// src/App.js
import React, { useState } from 'react';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import RecipeProcedure from './RecipeProcedure';

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      {!selectedRecipe ? (
        <>
          <Ingredients
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          <Recipes
            selectedIngredients={selectedIngredients}
            setSelectedRecipe={setSelectedRecipe}
          />
        </>
      ) : (
        <RecipeProcedure recipe={selectedRecipe} />
      )}
    </div>
  );
};

export default App;
