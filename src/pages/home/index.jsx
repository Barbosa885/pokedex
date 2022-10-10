import React, { useState, useEffect } from "react";

import * as styled from "./styles";

import api from "../../services/api";
import axios from "axios";

import Card from "../../components/card";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    var endpoints = [];
    for (var id = 1; id <= 150; id++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
    var response = axios.all(endpoints.map((endpoint) => api.get(endpoint))).then((res) => setPokemon(res)).catch((err) => console.log("Error" + err));
    return await response;
  };

  return (
    <styled.Container>
      {pokemon.map((poke) => (
        <Card key={poke.name} name={poke.data.name} image={poke.data.sprites.front_default} />
      ))}
    </styled.Container>
  );
}

export default Home;
