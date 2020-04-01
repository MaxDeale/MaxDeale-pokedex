import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pokeball from "../../pokeball.png";
import AuthContext from "../../context/auth/authContext";
import PokemonContext from "../../context/pokemon/pokemonContext";

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const pokemonContext = useContext(PokemonContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearPokemon } = pokemonContext;

  const onLogout = () => {
    logout();
    clearPokemon();
  };

  const authLinks = (
    <Fragment>
      <p id="helloText">Hello {user && user.name}</p>
      <li>
        <a id="logout" onClick={onLogout} href="#!">
          <i id="logoutIcon" className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-danger">
      <h1 id="title">
        <img src={pokeball} id="pokeball" alt="noballs" />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavBar.defaultProps = {
  title: "Pokedex",
  icon: "fas fa-adjust"
};

export default NavBar;
