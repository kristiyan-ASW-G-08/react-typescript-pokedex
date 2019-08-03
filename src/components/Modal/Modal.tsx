import React, { FunctionComponent, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import RootStoreContext from "stores/RootStore";
import StyledModal from "styled/StyledModal";
const Modal: FunctionComponent = observer(() => {
  const { modalStore } = useContext(RootStoreContext);
  useEffect(() => {
    setTimeout(() => {
      modalStore.resetModalState();
    }, 2000);
  });
  return (
    <>
      {modalStore.modalState.on ? (
        <StyledModal>{modalStore.modalState.text}</StyledModal>
      ) : (
        ""
      )}
    </>
  );
});

export default Modal;
