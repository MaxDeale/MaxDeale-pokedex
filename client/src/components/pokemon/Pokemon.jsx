import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PokeItem from "../pokemon/PokeItem";
import Spinner from "./coolSpinner.gif";

const Pokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemon, filtered, getPokemon, loading } = pokemonContext;

  useEffect(() => {
    getPokemon();
    //eslint-disable-next-line
  }, []);

  //  if there are no pokemon in state, and loading is false, then the pokemon will be displayed
  if (pokemon !== null && pokemon.length === 0 && !loading) {
    return <h4>Please add a pokemon</h4>;
  }
  //otherwise the loading spinner will be displayed
  return (
    <Fragment>
      {pokemon !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(poke => (
                <CSSTransition
                  key={pokemon._id}
                  timeout={500}
                  classNames="item"
                >
                  <PokeItem pokemon={poke} />
                </CSSTransition>
              ))
            : pokemon.map(poke => (
                <CSSTransition
                  key={pokemon._id}
                  timeout={500}
                  classNames="item"
                >
                  <PokeItem pokemon={poke} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Pokemon;
