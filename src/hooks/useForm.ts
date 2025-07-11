// import useInput from "@/hooks/useInput";
// import type { Validator } from "@/utils/validators";

// export interface UseFormOptions {
//   cardmessage: {
//     initialValue?: string;
//     validator: Validator;
//   };
//   sendername: {
//     initialValue?: string;
//     validator: Validator;
//   };
//   phone: {
//     initialValue?: string;
//     validator: Validator;
//   };
//   receivername: {
//     initialValue?: string;
//     validator: Validator;
//   };
//   quantity: {
//     initialValue?: string;
//     validator: Validator;
//   };
// }

// const useForm = (config: UseFormOptions) => {
//   const cardmessage = useInput(config.cardmessage);
//   const sendername = useInput(config.sendername);
//   const phone = useInput(config.phone);
//   const receivername = useInput(config.receivername);
//   const quantity = useInput(config.quantity);

//   const values = {
//     cardmessage: cardmessage.value,
//     sendername: sendername.value,
//     phone: phone.value,
//     receivername: receivername.value,
//     quantity: quantity.value,
//   };

//   const errors = {
//     cardmessage: cardmessage.error,
//     sendername: sendername.error,
//     phone: phone.error,
//     receivername: receivername.error,
//     quantity: quantity.error,
//   };
// //모든 폼이 다 isValid=true 여야 true가 됨
//   const isValid =
//     cardmessage.isValid &&
//     sendername.isValid &&
//     phone.isValid &&
//     receivername.isValid &&
//     quantity.isValid;

//   const handleChange = (field: keyof UseFormOptions, value: string) => {
//     if (field === "cardmessage") cardmessage.onChange(value);
//     if (field === "sendername") sendername.onChange(value);
//     if (field === "phone") phone.onChange(value);
//     if (field === "receivername") receivername.onChange(value);
//     if (field === "quantity") quantity.onChange(value);
//   };

//   const handleChange = (field: string, value: string) => {
//     if (field === "cardmessage") cardmessage.onChange(value);
//     if (field === "sendername") sendername.onChange(value);
//     if (field === "phone") phone.onChange(value);
//     if (field === "receivername") receivername.onChange(value);
//     if (field === "quantity") quantity.onChange(value);
//   };

//   const handleBlur = (field:string) => {
//     if (field === "cardmessage") cardmessage.onBlur();
//     if (field === "sendername") sendername.onBlur();
//     if (field === "phone") phone.onBlur();
//     if (field === "receivername") receivername.onBlur();
//     if (field === "quantity") quantity.onBlur();
//   };

//   return {
//     values,
//     errors,
//     isValid,
//     handleChange,
//     handleBlur,
//     reset,
//   };
// };

// export default useForm;
