import React from "react";
import styled from "styled-components";

const CardComponent = ({ name, image }) => {
  return (
    <Card>
      <CardImage>
        <img src={image} />
      </CardImage>
      <PokemonName>{name}</PokemonName>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 10px; 
  padding: 10px;
  width: 250px;
  height: 170px;
`;

const PokemonName = styled.h1`
  font-size: 20px;
  text-transform: capitalize;
`;

const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default CardComponent;
