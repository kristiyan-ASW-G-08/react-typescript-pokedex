import React, { FunctionComponent, useState, useEffect, Fragment } from "react";
import PokemonMove from "../../interfaces/PokemonMove";
import StyledContainer from "../../styled/StyledContainer";
import Button from "../../styled/Button";
interface MovesContainerProps {
  moves: PokemonMove[];
  type: string;
}
const MovesContainer: FunctionComponent<MovesContainerProps> = ({
  moves,
  type
}) => {
  console.log(moves);
  const getRandomNum = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100000000);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };
  return (
    <StyledContainer>
      {moves.map(move => (
        <Button key={`${move.move.url}${getRandomNum()}`} pokemonType={type}>
          {move.move.name}
        </Button>
      ))}
    </StyledContainer>
  );
};

export default MovesContainer;
