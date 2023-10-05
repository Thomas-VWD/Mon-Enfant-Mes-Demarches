import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Login.css";

function Login() {
  // const [mail, setMail] = useState("");
  // const [hashPassword, setHashPassword] = useState("");
  const [credentials, setCredentials] = useState({
    mail: "marcel",
    hashPassword: "roger",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.type]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(console.warn(credentials));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-box">
      <Header />
      <div className="field-box">
        <div className="login-title">
          <h2 className="login">LOGIN PAGE</h2>
        </div>
        <form onSubmit={(onSubmit, handleSubmit)} className="login-form">
          <div className="email-box">
            <input
              name="mail"
              type="email"
              id="email" // Ajout de l'attribut id correspondant à faire
              value={credentials.mail}
              onChange={onChange}
              required
              placeholder="MAIL"
            />
          </div>
          <div className="password-box">
            <input
              name="hashPassword"
              type="password"
              id="password" // Ajout de l'attribut id correspondant à faire
              value={credentials.hashPassword}
              onChange={onChange}
              required
              placeholder="Mot de Passe"
            />
          </div>
          <div className="forgot">Mot de passe oublié ?</div>
          <button type="submit">Se connecter</button>
          <div className="signup">
            <NavLink to="/SignUp">Créer mon compte</NavLink>
          </div>
        </form>
      </div>
      <Footer />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Login;
