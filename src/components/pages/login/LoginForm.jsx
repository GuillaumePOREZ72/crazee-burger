import React, { useState } from "react";

/**
 * Render a login form that greets the user and clears the input when submitted.
 *
 * The component renders a controlled text input with French UI text and a required
 * placeholder. Submitting the form displays an alert with "Bonjour {name}" and
 * resets the input value to an empty string.
 *
 * @returns {JSX.Element} A React element containing the login form.
 */
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
        <h1>Bienvenue chez nous</h1>
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
      </form>
    </div>
  );
}
