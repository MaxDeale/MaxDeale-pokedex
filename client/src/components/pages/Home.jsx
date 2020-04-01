import React from "react";
import Pokemon from "../pokemon/Pokemon";
import PokeForm from "../pokemon/PokeForm";
import PokeFilter from "../pokemon/PokeFilter";
import AuthContext from "../../context/auth/authContext";
import { useContext, useEffect } from "react";

const Home = () => {


   const authContext = useContext(AuthContext);


   useEffect(()=> {
     authContext.loadUser();
     // eslint-disable-next-line
   }, []); 


  return (
    <div className="grid-2">
      <div>
        <PokeForm />
      </div>
      <div>
        <PokeFilter />
        <Pokemon />
      </div>
     
    </div>
  );
};
export default Home;
