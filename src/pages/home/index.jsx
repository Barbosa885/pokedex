import React, {useState, useEffect} from "react";

import * as styled from "./styles";

import api from "../../services/api";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    api
      .get("/pokemon?limit=151")
      .then((response) => {
        setPokemon(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        error;
      });
  }, []);


  return (
    <styled.Container>
      {pokemon.map((pokemon) => (
        <styled.Card key={pokemon.name}>
          {pokemon.name}
        </styled.Card>
      ))}
    </styled.Container>
  );
}

export default Home;


