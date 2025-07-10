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
    formState: { isValid },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  return {
    methods,
    fields,
    append,
    remove,
    handleSubmit,
    isValid,
  };
};
