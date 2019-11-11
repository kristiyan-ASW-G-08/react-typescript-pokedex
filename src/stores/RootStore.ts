import { create } from "mobx-persist";
import { createContext } from "react";
import ModalStore from "stores/ModalStore";
export class RootStore {
  modalStore = new ModalStore();
}

const RootStoreContext = createContext(new RootStore());
export default RootStoreContext;
