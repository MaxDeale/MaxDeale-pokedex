import React, { useState, useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokeForm = () => {
  const pokemonContext = useContext(PokemonContext);

  const { addPokemon, current, clearCurrent, updatePokemon } = pokemonContext;

  //  using this hook wich mimics the componentdidmount lifecycle method to set the current pokemon if the value is currently null

  useEffect(() => {
    if (current !== null) {
      setPokemon(current);
    } else {
      setPokemon({
        user: "",
        name: "",
        type: "",
        HP: "",
        attack: "",
        defense: "",
        image: ""
      });
    }
  }, [pokemonContext, current]);

  const [pokemon, setPokemon] = useState({
    user: "",
    name: "",
    type: "",
    HP: "",
    attack: "",
    defense: "",
    image: ""
  });

  const { user, name, type, HP, attack, defense, image } = pokemon;

  //   using whatever is in current state and using form name to get input values
  const onChange = e =>
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });

  // once the form to add a pokemon submits, it will look for this function called addPokemon which comes from the pokemon state
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPokemon(pokemon);
    } else {
      updatePokemon(pokemon);
    }
    pokemonContext.addPokemon(pokemon);
    setPokemon({
      user: "",
      name: "",
      type: "",
      HP: "",
      attack: "",
      defense: "",
      image: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* using conditional rendering to display either add or edit based on wether there is a current pokemon in state or not */}
      <h2 className="text-primary">
        {current ? "Edit Pokemon" : "Add Pokemon"}
      </h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />
      {/* <input type="text" placeholder = "type" name = "type" value = {type} onChange = {onChange}/> */}
      <input
        type="text"
        placeholder="HP"
        name="HP"
        value={HP}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="attack"
        name="attack"
        value={attack}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="defense"
        name="defense"
        value={defense}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="image"
        name="image"
        value={image}
        onChange={onChange}
      /> <p id = "info">copy image addresses by right clicking these images, also get your stats from here:) => <a href = "https://pokemondb.net/pokedex/all">POKEDEX</a> </p>
      <h5>Pokemon Type:</h5>
      <input
        type="radio"
        name="type"
        value="normal"
        checked={type === "normal"}
        onChange={onChange}
      />{" "}
      Normal
      <input
        type="radio"
        name="type"
        value="poison"
        checked={type === "poison"}
        onChange={onChange}
      />{" "}
      Poison
      <input
        type="radio"
        name="type"
        value="psychic"
        checked={type === "psychic"}
        onChange={onChange}
      />{" "}
      Psychic
      <input
        type="radio"
        name="type"
        value="grass"
        checked={type === "grass"}
        onChange={onChange}
      />{" "}
      Grass
      <input
        type="radio"
        name="type"
        value="ground"
        checked={type === "ground"}
        onChange={onChange}
      />{" "}
      Ground
      <input
        type="radio"
        name="type"
        value="fire"
        checked={type === "fire"}
        onChange={onChange}
      />{" "}
      Fire
      <input
        type="radio"
        name="type"
        value="rock"
        checked={type === "rock"}
        onChange={onChange}
      />{" "}
      Rock
      <input
        type="radio"
        name="type"
        value="dragon"
        checked={type === "dragon"}
        onChange={onChange}
      />{" "}
      Dragon
      <input
        type="radio"
        name="type"
        value="water"
        checked={type === "water"}
        onChange={onChange}
      />{" "}
      Water
      <input
        type="radio"
        name="type"
        value="bug"
        checked={type === "bug"}
        onChange={onChange}
      />{" "}
      Bug
      <input
        type="radio"
        name="type"
        value="dark"
        checked={type === "dark"}
        onChange={onChange}
      />{" "}
      Dark
      <input
        type="radio"
        name="type"
        value="fighting"
        checked={type === "fighting"}
        onChange={onChange}
      />{" "}
      Fighting
      <input
        type="radio"
        name="type"
        value="ghost"
        checked={type === "ghost"}
        onChange={onChange}
      />{" "}
      Ghost
      <input
        type="radio"
        name="type"
        value="steel"
        checked={type === "steel"}
        onChange={onChange}
      />{" "}
      Steel
      <input
        type="radio"
        name="type"
        value="flying"
        checked={type === "flying"}
        onChange={onChange}
      />{" "}
      Flying
      <input
        type="radio"
        name="type"
        value="electric"
        checked={type === "electric"}
        onChange={onChange}
      />{" "}
      Electric
      <input
        type="radio"
        name="type"
        value="fairy"
        checked={type === "fairy"}
        onChange={onChange}
      />{" "}
      Fairy
      <div>
        <input
          type="submit"
          value={current ? "Update Pokemon" : "Add Pokemon"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default PokeForm;
