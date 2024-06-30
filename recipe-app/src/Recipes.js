// src/Recipes.js
import React from 'react';

const recipes = [
  { name: 'Omelet', ingredients: ['Eggs', 'Milk', 'Cheese', 'Bell Peppers', 'Onions', 'Spinach'] },
  { name: 'Pancakes', ingredients: ['Flour', 'Eggs', 'Milk', 'Baking Powder', 'Sugar'] },
  { name: 'Smoothie', ingredients: ['Yogurt', 'Milk', 'Bananas', 'Berries'] },
  { name: 'Chicken Salad', ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Olive Oil', 'Lemon'] },
  { name: 'Vegetable-Stir-fry', ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Garlic', 'Olive Oil']},
  { name: 'Grilled Cheese Sandwich', ingredients: ['Bread', 'Cheese', 'Butter']},
  { name: 'Spaghetti Bolognese', ingredients: ['Pasta', 'Beef', 'Tomatoes', 'Onions', 'Garlic', 'Olive Oil', 'Basil']},    
  { name: 'Chicken Curry', ingredients: ['Chicken', 'Onions', 'Garlic', 'Ginger', 'Tomatoes', 'Coconut Milk', 'Turmeric', 'Cumin']},
  { name: 'Beef Tacos', ingredients: ['Beef', 'Tortillas', 'Lettuce', 'Tomatoes', 'Cheese', 'Avocado', 'Sour Cream']},
  { name: 'Chocolate Chip Cookies', ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Chocolate Chips', 'Baking Powder']},
  { name: 'Banana Bread', ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder']},
  { name: 'Fruit Salad', ingredients: ['Apples', 'Bananas', 'Berries', 'Yogurt', 'Honey']},
  { name: 'Guacamole}', ingredients: ['Avocados', 'Onions', 'Tomatoes', 'Lemon', 'Salt']},
  { name: 'Hummus', ingredients: ['Chickpeas', 'Garlic', 'Lemon', 'Olive Oil', 'Tahini']},
  { name: 'Roasted Nuts', ingredients: ['Nuts', 'Olive Oil', 'Salt', 'Paprika']}
];

const Recipes = ({ selectedIngredients, setSelectedRecipe }) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient))
  );

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.name} onClick={() => setSelectedRecipe(recipe)}>
              {recipe.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes match the selected ingredients.</p>
      )}
    </div>
  );
};

export default Recipes;
