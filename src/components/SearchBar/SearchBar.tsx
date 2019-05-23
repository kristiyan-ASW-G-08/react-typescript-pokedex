import React, {
  FunctionComponent,
  useState,
  useEffect,
  Fragment,
  SyntheticEvent,
  useContext
} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Button from '../../styled/Button';
import { observer } from 'mobx-react-lite';
import getData from '../../util/getData';
import StyledInput from '../../styled/StyledInput';
import SearchBarButton from '../../styled/SearchBarButton';
import RootStoreContext from '../../stores/RootStore';
const SearchBar: FunctionComponent<RouteComponentProps> = observer(
  ({ history }) => {
    const [pokemonName, setPokemonName] = useState<string>('');
    const { modalStore } = useContext(RootStoreContext);
    const submitHandler = (e: SyntheticEvent) => {
      e.preventDefault();
      getData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(data => {
          console.log(data);
          if (data) {
            history.push(`/pokemon/${pokemonName}`);
          }
        })
        .catch(err => {
          console.log(err);
          modalStore.setModalState(`${pokemonName} wasn't found!`);
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
  }
);

export default withRouter(SearchBar);
