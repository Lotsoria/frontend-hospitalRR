import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { login } from "../../services/auth/authService";

function AuthPage() {
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const response = await login(correoElectronico, contraseña);
    if (response) {
      console.log('Login successful', response);
      // Redirect to home page
      window.location.href = '/';
    } else {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o"></span>
              </div>
              <h3 className="text-center mb-4">Sign In</h3>
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control rounded-left"
                    placeholder="Email"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Login
                  </button>
                </div>
                {error && <div className="form-group"><p className="text-danger">{error}</p></div>}
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">
                      Remember Me
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
