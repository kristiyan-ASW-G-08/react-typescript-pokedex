import {observable,action } from 'mobx';
import {SetStateAction,Dispatch} from 'react'
import Pokemon from '../interfaces/Pokemon'
import {persist,create} from 'mobx-persist';
import getData from '../util/getData'
 class PokedexStore{
     @observable pokedexPage : Pokemon[] = []
     @observable currentUrl : string =  `https://pokeapi.co/api/v2/pokemon`
     @observable nextUrl : string = ''
     @observable previousUrl : string = ''
     @action   incrementPage(setPokedex:Dispatch<SetStateAction<Pokemon[]>>) : void{
        getData(this.currentUrl)
        .then(data => {
            this.pokedexPage = [...data.results]
            setPokedex(this.pokedexPage)
        })
    }
    @action decrementPage() : void{
        console.log(this.currentUrl)
    }
    }


export default PokedexStore