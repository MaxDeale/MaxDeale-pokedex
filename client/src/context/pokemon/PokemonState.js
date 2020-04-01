import React, {useReducer} from "react";
import PokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import axios from "axios";
import {
    ADD_POKEMON,
    DELETE_POKEMON,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_POKEMON,
    FILTER_POKEMON,
    CLEAR_FILTER,
    POKEMON_ERROR,
    GET_POKEMON,
    CLEAR_POKEMON
} from "../types";


const PokemonState = props => {
    const initialState = {
        pokemon: [            {
            id: 1,
            user: "Max",
            name: "Pikachu",
            type: "Electric",
            HP: 35,
            attack: 45,
            defense: 35,
            image: "https://img.pokemondb.net/sprites/sun-moon/icon/pikachu.png"

        }, {
            id: 2,
            user: "Max",
            name: "Bulbasaur",
            type: "Grass",
            HP: 45,
            attack: 49,
            defense: 49,
            image: "https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png"
        }, {
            id: 3,
            user: "Max",
            name: "Charizard",
            type: "Fire",
            HP: 78,
            attack: 84,
            defense: 78,
            image: "https://img.pokemondb.net/sprites/sun-moon/icon/charizard.png"
        }],
        current: null,
        filtered: null,
        error: null
    }

    const [state, dispatch] = useReducer(pokemonReducer, initialState);


// GET POKEMON
const getPokemon = async() => {
 
    try {
          
         
        const res = await axios.get("/api/pokemon");

        dispatch({type: GET_POKEMON, payload: res.data});
        
    } catch (err) {

        dispatch({type: POKEMON_ERROR})
    }

}




    // ADD POKEMON
    const addPokemon = async pokemon => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {

            const res = await axios.post("/api/pokemon", pokemon, config);

            dispatch({type: ADD_POKEMON, payload: res.data});
            
        } catch (err) {

            dispatch({type: POKEMON_ERROR})
        }

    }
    // DELETE POKEMON
    const deletePokemon = async id => {
        try {

         await axios.delete(`/api/pokemon/${id}`);

            dispatch({type: DELETE_POKEMON, payload: id});
            
        } catch (err) {

            dispatch({type: POKEMON_ERROR})
        }
     
    }

        // UPDATE POKEMON
        const updatePokemon = async pokemon => {
    
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
    
                const res = await axios.put(`/api/pokemon/${pokemon._id}`, pokemon, config);
    
            
                dispatch({type: UPDATE_POKEMON, payload: res.data});
                
            } catch (err) {
    
                dispatch({type: POKEMON_ERROR})
            }


        }

    // CLEAR POKEMON
    const clearPokemon = () => {
        dispatch({type: CLEAR_POKEMON});
    }

    // SET CURRENT POKEMON
    const setCurrent = pokemon => {
        dispatch({type: SET_CURRENT, payload: pokemon});
    }
    // CLEAR CURRENT POKEMON
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    }

    // FILTER POKEMON
    const filterPokemon = text => {
        dispatch({type: FILTER_POKEMON, payload: text});
    }
    // CLEAR FILTER
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER});
    }
    return (<PokemonContext.Provider value={
        {
            pokemon: state.pokemon,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            addPokemon,
            deletePokemon,
            setCurrent,
            clearCurrent,
            updatePokemon,
            filterPokemon,
            clearFilter,
            getPokemon,
            clearPokemon
        }
    }> {
        props.children
    } </PokemonContext.Provider>);
}

export default PokemonState;
