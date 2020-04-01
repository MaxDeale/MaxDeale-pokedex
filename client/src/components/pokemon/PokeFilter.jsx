import React, { useContext, useRef, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokeFilter = () => {
  const pokemonContext = useContext(PokemonContext);
  const text = useRef("");

  const { filterPokemon, clearFilter, filtered } = pokemonContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterPokemon(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form action="">
      <input
        id="filter"
        type="text"
        ref={text}
        placeholder="filter pokemon..."
        onChange={onChange}
      />
    </form>
  );
};

export default PokeFilter;
