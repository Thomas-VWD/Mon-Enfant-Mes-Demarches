import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Signup.css";

function Signup() {
  const [childName, setChildName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajout de la logique d'inscription à faire
  };

  return (
    <div className="signup-box">
      <Header />
      <div className="signup-field-box">
        <div className="signup-title">
          <h2 className="signup">SIGNUP PAGE</h2>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="child-name-box">
            <input
              type="text"
              id="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              required
              placeholder="Prénom de l'enfant"
            />
          </div>
          <div className="email-box">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="MAIL"
            />
          </div>
          <div className="password-box">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mot de Passe"
            />
          </div>
          <div className="confirm-password-box">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirmation MDP"
            />
          </div>
          <button className="signup-submit" type="submit">
            Sign Up
          </button>
          <div className="signin">
            <NavLink to="/Login">Déjà un compte ? Se connecter</NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
