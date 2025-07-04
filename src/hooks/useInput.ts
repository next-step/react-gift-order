import type { Validator } from '@/utils/validators';
import { useState } from "react";

interface UseInputReturn {
  value: string;
  onChange: (value:string) => void;
  onBlur: () => void;
  isValid: boolean;
  error:string|null
  reset:()=>void;
}

interface UseInputOptions {
  initialValue?: string;
  validator?: Validator;
}

const useInput = (options:UseInputOptions={}) :UseInputReturn=> {
 const  { initialValue="",validator } = options
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const validationResult =  validator?validator(value):null;
  const isValid =validationResult===null; 
  const error = isTouched ? validationResult: null;
  const handleChange = (input: string) => {
    setValue(input);
  };
  const handleBlur = () => {
    setIsTouched(true);
  };
  const reset =()=>{
    setValue("")
    setIsTouched(false)
  }
  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    isValid: isValid,
    error,
    reset,
  };
};
export default useInput;
