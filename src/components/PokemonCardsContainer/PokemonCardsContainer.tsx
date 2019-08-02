import React, { FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import Pokemon from "interfaces/Pokemon";
import PokemonCard from "components/PokemonCard/PokemonCard";
import StyledPokemonCardsContainer from "styled/StyledPokemonCardsContainer";
interface PokemonCardsContainerProps {
  pokedex: Pokemon[];
}
const PokemonCardsContainer: FunctionComponent<
  PokemonCardsContainerProps
> = observer(({ pokedex }) => {
  return (
    <StyledPokemonCardsContainer>
      {pokedex.map(pokemon => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </StyledPokemonCardsContainer>
  );
});

export default PokemonCardsContainer;
