import React from "react";
import "./css/styles.css";

function UsuariosPages() {
  return (
    <div>
      <header>
        <div className="logo">Rodolfo Robles</div>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#features">Características</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero"></section>

      <footer>
        <div className="contact-info">
          <p>Dirección: [Dirección de la Institución]</p>
          <p>Teléfono: [Número de Teléfono]</p>
          <p>Email: [Correo Electrónico]</p>
        </div>
        <div className="social-media">
          <a href="[url-facebook]">
            <img src="icon-facebook.png" alt="Facebook" />
          </a>
          <a href="[url-twitter]">
            <img src="icon-twitter.png" alt="Twitter" />
          </a>
          <a href="[url-linkedin]">
            <img src="icon-linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default UsuariosPages;
