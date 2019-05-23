import { observable, action } from 'mobx';
import { SetStateAction, Dispatch } from 'react';
import Pokemon from '../interfaces/Pokemon';
import { persist, create } from 'mobx-persist';
import getData from '../util/getData';
class PokedexStore {
  @observable pokedexPage: Pokemon[] = [];
  @observable currentUrl: string = `https://pokeapi.co/api/v2/pokemon`;
  @observable nextUrl: string = '';
  @observable previousUrl: string = '';
  @action getCurrentPage(
    setPokedex: Dispatch<SetStateAction<Pokemon[]>>
  ): void {
    getData(this.currentUrl).then(data => {
      this.pokedexPage = [...data.results];
      this.nextUrl = data.next ? data.next : '';
      this.previousUrl = data.previous ? data.previous : '';
      setPokedex(this.pokedexPage);
    });
  }

  @action incrementPage(): void {
    if (this.nextUrl !== '') {
      this.currentUrl = this.nextUrl;
    }
  }
  @action decrementPage(): void {
    if (this.previousUrl !== '') {
      this.currentUrl = this.previousUrl;
    }
  }
}

export default PokedexStore;
