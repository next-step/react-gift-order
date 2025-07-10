import { rankingItemMock } from "@/assets/rankingItemMock";
import { ROUTE_PATH } from "@/components/routes/routePath";
import { getMessageError, getNameError, getPhoneError, getQuantityError } from "@/hooks/utils/errorMessage";
import { useCallback, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export type UseOrderType = {
  sender: string;
  recipients: RecipientType;
  message: string;
  cardId: number;
  productId: number;
};
type RecipientType = {
  name: string;
  phone: string;
  quantity: number;
};
export type OrderErrorType = {
  sender: string | null;
  recipients: { [K in keyof RecipientType]: string | null };
  message: string | null;
};
type InputEventType = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

const defaultValue = {
  sender: "",
  recipients: { name: "", phone: "", quantity: 1 },
  message: "",
  cardId: 904,
  productId: 123,
};
const defaultErrorValue = {
  sender: null,
  recipients: { index: "", name: null, phone: null, quantity: null },
  message: null,
};

const useOrder = (initialValue: UseOrderType = defaultValue) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState<OrderErrorType>(defaultErrorValue);

  const selectCard = useCallback(
    (cardId: number) => {
      setFormData((prevData) => ({ ...prevData, cardId }));
    },
    [setFormData],
  );
  const setProduct = useCallback(
    (productId: number) => {
      setFormData((prevData) => ({ ...prevData, productId }));
    },
    [setFormData],
  );
  const setOrderMessage = useCallback(
    (message: string) => {
      setFormData((prevData) => ({ ...prevData, message }));
    },
    [setFormData],
  );

  const updateRecipient = useCallback(
    (field: keyof RecipientType, value: string | number) => {
      setFormData((prevData) => ({
        ...prevData,
        recipients: {
          ...prevData.recipients,
          [field]: value,
        },
      }));
    },
    [setFormData],
  );

  const checkValidOrder = useCallback(() => {
    const messageError = getMessageError(formData.message);
    const senderError = getNameError(formData.sender);
    const recipientsError = {
      name: getNameError(formData.recipients.name),
      phone: getPhoneError(formData.recipients.phone),
      quantity: getQuantityError(formData.recipients.quantity),
    };
    setErrorMsg({
      message: messageError,
      sender: senderError,
      recipients: recipientsError,
    });

    return (
      messageError === null &&
      senderError === null &&
      recipientsError.name === null &&
      recipientsError.phone === null &&
      recipientsError.quantity === null
    );
  }, [formData, setErrorMsg]);

  const resetErrorMsg = useCallback(
    (name: string) => {
      if (name === "message" || name === "sender") {
        setErrorMsg((prevData) => ({ ...prevData, [name]: "" }));
      } else {
        setErrorMsg((prevData) => ({ ...prevData, recipients: { ...prevData.recipients, [name]: "" } }));
      }
    },
    [setErrorMsg],
  );

  const onChangeOrder = useCallback(
    (event: InputEventType) => {
      const { name, value } = event.target;
      if (name === "message" || name === "sender") {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      } else if (name === "name" || name === "phone") {
        updateRecipient(name, value);
      } else if (name === "quantity") {
        updateRecipient(name, Number(value));
      }
      resetErrorMsg(name);
    },
    [setFormData, updateRecipient, resetErrorMsg],
  );

  const submit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isValidOrder = checkValidOrder();
      const product = rankingItemMock.find((item) => item.id === Number(formData.productId));
      if (isValidOrder && product) {
        alertOrderInfo(formData.message, product.name, formData.recipients.quantity, formData.sender);
        navigate(ROUTE_PATH.HOME);
      }
    },
    [checkValidOrder, formData, navigate],
  );
  return {
    formData,
    onChangeOrder,
    selectCard,
    setOrderMessage,
    setProduct,
    errorMsg,
    submit,
  };
};

export default useOrder;

const alertOrderInfo = (message: string, productName: string, quantity: number, sender: string) => {
  const msg = `
    주문이 완료되었습니다.
    상품명: ${productName}
    구매 수량: ${quantity}
    발신자 이름: ${sender}
    메시지: ${message}
  `;
  alert(msg);
};
