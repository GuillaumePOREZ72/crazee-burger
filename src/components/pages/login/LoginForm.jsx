import React, { useState } from "react";
import { Link } from "react-router";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous!</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entre ton prénom..."
          required
        />
        <button>Accédez à votre espace</button>
        <Link to="/order">Vers OrderPage</Link>
      </form>
    </div>
  );
}
