import React, { useEffect, useState } from "react";
import api from "./services/api"

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    api
    .get("pokemon/")
    .then(({data}) => {
      setPokemon(data)
    })
    console.log(pokemon)
  }, [])
  

  return (
    <div className="App">
      
    </div>
  )
}

export default App
