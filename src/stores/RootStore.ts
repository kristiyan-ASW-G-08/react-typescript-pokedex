import { create } from 'mobx-persist';
import { createContext } from 'react';
import PokedexStore from './PokedexStore';
import ModalStore from './ModalStore';
const hydrate = create({
  storage: localStorage,
  jsonify: true
});
export class RootStore {
  public pokedexStore = new PokedexStore();
  public modalStore = new ModalStore();
  public constructor() {
    // hydrate("id", this.idStore)
    // hydrate("expenses", this.expensesStore)
  }
}

const RootStoreContext = createContext(new RootStore());
export default RootStoreContext;
