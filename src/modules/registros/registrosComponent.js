import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import CrearRegistrosPages from "./create/crearRegistrosPages";
import ListRegistrosPages from "./list/listRegistrosPages";
import { Link } from "react-router-dom";
import "./css/styles.css";
import buscar from "./img/lupa.png";
import crear from "./img/boligrafo.png";

function RegistrosComponent() {
  return (
    <div className="containerCustomerPage">
      <HeaderComponent />
      <div className="containerRegistrosComponent">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="buscar">
                <img src={buscar} alt="Buscar" />
                Buscar
              </Link>
            </li>
            <li>
              <Link to="crear">
                <img src={crear} alt="Crear" />
                Crear
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<CrearRegistrosPages />} />
            <Route path="buscar" element={<ListRegistrosPages />} />
            <Route path="crear" element={<CrearRegistrosPages />} />
          </Routes>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default RegistrosComponent;
