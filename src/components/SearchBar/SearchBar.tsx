import React, {
  FunctionComponent,
  useState,
  useEffect,
  Fragment,
  SyntheticEvent
} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Button from '../../styled/Button';
import getData from '../../util/getData';
import StyledInput from '../../styled/StyledInput';
import SearchBarButton from '../../styled/SearchBarButton';
const SearchBar: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(data => {
      if (data) {
        history.push(`/pokemon/${pokemonName}`);
      }
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <StyledInput
        className="input"
        type="text"
        placeholder="Pokemon Name"
        onChange={e => setPokemonName(e.target.value)}
        value={pokemonName}
        required
      />
      <SearchBarButton>Search</SearchBarButton>
    </form>
  );
};

export default withRouter(SearchBar);
