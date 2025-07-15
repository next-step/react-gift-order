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

export type ReceiverForm = FormData["order"][0];

type OrderFormProps = {
  onSubmitCallback?: (data: FormData) => void;
  savedReceiverInfo: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
  onClose: () => void;
};

const OrderForm = ({
  onSubmitCallback,
  savedReceiverInfo,
  onClose,
}: OrderFormProps) => {
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

      <div css={buttonContainerStyle}>
        <button type="button" css={cancelButtonStyle} onClick={onClose}>
          취소
        </button>
        <button type="submit" css={submitButtonStyle}>
          {fields.length}명 완료
        </button>
      </div>
    </form>
  );
};

export default OrderForm;

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

const buttonContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

const cancelButtonStyle = (theme: Theme) => css`
  flex: 1;
  padding: 1rem;
  background-color: ${theme.colors.gray.gray300};
  color: ${theme.colors.gray.gray900};
  font-size: ${theme.typography.body1Bold.size};
  font-weight: ${theme.typography.body1Bold.weight};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const submitButtonStyle = (theme: Theme) => css`
  flex: 1;
  padding: 1rem;
  background-color: ${theme.colors.semantic.kakaoYellow};
  color: ${theme.colors.brown.brown900};
  font-size: ${theme.typography.body1Bold.size};
  font-weight: ${theme.typography.body1Bold.weight};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
