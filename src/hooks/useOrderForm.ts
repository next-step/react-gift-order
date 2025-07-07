import { useState } from 'react';

const useOrdrForm = (initialValue: string | number = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};

export default useOrdrForm;
