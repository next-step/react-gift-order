import { useContext } from "react";

import { ModalContext } from "@/shared/context/ModalContext";

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal은 ModalProvider 내에서 사용해야 합니다.");
    }
    return context;
};
