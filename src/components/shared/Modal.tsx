import styled from "@emotion/styled";
import type { StateHook } from "@src/hooks/stateHookType";
import { useEffect } from "react";

type ModalProps = {
  open: StateHook<boolean>;
  children?: React.ReactNode;
};

function Modal({ open, children }: ModalProps) {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      open.setValue(false);
    }
  };

  useEffect(() => {
    if (open.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open.value]);

  return (
    open.value && <ModalWrapper onClick={closeModal}>{children}</ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;
