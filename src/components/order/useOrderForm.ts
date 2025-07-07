import { useReducer, useMemo } from "react";

export type OrderFormState = {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: number;
  selectedCardId: number | null;
};

type SetFieldAction = {
  type: "SET_FIELD";
  field: keyof OrderFormState;
  value: string | number | null;
};

type ResetAction = { type: "RESET" };

type Action = SetFieldAction | ResetAction;

const initialState: OrderFormState = {
  message: "와~ 축하해요",
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

const validate = (state: OrderFormState) => {
  const isPhoneValid = /^010\d{8}$/.test(state.receiverPhone);

  return {
    message: undefined,
    senderName: state.senderName.trim() === "" ? "보내는 사람 이름을 입력해주세요." : undefined,
    receiverName: state.receiverName.trim() === "" ? "받는 사람 이름을 입력해주세요." : undefined,
    receiverPhone: !isPhoneValid ? "전화번호는 01012345678 형식이어야 해요." : undefined,
    quantity: state.quantity < 1 ? "수량은 1개 이상이어야 해요." : undefined,
  };
};

export const useOrderForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateField = (field: keyof OrderFormState, value: string | number | null) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const resetForm = () => dispatch({ type: "RESET" });

  const errors = useMemo(() => validate(state), [state]);

  const isFormValid = useMemo(
    () => Object.values(errors).every((error) => error === undefined),
    [errors]
  );

  return {
    values: state,
    updateField,
    resetForm,
    errors,
    isFormValid,
  };
};
