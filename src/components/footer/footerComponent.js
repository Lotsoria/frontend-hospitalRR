import React from "react";
import "./css/styles.css";

function FooterComponent() {
  return (
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
  );
}

export default FooterComponent;
