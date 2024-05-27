import React, { useState, useEffect } from "react";
import { logout } from "../../services/auth/authService"; // Asegúrate de ajustar la ruta
import "./css/styles.css";
import { getRoleById } from "../../services/rolesService";

function HeaderComponent() {
  const [loginOn, setLoginOn] = useState(false);
  const username = sessionStorage.getItem("n1");
  const username2 = sessionStorage.getItem("n2");

  useEffect(() => {
    if (sessionStorage.getItem("n1") !== null) {
      setLoginOn(true);
      console.log("Ya hay un usuario logueado");
    } else {
      setLoginOn(false);
      console.log("No hay un usuario logueado");
    }
  }, []);

  const handleLogout = () => {
    logout();
  };

  const [rol, setRol] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await getRoleById(sessionStorage.getItem("rol"));
      if (response) {
        setRol(response.rol);
      } else {
        setRol([]);
      }
    };

    fetchRoles();
  }, []);

  return (
    <header>
      <div className="logo">Rodolfo Robles</div>
      <nav>
        <ul>
          {!loginOn && (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
          {loginOn && (
            <>
              <li>
                <a href="/registros">Registros</a>
              </li>
              <li>
                <a href="#features">Doctores</a>
              </li>
              <li id="dataUser">
                <span>
                  {username} {username2}
                </span>
                <label>{rol}</label>
              </li>
              <li id="btnLogout">
                <a href="#contacto" onClick={handleLogout} id="aLogout">
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
