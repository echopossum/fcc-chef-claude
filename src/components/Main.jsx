const Main = () => {
  return (
    <main>
      <form className="ingredientForm">
        <input
          className="ingredientInput"
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
        />
        <button className="addButton">+ Add Ingredient</button>
      </form>
    </main>
  );
};

export default Main;
