import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Child_name: "",
    password: "",
  });
  const form = useRef(null);
  const { setToken } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form.current));
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3310"}/login`,
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
          setToken(json.token);
          navigate("/MyAccount");
        }
      });
  };

  return (
    <div className="login-box">
      <Header />
      <div className="field-box">
        <div className="login-title">
          <h2 className="login">LOGIN PAGE</h2>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="login-form">
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
          <div className="forgot">Mot de passe oublié ?</div>
          <button type="submit">Se connecter</button>
          <div className="signup">
            <NavLink to="/SignUp">Créer mon compte</NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
