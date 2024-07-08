// src/RecipeProcedure.js
import React from 'react';
// import'./App.css'
// import omletImage from './assets/omlet.jpeg';

const RecipeProcedure = ({ recipe }) => {
  const procedures = {
    Omelet: {
      preparation: [
        '3 Eggs',
        '2 tbsp Milk',
        '1/4 cup Cheese, shredded',
        '1/4 cup Bell Peppers, diced',
        '1/4 cup Onions, diced',
        '1/4 cup Spinach, chopped',
        'Salt and Pepper to taste',
        '1 tbsp Butter',
      ],
      instructions: [
        'Beat the eggs and milk in a bowl, adding a pinch of salt and pepper.',
        'Melt butter in a non-stick skillet over medium heat.',
        'Add onions and bell peppers, sautéing until soft.',
        'Add spinach and cook until wilted.',
        'Pour in the egg mixture and let it cook undisturbed for a few minutes.',
        'Sprinkle cheese over one half of the omelet, fold it over, and cook until the cheese melts.',
        'Serve hot.',
      ],
    //   image: omletImage,
    },
    Pancakes: {
      preparation: [
        '1 cup Flour',
        '2 tbsp Sugar',
        '2 tsp Baking Powder',
        '1/2 tsp Salt',
        '1 cup Milk',
        '1 Egg',
        '2 tbsp Butter, melted',
        '1 tsp Vanilla Extract',
      ],
      instructions: [
        'In a bowl, whisk together flour, sugar, baking powder, and salt.',
        'In another bowl, beat the milk, egg, melted butter, and vanilla extract.',
        'Pour the wet ingredients into the dry ingredients and mix until just combined.',
        'Heat a lightly oiled griddle over medium-high heat.',
        'Pour batter onto the griddle, forming pancakes of desired size.',
        'Cook until bubbles form on the surface, then flip and cook until browned on the other side.',
        'Serve with syrup and your favorite toppings.',
      ],
      
    },
    Smoothie: {
      preparation: [
        '1 cup Yogurt',
        '1/2 cup Milk',
        '1 Banana',
        '1/2 cup Berries (Strawberries, Blueberries, etc.)',
        '1 tbsp Honey (optional)',
      ],
      instructions: [
        'Place yogurt, milk, banana, berries, and honey in a blender.',
        'Blend until smooth.',
        'Pour into a glass and enjoy.',
      ],
      
    },
    ChickenSalad: {
      preparation: [
        '2 cups Cooked Chicken, shredded',
        '2 cups Lettuce, chopped',
        '1 cup Tomatoes, diced',
        '1/2 cup Cucumbers, sliced',
        '1/4 cup Olive Oil',
        '1 Lemon, juiced',
        'Salt and Pepper to taste',
      ],
      instructions: [
        'In a large bowl, combine the chicken, lettuce, tomatoes, and cucumbers.',
        'In a small bowl, whisk together the olive oil, lemon juice, salt, and pepper.',
        'Pour the dressing over the salad and toss to coat.',
        'Serve chilled.',
      ],
    },
    SpaghettiBolognese: {
        preparation: [
            '200g Ground Beef',
            '1 Onion, diced',
            '2 cloves Garlic, minced',
            '1 can (400g) Tomatoes, crushed',
            '2 tbsp Olive Oil',
            '1 tsp Basil',
            '1 tsp Oregano',
            'Salt and Pepper to taste',
            '200g Spaghetti'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium heat.',
            'Add onions and garlic, sautéing until translucent.',
            'Add ground beef, cooking until browned.',
            'Stir in crushed tomatoes, basil, oregano, salt, and pepper.',
            'Simmer for 20 minutes, stirring occasionally.',
            'Cook spaghetti according to package instructions.',
            'Serve the Bolognese sauce over the spaghetti.'
        ],
    },
    ChickenCurry: {
        preparation: [
            '500g Chicken, cut into pieces',
            '1 Onion, diced',
            '2 cloves Garlic, minced',
            '1 tbsp Ginger, minced',
            '2 Tomatoes, chopped',
            '1 can Coconut Milk',
            '1 tsp Turmeric',
            '1 tsp Cumin',
            '1 tbsp Curry Powder',
            '2 tbsp Olive Oil',
            'Salt and Pepper to taste'
        ],
        instructions: [
            'Heat olive oil in a large pot over medium heat.',
            'Add onions, garlic, and ginger, sautéing until fragrant.',
            'Add chicken pieces and cook until browned.',
            'Stir in tomatoes, turmeric, cumin, and curry powder; cook for a few minutes.',
            'Pour in coconut milk, salt, and pepper; bring to a simmer.',
            'Cook for 20-25 minutes until chicken is cooked through and sauce thickens.',
            'Serve with rice or naan bread.'
        ],
    },
    BeefTacos: {
        preparation: [
            '1 Onion, diced',
            '2 cloves Garlic, minced',
            '1 packet Taco Seasoning',
            '8 Tortillas',
            '1 cup Lettuce, shredded',
            '1 cup Tomatoes, diced',
            '1 cup Cheese, shredded',
            '1 Avocado, sliced',
            '1/2 cup Sour Cream'
        ],
        instructions: [
            'Cook ground beef in a skillet over medium heat until browned; drain fat.',
            'Add onions and garlic, cooking until softened.',
            'Stir in taco seasoning and a small amount of water; cook until thickened.',
            'Warm tortillas in a skillet or microwave.',
            'Fill tortillas with beef mixture, lettuce, tomatoes, cheese, avocado, and sour cream.',
            'Serve immediately.'
        ],
    },
    ChocolateChipCookies: {
        preparation: [
            '1 cup Flour',
            '1/2 cup Sugar',
            '1/2 cup Brown Sugar',
            '1/2 cup Butter, softened',
            '1 Egg',
            '1 tsp Vanilla Extract',
            '1/2 tsp Baking Powder',
            '1 cup Chocolate Chips'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C).',
            'In a bowl, cream together butter, sugar, and brown sugar.',
            'Beat in egg and vanilla extract.',
            'Combine flour and baking powder; gradually add to the creamed mixture.',
            'Stir in chocolate chips.',
            'Drop by tablespoonfuls onto a baking sheet.',
            'Bake for 10-12 minutes until edges are golden brown.',
            'Cool on wire racks.'
        ],
    },
    BananaBread: {
        preparation: [
            '3 Bananas, mashed',
            '1 cup Sugar',
            '1/2 cup Butter, melted',
            '2 Eggs',
            '1 1/2 cups Flour',
            '1 tsp Baking Powder',
            '1/2 tsp Salt'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C).',
            'In a large bowl, combine mashed bananas, sugar, melted butter, and eggs.',
            'In another bowl, whisk together flour, baking powder, and salt.',
            'Stir dry ingredients into the banana mixture until just combined.',
            'Pour batter into a greased loaf pan.',
            'Bake for 60 minutes or until a toothpick inserted into the center comes out clean.',
            'Cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.'
        ],
    },
    FruitSalad: {
        preparation: [
            '2 Apples, diced',
            '2 Bananas, sliced',
            '1 cup Berries (Strawberries, Blueberries, etc.)',
            '1 cup Yogurt',
            '1 tbsp Honey'
        ],
        instructions: [
            'In a large bowl, combine apples, bananas, and berries.',
            'In a small bowl, mix yogurt and honey.',
            'Pour yogurt mixture over the fruit and toss gently to co',
            'Serve immediately.'
        ],
    },
    Guacamole: {
        preparation: [
            '3 Avocados, peeled and pitted',
            '1 Onion, diced',
            '2 Tomatoes, diced',
            '1 Lemon, juiced',
            'Salt and Pepper to taste'
        ],
        instructions: [
            'In a bowl, mash the avocados.',
            'Stir in onions, tomatoes, lemon juice, salt, and pepper.',
            'Serve with tortilla chips.'
        ],
    },
    Hummus: {
        preparation: [
            '1 can Chickpeas, drained and rinsed',
            '2 cloves Garlic',
            '1 Lemon, juiced',
            '2 tbsp Olive Oil',
            '2 tbsp Tahini',
            'Salt to taste'
        ],
        instructions: [
            'In a food processor, combine chickpeas, garlic, lemon juice, olive oil, and tahini.',
            'Blend until smooth.',
            'Season with salt to taste.',
            'Serve with pita bread or vegetables.'
        ],
    },
    RoastedNuts: {
        preparation: [
            '2 cups Mixed Nuts',
            '2 tbsp Olive Oil',
            '1 tsp Salt',
            '1 tsp Paprika'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C).',
            'In a bowl, toss nuts with olive oil, salt, and paprika.',
            'Spread nuts on a baking sheet.',
            'Roast for 10-15 minutes, stirring occasionally, until golden brown.',
            'Cool and serve.'
        ],
    },
    VegetableStirFry: {
        preparation: [
            '1 cup Broccoli, cut into florets',
            '1 cup Carrots, sliced',
            '1 cup Bell Peppers, sliced',
            '2 cloves Garlic, minced',
            '2 tbsp Soy Sauce',
            '2 tbsp Olive Oil',
            'Salt and Pepper to taste'
        ],
        instructions: [
            'Heat olive oil in a large skillet or wok over medium-high heat.',
            'Add garlic and sauté until fragrant.',
            'Add broccoli, carrots, and bell peppers; stir-fry for about 5-7 minutes until vegetables are tender-crisp.',
            'Add soy sauce, salt, and pepper; stir to combine.',
            'Serve hot, optionally over rice or noodles.'
        ],
    },
    GrilledCheeseSandwich: {
        preparation: [
            '4 slices Bread',
            '4 slices Cheese (Cheddar, Mozzarella, etc.)',
            '2 tbsp Butter'
        ],
        instructions: [

            'Butter one side of each bread slice.',
            'Place two slices of bread, buttered side down, in a skillet over medium heat.',
            'Top each with two slices of cheese, then the other slice of bread, buttered side up.',
            'Cook until bread is golden brown and cheese is melted, flipping once.',
            'Serve hot.'
        ],
    },
    
  }
  const { preparation, instructions } = procedures[recipe.name.replace(' ', '')];  

return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Preparation:</h3>
      <ul>
        {preparation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};



export default RecipeProcedure;
