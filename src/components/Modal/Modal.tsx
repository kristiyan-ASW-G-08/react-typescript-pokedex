import React, { FunctionComponent, useContext, useState } from 'react';
import StyledNavbar from '../../styled/StyledNavbar';
import { observer } from 'mobx-react-lite';
import RootStoreContext from '../../stores/RootStore';
const Modal: FunctionComponent = observer(() => {
  const { modalStore } = useContext(RootStoreContext);
  return (
    <>
      {modalStore.modalState.on ? <div>{modalStore.modalState.text}</div> : ''}
    </>
  );
});

export default Modal;
