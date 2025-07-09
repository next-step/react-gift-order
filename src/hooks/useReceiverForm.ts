import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  receiverFormSchema,
  type ReceiverFormValues,
} from "@/validations/receiverSchema";

export const useReceiverForm = () => {
  const methods = useForm<ReceiverFormValues>({
    resolver: zodResolver(receiverFormSchema),
    defaultValues: {
      receivers: [],
    },
    mode: "onBlur",
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = methods;

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "receivers",
  });

  return {
    methods,
    control,
    fields,
    append,
    remove,
    handleSubmit,
    errors,
    isValid,
    reset,
    setError,
  };
};
