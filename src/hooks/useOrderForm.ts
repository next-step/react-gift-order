import { useState } from 'react';

export const useOrderForm = () => {
  const [isFilled, setIsFilled] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
};
