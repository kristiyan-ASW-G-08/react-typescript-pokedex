import { createContext } from "react";
import { observable, action } from "mobx";
import ModalState from "interfaces/ModalState";
import defaultModalState from "stores//defaultModalState";
class ModalStore {
  @observable modalState: ModalState = {
    on: false,
    text: ""
  };
  @action setModalState(text: string): void {
    this.modalState.text = text;
    this.modalState.on = true;
  }
  @action resetModalState(): void {
    this.modalState = defaultModalState;
  }
}

const ModalStoreContext = createContext(new ModalStore());
export { ModalStoreContext };
export default ModalStore;
