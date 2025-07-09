import { useForm, useFieldArray } from 'react-hook-form'

export interface Recipient {
  name: string
  phone: string
  qty: number
}
export interface OrderFormValues {
  message: string
  sender: string
  recipients: Recipient[]
}
export default function useOrderForm(initialMessage: string) {
  const methods = useForm<OrderFormValues>({
    mode: 'onBlur',
    defaultValues: {
      message: initialMessage,
      sender: '',
      recipients: [],
    },
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,

  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  })
  return {
    register,
    handleSubmit,
    setValue,
    errors,
    isValid,
    fields,
    append,
    remove,
    watch,
  }
}