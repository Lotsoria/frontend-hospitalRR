import React, { useState, useEffect } from "react";
import "./css/styles.css";
import enfocar from "./img/enfocar.png";
import eficiencia from "./img/rendimiento.png";
import seguridad from "./img/apoyo-tecnico.png";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
function HomePage() {
  const [loginOn, setLoginOn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('n1') !== null) {
      setLoginOn(true);
      console.log('Ya hay un usuario logueado');
    } else {
      setLoginOn(false);
      console.log('No hay un usuario logueado');
    }
  }, []);

  return (
    <div>
      <HeaderComponent />
      <section id="hero">
        <h1>Bienvenido al Sistema de Gestión de Muestras</h1>
        <p>Facilita el registro y seguimiento de pruebas médicas</p>
        {!loginOn && <a href="/login" className="cta-button">Iniciar Sesión</a>}
      </section>

      <section id="beneficios">
        <h2>¿Por qué usar nuestro sistema?</h2>
        <div className="beneficios-list">
          <div className="beneficio">
            <img src={enfocar} alt="Precisión" />
            <h3>Precisión</h3>
            <p>Minimiza errores en el registro de datos.</p>
          </div>
          <div className="beneficio">
            <img src={eficiencia} alt="Eficiencia" />
            <h3>Eficiencia</h3>
            <p>Agiliza el proceso de gestión de muestras.</p>
          </div>
          <div className="beneficio">
            <img src={seguridad} alt="Seguridad" />
            <h3>Seguridad</h3>
            <p>Protege la información de los pacientes.</p>
          </div>
          {/* <div className="beneficio">
            <img src={soporte} alt="Soporte" />
            <h3>Soporte</h3>
            <p>Asistencia técnica disponible 24/7.</p>
          </div> */}
        </div>
      </section>

      <section id="features">
        <h2>Características de la Aplicación</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Registro Rápido</h3>
            <p>Permite registrar muestras de manera eficiente.</p>
          </div>
          <div className="feature">
            <h3>Seguimiento en Tiempo Real</h3>
            <p>Monitorea el estado de las pruebas en tiempo real.</p>
          </div>
          <div className="feature">
            <h3>Informes Detallados</h3>
            <p>Genera informes detallados y personalizados.</p>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
