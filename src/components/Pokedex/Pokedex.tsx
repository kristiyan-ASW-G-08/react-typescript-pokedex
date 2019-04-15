import React, { FunctionComponent, useEffect, useContext,useState,Suspense,lazy} from 'react';
import RootStoreContext from '../../stores/RootStore';
import { observer } from 'mobx-react-lite';
import Pokemon from '../../interfaces/Pokemon'
import Loader from '../../styled/Loader'
import ButtonsContainer from '../../styled/ButtonsContainer'
import Button from '../../styled/Button'
const PokemonCardsContainer = lazy(() => import('../PokemonCardsContainer/PokemonCardsContainer'));
const Pokedex: FunctionComponent = observer(() => {
  const { pokedexStore } = useContext(RootStoreContext);
 const [pokedex,setPokedex] = useState<Pokemon[]>([])
  useEffect(() => {
      pokedexStore.incrementPage(setPokedex);
  },[pokedexStore.pokedexPage.length === 0])
  return (
    <>
    {pokedex && pokedex.length > 0 ? <Suspense fallback={<Loader/>}><PokemonCardsContainer pokedex={pokedex} /></Suspense> : <Loader/>}
    <ButtonsContainer>

    </ButtonsContainer>
    </>
  )
});

export default Pokedex;
