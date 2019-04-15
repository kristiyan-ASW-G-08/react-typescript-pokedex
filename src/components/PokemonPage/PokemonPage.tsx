import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonFull from '../../interfaces/PokemonFull';
import StyledPokemonPage from '../../styled/StyledPokemonPage';
import Loader from '../../styled/Loader';
import getData from '../../util/getData';
import Stat from '../../styled/Stat'
import { withRouter, RouteComponentProps } from 'react-router-dom';
interface MatchProps {
  pokemonName: string;
}
interface PokemonPageProps extends RouteComponentProps<MatchProps> {}
const PokemonPage: FunctionComponent<PokemonPageProps> = ({ match }) => {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const { pokemonName } = match.params;
  useEffect(() => {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    getData(url).then(data => {
      console.log(data);
      setPokemon(data);
    });
  }, []);
  return (
    <>
      {pokemon ? (
        <StyledPokemonPage>
          <div className="container">
            <img
              className="main-icon"
              src={pokemon.sprites.front_default}
              alt={pokemonName}
            />
            <Stat lighter={true}>#{pokemon.id}</Stat>
            <h1 className="name">{pokemonName}</h1>
            <Stat>Weight :{pokemon.weight}</Stat>
            <Stat>Height :{pokemon.height}</Stat>
          </div>
        </StyledPokemonPage>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default withRouter(PokemonPage);
