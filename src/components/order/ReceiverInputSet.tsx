import {
  type UseFormRegister,
  type FieldErrors,
  type UseFormWatch,
} from "react-hook-form";
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import type { FormData, ReceiverForm } from "@/components/order/OrderForm";

interface ReceiverInputSetProps {
  index: number;
  fieldCount: number;
  remove: (index: number) => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
}

const ReceiverInputSet = ({
  index,
  fieldCount,
  remove,
  register,
  errors,
  watch,
}: ReceiverInputSetProps) => {
  const getError = (field: keyof ReceiverForm) =>
    errors.order?.[index] ? errors.order[index][field]?.message : null;

  return (
    <div css={WrapperStyle}>
      {fieldCount > 1 && (
        <div css={headerStyle}>
          <strong>받는 사람 {index + 1}</strong>
          <button
            css={removeButtonStyle}
            type="button"
            onClick={() => remove(index)}
          >
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
      {getError("receiverName") && (
        <p css={errorStyle}>{getError("receiverName")}</p>
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
            const isDuplicate =
              watch("order")
                .map((order) => order.phoneNumber)
                .filter(
                  (savedPhoneNumber: string) =>
                    savedPhoneNumber === inputPhoneNumber
                ).length > 1;
            return !isDuplicate || "중복된 전화번호가 존재합니다.";
          },
        })}
      />
      {getError("phoneNumber") && (
        <p css={errorStyle}>{getError("phoneNumber")}</p>
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
      {getError("quantity") && <p css={errorStyle}>{getError("quantity")}</p>}
    </div>
  );
};

export default ReceiverInputSet;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const removeButtonStyle = (theme: Theme) => css`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${theme.colors.semantic.text.sub};
`;

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

const errorStyle = (theme: Theme) => css`
  color: ${theme.colors.semantic.status.critical};
  margin-top: ${theme.spacing.spacing1};
  font-size: ${theme.typography.label2Regular.size};
`;

const WrapperStyle = (theme: Theme) => css`
  margin-bottom: ${theme.spacing.spacing5};
  padding: ${theme.spacing.spacing4};
  border-bottom: 1px solid ${theme.colors.semantic.border.default};
`;
