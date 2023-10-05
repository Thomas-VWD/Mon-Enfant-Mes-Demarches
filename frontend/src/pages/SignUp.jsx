import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"; // Import de ToastContainer et toast
import "react-toastify/dist/ReactToastify.css"; // Import des styles de toast
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Child_name: "",
    email: "",
    password: "",
  });
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form.current));
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3310"}/user`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.errors) {
          setUser(json);
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <div className="signup-box">
      <Header />
      <div className="signup-field-box">
        <div className="signup-title">
          <h2 className="signup">SIGNUP PAGE</h2>
        </div>
        <form ref={form} className="signup-form" onSubmit={handleSubmit}>
          <div className="child-name-box">
            <input
              type="text"
              name="Child_name"
              defaultValue={user.Child_name}
              required
              placeholder="Prénom de l'enfant"
            />
            {user.errors?.Child_name && (
              <small>{user.errors.Child_name.message}</small>
            )}
          </div>
          <div className="email-box">
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              required
              placeholder="EMAIL"
            />
            {user.errors?.email && <small>{user.errors.email.message}</small>}
          </div>
          <div className="password-box">
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              required
              placeholder="Mot de Passe"
            />
            {user.errors?.password && (
              <small>{user.errors.password.message}</small>
            )}
          </div>
          {/*
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
          */}
          <button className="signup-submit" type="submit">
            Sign Up
          </button>
          <div className="signin">
            <NavLink to="/Login">Déjà un compte ? Se connecter</NavLink>
          </div>
        </form>
      </div>
      <Footer />
      {/*
      <ToastContainer />
      */}
    </div>
  );
}

export default Signup;
