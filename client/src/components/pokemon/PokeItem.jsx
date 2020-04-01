import React, { useContext } from "react";
import PropTypes from "prop-types";
import PokemonContext from "../../context/pokemon/pokemonContext";
import AuthContext from "../../context/auth/authContext";

const PokeItem = ({ pokemon }) => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);
  const { deletePokemon, setCurrent, clearCurrent } = pokemonContext;
  const { _id, user, name, type, HP, attack, defense, image, date } = pokemon;

  const onDelete = () => {
    deletePokemon(_id);
    clearCurrent();
  };


  return (
    <div className=" card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span style={{ float: "right" }} className=" badge badge-light">
          {type}
        </span>
      </h3>
      <img style={{ width: "60px", height: "50px" }} src={image} alt="" />
      <ul className="list">
        {user && (
          <li id = "user">
            <i id="userIcon" className="fas fa-user"></i>
            {user}{" "}
          </li>
        )}
        {HP && (
          <li>
            <i id="lifeIcon" className="fas fa-heart"></i>
            {HP}{" "}
          </li>
        )}{" "}
        {attack && (
          <li>
            <i id="attackIcon" className="fas fa-marker"></i>
            {attack}{" "}
          </li>
        )}
        {defense && (
          <li>
            <i id="defenseIcon" className="fas fa-shield-alt"></i>
            {defense}{" "}
          </li>
        )}{" "}
      </ul>

      <p>
        <button
          onClick={() => setCurrent(pokemon)}
          className="btn btn-dark btn-sm"
        >
          Edit
        </button>
        <button onClick={onDelete} id = "delete" className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  );
};

PokeItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokeItem;
