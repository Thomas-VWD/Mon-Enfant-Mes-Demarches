import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import "./MyAccount.css";

function MyAccount() {
  const { token } = useAuth();
  return (
    <div className="MyAccountBox">
      <Header />
      {token && (
        <>
          <div className="connexion-box">
            <NavLink to="/Documents">Stockage documents</NavLink>
          </div>
          <div className="connexion-box">
            <NavLink to="/Demarches">Gérer mes démarches</NavLink>
          </div>
          <div className="connexion-box">
            <NavLink to="/Rdv">Mes RDV</NavLink>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default MyAccount;
