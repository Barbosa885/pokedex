import React, {useState, useEffect} from "react";

import * as styled from "./styles";

import api from "../../services/api";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    api
      .get("/pokedex/2")
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <styled.Container>
      <h1>Home</h1>
    </styled.Container>
  );
}

export default Home;


