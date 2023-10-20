import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../contexts/AuthContext";
import "./MyProcedures.css";

function MyProcedures() {
  const { token, setToken } = useAuth();

  return (
    <div className="myProcedure-box">
      <Header />
      <div>
        <button type="button" onClick={() => setToken(null)}>
          <NavLink to="/Login">Deconnexion</NavLink>
        </button>
      </div>
      <div className="field-box">
        <div className="login-title">
          <h2 className="renewall">Mes Renouvellements</h2>
        </div>
        {token && (
          <form className="renewall">
            <div>
              Dossier MDPH
              <input type="date" name="mdph" />
            </div>
            <div>
              Dossier IME
              <input type="date" name="ime" />
            </div>
            <div>
              Dossier SESSAD
              <input type="date" name="sessad" />
            </div>
            <div>
              Dossier AESH
              <input type="date" name="aesh" />
            </div>
            <div>
              Dossier ALD
              <input type="date" name="ald" />
            </div>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default MyProcedures;
