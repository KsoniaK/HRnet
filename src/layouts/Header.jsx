import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "../assets/style/header.css";

function Header(){
  const location = useLocation();
  const isCreateEmployeePage = location.pathname === "/";

  return(
    <nav className="nav-header">
      <Link to={"./"}>
        <img src={Logo} alt="logo" />
      </Link>
      {
        isCreateEmployeePage ? (
          <Link to="/employees">
            <button>Liste des employés</button>
          </Link>
        ) : (
          <Link to="/">
            <button>Créer un employé</button>
          </Link>
        )
      }
    </nav>
  )
}
export default Header;