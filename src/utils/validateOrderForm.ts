import { isValidHypenPhone, isValidPhone } from '@/utils/phoneValidation.ts';

export const validateOrderForm = ({
                              message, setMessage,
                              sender, setSender,
                              receiverName, setReceiverName,
                              receiverPhone, setReceiverPhone,
                            }: any): boolean => {
  let valid = true;

  if (!message.text) {
    setMessage(prev => ({ ...prev, check: true }));
    valid = false;
  }

  if (!sender.text) {
    setSender(prev => ({ ...prev, check: true }));
    valid = false;
  }

  if (!receiverName.text) {
    setReceiverName(prev => ({ ...prev, check: true }));
    valid = false;
  }

  if (!receiverPhone.text) {
    setReceiverPhone(prev => ({ ...prev, check: true }));
    valid = false;
  } else if (!isValidPhone(receiverPhone.text) && !isValidHypenPhone(receiverPhone.text)) {
    setReceiverPhone(prev => ({ ...prev, checkPhoneForm: true }));
    valid = false;
  }

  return valid;
};