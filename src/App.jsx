import LoginPage from "./components/pages/login/LoginPage";

/**
 * Root application component that renders the login page.
 *
 * Renders the top-level React element tree for the app, currently containing only the LoginPage.
 * @returns {import('react').ReactElement} A React element that mounts the application's login page.
 */
function App() {
  // state (état, données)

  // comportements

  //affichage (render)
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
