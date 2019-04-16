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
const SearchBar: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(data => {
        if(data){
              history.push(`/pokemon/${pokemonName}`);
        }
    })

  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        placeholder="Choose how many questions you want to answer!"
        onChange={e => setPokemonName(e.target.value)}
        value={pokemonName}
        required
      />
      <Button>Search</Button>
    </form>
  );
};

export default withRouter(SearchBar);
