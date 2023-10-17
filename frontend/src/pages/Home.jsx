import { NavLink } from "react-router-dom";
import "./Home.css";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { token, setToken } = useAuth();

  return (
    <div className="home-box">
      <div className="home-title">
        <h1 className="app-name">
          Mon Enfant
          <br />
          Ses Droits
          <br />
          Mes démarches
        </h1>
      </div>
      {token == null ? (
        <>
          <div className="connexion-box">
            <NavLink to="/Login">Connexion</NavLink>
          </div>
          <div className="signup">
            <NavLink to="/SignUp"> Créer mon compte</NavLink>
          </div>
        </>
      ) : (
        <NavLink to="/MyAccount" onClick={() => setToken}>
          Mon Compte
        </NavLink>
      )}
    </div>
  );
}
export default Home;
