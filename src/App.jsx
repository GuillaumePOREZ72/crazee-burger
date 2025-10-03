import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/oder/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  // state (état, données)

  // comportements

  //affichage (render)
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
