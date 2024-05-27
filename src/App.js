import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./modules/auth/authPage"; // Asegúrate de que la ruta sea correcta
import HomePage from "./modules/home/HomePage";
import RegistrosComponent from "./modules/registros/registrosComponent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registros/*" element={<RegistrosComponent />} />
        {/* Aquí puedes añadir rutas adicionales si es necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
