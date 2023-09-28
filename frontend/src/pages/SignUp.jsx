import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import de ToastContainer et toast
import "react-toastify/dist/ReactToastify.css"; // Import des styles de toast
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Signup.css";

function Signup() {
  const [childName, setChildName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const User = {
      childName,
      hashedPassword: password,
      email,
    };
    if (password !== confirmPassword) {
      toast.error(
        "Le mot de passe et la confirmation du mot de passe ne correspondent pas."
      );
      return;
    }
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/User`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(User),
        }
      );
      if (res.ok) {
        setChildName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/Login");
        toast.success("Compte créé avec succès !");
      } else if (res.status === 403) {
        toast.error("Le compte existe déjà.");
      } else {
        toast.error("La création du compte a échoué.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de la création du compte.");
    }
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
      <ToastContainer />
    </div>
  );
}

export default Signup;
