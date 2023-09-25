import { NavLink } from "react-router-dom";

import "./Home.css";

function Home() {
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
      <div className="connexion-box">
        <NavLink to="/Login">Connexion</NavLink>
      </div>
      <div className="signup">
        <NavLink to="/SignUp"> Créer mon compte</NavLink>
      </div>
    </div>
  );
}
export default Home;
