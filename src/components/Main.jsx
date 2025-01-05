import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  return (
    <main>
      <form className="ingredientForm" action={addIngredient}>
        <input
          className="ingredientInput"
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="addButton">+ Add Ingredient</button>
      </form>
      <h1 className="ingredientsHeader">Ingredients on hand:</h1>
      <ul className="ingredientsLst">{ingredientsList}</ul>
      <div className="getRecipeContainer">
        <div>
          <h2 className="submitRecipeHeader">Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="getRecipeButton">Get a recipe</button>
      </div>
    </main>
  );
};

export default Main;
