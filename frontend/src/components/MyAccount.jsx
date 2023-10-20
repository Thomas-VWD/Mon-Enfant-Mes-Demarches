import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import "./MyAccount.css";

function MyAccount() {
  const { token, setToken } = useAuth();
  return (
    <div className="MyAccountBox">
      <Header />
      <div>
        <button type="button" onClick={() => setToken(null)}>
          <NavLink to="/Login">Deconnexion</NavLink>
        </button>
      </div>
      {token && (
        <>
          <div className="connexion-box">
            <NavLink to="/Documents">Stockage documents</NavLink>
          </div>
          <div className="connexion-box">
            <NavLink to="/MyProcedures">Gérer mes démarches</NavLink>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default MyAccount;
