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


export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{
                ...state,
                pokemon: action.payload,
                loading: false
            }
        // reducer type for adding pokemon returns current state and sets pokemon values in state to payload
        case ADD_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload],
                loading: false
            }
            case UPDATE_POKEMON:
                return {
                    ...state,
                    pokemon: state.pokemon.map(poke => poke._id === action.payload._id ?
                        action.payload : poke),
                        loading: false
                }
                // reducer type for deleting a pokemon uses the specific id as a payload and checks the values from state to delete
                case DELETE_POKEMON:
                    return {
                        ...state,
                        pokemon: state.pokemon.filter(pokemon => pokemon._id !== action.payload),
                        loading: false
                    }
                    case CLEAR_POKEMON:
                        return{
                            ...state,
                            pokemon: null,
                            filtered: null,
                            error: null,
                            current: null
                        }
                    case SET_CURRENT:
                        return {
                            ...state,
                            current: action.payload
                        }
                        case CLEAR_CURRENT:
                            return {
                                ...state,
                                current: null
                            }
                            case FILTER_POKEMON:
                                return {
                                    ...state,
                                    filtered: state.pokemon.filter(pokemon => {
                                        const regex = new RegExp(`${action.payload}`, 'gi');
                                        return pokemon.name.match(regex) || pokemon.type.match(regex)
                                    })
                                }
                                case CLEAR_FILTER:
                                    return {
                                        ...state,
                                        filtered: null
                                    }
                                    case POKEMON_ERROR:
                                        return{
                                            ...state,
                                            error: action.payload

                                        }
                                    default:
                                        return state;
    }
}