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
      <ul>{ingredientsList}</ul>
    </main>
  );
};

export default Main;
