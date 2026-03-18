import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "../assets/style/header.css";

function Header(){
  // hook de React Router qui récupère le chemin actuel (location.pathname) / location = contient l’URL actuelle
  const location = useLocation();
  // isCreateEmployeePage = booléen qui vérifie si on est sur la page “Create Employee”
  const isCreateEmployeePage = location.pathname === "/";

  return(
    <nav className="nav-header">
      <div>
        <Link to={"./"}>
          <img src={Logo} alt="logo" />
        </Link>
        <p>With HRnet</p>
      </div>
      <div>
        {
          // Si on est sur Create Employee -> bouton pour aller vers liste des employés
          isCreateEmployeePage ? (
            <Link to="/employees">
              <button>Liste des employés</button>
            </Link>
          ) : (
            // Sinon -> bouton pour Créer un employé
            <Link to="/">
              <button>Créer un employé</button>
            </Link>
          )
        }
      </div>
    </nav>
  )
}
export default Header;