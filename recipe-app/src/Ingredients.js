// src/Ingredients.js
import React from 'react';
// import './assets/background.jpg'

const ingredientCategories = {
  Vegetables: ['Tomatoes', 'Onions', 'Garlic', 'Bell Peppers', 'Carrots', 'Potatoes', 'Spinach', 'Broccoli', 'Mushrooms', 'Zucchini', 'Lettuce', 'Cucumbers'],
  Proteins: ['Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Eggs', 'Tofu', 'Chickpeas', 'Lentils', 'Beans'],
  Grains: ['Rice', 'Pasta', 'Quinoa', 'Couscous', 'Bread', 'Tortillas', 'Oats'],
  Dairy: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'],
  Fruits: ['Apples', 'Bananas', 'Berries', 'Lemon', 'Avocados'],
  Spices: ['Salt', 'Pepper', 'Basil', 'Oregano', 'Cumin', 'Paprika', 'Chili Powder', 'Turmeric', 'Ginger', 'Parsley'],
  Oils: ['Olive Oil', 'Vegetable Oil', 'Soy Sauce', 'Vinegar', 'Mustard', 'Ketchup', 'Mayonnaise'],
  Misc: ['Flour', 'Sugar', 'Baking Powder', 'Yeast', 'Nuts', 'Chocolate'],
};

const Ingredients = ({ selectedIngredients, setSelectedIngredients }) => {
  const handleCheckboxChange = (ingredient) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((item) => item !== ingredient)
        : [...prevSelected, ingredient]
    );
  };

  return (
    <div>
      <h2>Select Ingredients</h2>
      {Object.keys(ingredientCategories).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {ingredientCategories[category].map((ingredient) => (
            <label key={ingredient}>
              <input
                type="checkbox"
                value={ingredient}
                onChange={() => handleCheckboxChange(ingredient)}
                checked={selectedIngredients.includes(ingredient)}
              />
              {ingredient}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
