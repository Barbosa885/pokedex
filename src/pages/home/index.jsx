import React, { useState, useEffect } from "react";

import * as styled from "./styles";

import api from "../../services/api";

import Card from "../../components/card";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    await api
      .get("/pokemon?limit=150")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      }
    );
  };

  return (
    <styled.Container>
      {pokemon.map((poke) => ( 
        <Card key={poke.name} name={poke.name} />
      ))}
    </styled.Container>
  );
}

export default Home;
