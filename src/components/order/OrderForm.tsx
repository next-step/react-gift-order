import { useForm, useFieldArray } from "react-hook-form";
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export type FormData = {
  order: {
    receiverName: string;
    phoneNumber: string;
    quantity: number;
  }[];
};

type OrderFormProps = {
  onSubmitCallback?: (data: FormData) => void;
};

const OrderForm = ({ onSubmitCallback }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
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
        <div key={field.id} css={WrapperStyle}>
          {fields.length > 1 && (
            <div css={headerStyle}>
              <strong>받는 사람 {index + 1}</strong>
              <button css={removeButtonStyle} onClick={() => remove(index)}>
                ✕
              </button>
            </div>
          )}
          <input
            css={inputStyle}
            placeholder="이름"
            {...register(`order.${index}.receiverName`, {
              required: "받는 사람의 이름은 필수 입력값입니다.",
            })}
          />
          {errors.order?.[index]?.receiverName && (
            <p css={errorStyle}>{errors.order[index].receiverName?.message}</p>
          )}
          <input
            css={inputStyle}
            placeholder="전화번호"
            {...register(`order.${index}.phoneNumber`, {
              required: "전화번호는 필수 입력값입니다",
              pattern: {
                value: /^01[016789]-?\d{3,4}-?\d{4}$/,
                message: "전화번호 형식을 다시 확인하세요",
              },

              validate: (inputPhoneNumber) => {
                const isDuplicate = watch("order")
                  .map((order) => order.phoneNumber)
                  .filter(
                    (savedPhoneNumber) => savedPhoneNumber === inputPhoneNumber
                  );
                return isDuplicate.length > 1
                  ? "중복된 전화번호가 존재합니다."
                  : true;
              },
            })}
          />
          {errors.order?.[index]?.phoneNumber && (
            <p css={errorStyle}>{errors.order[index].phoneNumber?.message}</p>
          )}
          <input
            css={inputStyle}
            placeholder="수량"
            type="number"
            {...register(`order.${index}.quantity`, {
              required: "수량은 필수 입력값입니다.",
              min: {
                value: 1,
                message: "수량은 1 이상이어야 합니다.",
              },
            })}
          />
          {errors.order?.[index]?.quantity && (
            <p css={errorStyle}>{errors.order[index].quantity?.message}</p>
          )}
        </div>
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
