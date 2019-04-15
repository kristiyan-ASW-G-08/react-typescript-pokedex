import { create } from "mobx-persist";
import { createContext } from "react";
import PokedexStore  from "./PokedexStore";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});
export class RootStore {
  pokedexStore = new PokedexStore();
  constructor() {
    // console.log('nani')
    // hydrate("id", this.idStore)
    // hydrate("expenses", this.expensesStore)
  }
}

 const RootStoreContext = createContext(new RootStore());
 export default RootStoreContext