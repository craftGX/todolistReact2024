import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  // Functions
  function handleChange(e) {
    setInputValue(e.target.value);
    setError(false); // Reset l'erreur lors de la saisie
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError(true); // Définir l'erreur si l'input est vide
    } else {
      setTodos([...todos, inputValue]);
      setInputValue("");
      setError(false); // Reset l'erreur après ajout du todo
    }
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <form>
        <input
          className={`input ${error ? "error" : ""}`} // Ajouter la classe "error" si une erreur est présente
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        {error && (
          <div className="error-message">Ce champ est obligatoire.</div>
        )}{" "}
        {/* Afficher le message d'erreur si nécessaire */}
        <button className="submit" onClick={handleSubmit}>
          Add Todo
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(index);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
