import React,{FunctionComponent} from 'react';
import {observer} from 'mobx-react-lite'
import Pokemon from '../../interfaces/Pokemon'
import StyledPokemonCard from '../../styled/StyledPokemonCard'
import {Link} from 'react-router-dom'
import getId from '../../util/getId'
interface PokemonCardProps extends Pokemon {
    key:string
}
const PokemonCard: FunctionComponent<PokemonCardProps> = observer(({name,url}) => {
  const id = getId(url)
  console.log(id)
    return (
      <StyledPokemonCard>
          <Link to={`/pokemon/${name}`}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
          <h1>{name}</h1>
          </Link>
      </StyledPokemonCard>
   
  )
})

export default PokemonCard