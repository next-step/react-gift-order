import { createContext, useCallback, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const ModalContext = createContext<{
    isOpen: boolean;

    open: (modal: React.ReactNode) => void;
    close: () => void;
} | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
    const [modal, setModal] = useState<React.ReactNode>(null);

    const open = useCallback((modal: React.ReactNode) => {
        setModal(modal);
    }, []);

    const close = useCallback(() => {
        setModal(null);
    }, []);

    const modalRoot = document.getElementById("modal-root");

    return (
        <ModalContext.Provider
            value={{
                isOpen: Boolean(modal),
                open,
                close,
            }}
        >
            {children}
            {modal && modalRoot && createPortal(modal, modalRoot)}
        </ModalContext.Provider>
    );
};
