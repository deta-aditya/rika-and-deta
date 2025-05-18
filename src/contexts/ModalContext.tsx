import { createContext, ReactNode, useContext, useState } from "react";
import { ModalInfo, ModalInfoPayload } from "../models/ModalInfo";

type ModalContextValue = { 
  modalInfo: ModalInfo;
  openModal: (payload: ModalInfoPayload) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export const ModalContextProvider = (props: { children: ReactNode }) => {
  const [modalInfo, setModalInfo] = useState<ModalInfo>(ModalInfo.hidden());

  const openModal = (payload: ModalInfoPayload) => {
    setModalInfo(ModalInfo.displayed(payload))
  }

  const closeModal = () => {
    modalInfo.visit({
      displayed: (payload) => {
        setModalInfo(ModalInfo.hiding(payload))
        setTimeout(() => {
          setModalInfo(ModalInfo.hidden());
        }, 250);
      },
      hidden: () => {},
    });
  }

  return (
    <ModalContext.Provider value={{ modalInfo, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw new Error("useModalContext used outside ModalContextProvider");
  }

  return value;
}
