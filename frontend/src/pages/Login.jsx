import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();

    const User = {
      email,
      password,
    };
    if (password!)
  
  };

  return (
    <div className="login-box">
      <Header />
      <div className="field-box">
        <div className="login-title">
          <h2 className="login">LOGIN PAGE</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="email-box">
            <input
              type="email"
              id="email" // Ajout de l'attribut id correspondant à faire
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="MAIL"
            />
          </div>
          <div className="password-box">
            <input
              type="password"
              id="password" // Ajout de l'attribut id correspondant à faire
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      <ToastContainer />
    </div>
  );
}

export default Login;
