import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form subbmitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  return (
    <main>
      <form className="ingredientForm" onSubmit={handleSubmit}>
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
