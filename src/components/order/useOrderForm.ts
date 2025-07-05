import { useReducer } from "react";

type OrderFormState = {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  selectedCardId: number | null;
};

type Action =
  | { type: "SET_FIELD"; field: keyof OrderFormState; value: string | number | null }
  | { type: "RESET" };

const initialState: OrderFormState = {
  message: "",
  senderName: "",
  receiverName: "",
  receiverPhone: "",
  quantity: 1,
  selectedCardId: null,
};

const reducer = (state: OrderFormState, action: Action): OrderFormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const useOrderForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setField = (field: keyof OrderFormState, value: string | number | null) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const resetForm = () => dispatch({ type: "RESET" });

  const isPhoneValid = /^010\d{8}$/.test(state.receiverPhone);
  const isFormValid =
    state.message.trim() !== "" &&
    state.senderName.trim() !== "" &&
    state.receiverName.trim() !== "" &&
    isPhoneValid &&
    state.quantity >= 1;

  const errors = {
    message: state.message.trim() === "" ? "메시지를 입력해주세요." : null,
    senderName: state.senderName.trim() === "" ? "보내는 사람 이름을 입력해주세요." : null,
    receiverName: state.receiverName.trim() === "" ? "받는 사람 이름을 입력해주세요." : null,
    receiverPhone: !isPhoneValid ? "전화번호는 01012345678 형식이어야 해요." : null,
    quantity: state.quantity < 1 ? "수량은 1개 이상이어야 해요." : null,
  };

  return {
    form: state,
    setField,
    resetForm,
    isFormValid,
    errors,
  };
};
