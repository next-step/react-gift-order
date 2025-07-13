import { useForm, useFieldArray } from "react-hook-form";
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import ReceiverInputSet from "@/components/order/ReceiverInputSet";
import { useEffect } from "react";
export type FormData = {
  order: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
};

type OrderFormProps = {
  onSubmitCallback?: (data: FormData) => void;
  savedReceiverInfo: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
};

const OrderForm = ({ onSubmitCallback, savedReceiverInfo }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      order: [
        {
          receiverName: "",
          phoneNumber: "",
          quantity: 1,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "order",
  });

  const onSubmit = (data: FormData) => {
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  };

  useEffect(() => {
    if (savedReceiverInfo && savedReceiverInfo.length > 0) {
      reset({ order: savedReceiverInfo });
    }
  }, [savedReceiverInfo, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
      <button
        type="button"
        onClick={() => {
          append({ receiverName: "", phoneNumber: "", quantity: 1 });
        }}
        disabled={fields.length >= 10}
        css={buttonStyle}
      >
        추가하기
      </button>
      {fields.map((field, index) => (
        <ReceiverInputSet
          key={field.id}
          index={index}
          fieldCount={fields.length}
          remove={remove}
          register={register}
          errors={errors}
          watch={watch}
        />
      ))}

      <button type="submit">{fields.length}명 완료</button>
    </form>
  );
};

export default OrderForm;

const inputStyle = (theme: Theme) => css`
    display: block;
  width: 100%;
  padding: ${theme.spacing.spacing4};
  font-size: ${theme.typography.body1Regular.size};
  font-weight: ${theme.typography.body1Regular.weight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 8px;
  box-sizing: border-box;
  }
`;

const errorStyle = css`
  color: red;
  margin-bottom: 0.5rem;
  font-size: 10px;
`;

const WrapperStyle = css`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: solid 1px;
`;

const buttonStyle = (theme: Theme) => css`
  background-color: ${theme.colors.gray.gray200};
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${theme.typography.body1Bold.size};
`;

const formStyle = css`
  width: 100%;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const removeButtonStyle = css`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #888;
`;
