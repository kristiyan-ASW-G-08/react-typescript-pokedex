import { create } from "mobx-persist";
import { createContext } from "react";
import PokedexStore from "stores/PokedexStore";
import ModalStore from "stores/ModalStore";
export class RootStore {
  pokedexStore = new PokedexStore();
  modalStore = new ModalStore();
  constructor() {}
}

const RootStoreContext = createContext(new RootStore());
export default RootStoreContext;
