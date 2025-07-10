import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "@emotion/styled";
import ErrorMessage from "./ErrorMessage";
import { validateReceivers } from "./validateReceiver";

type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

export type ReceiverAdderHandle = {
  appendReceiver: () => void;
  submitForm: () => void;
};

type ReceiverAdderProps = {
  initialReceivers: Receiver[];
  onComplete: (updatedReceivers: Receiver[]) => void;
  onClose: () => void;
  onValidCountChange?: (count: number) => void;
};

const ReceiverAdder = forwardRef<ReceiverAdderHandle, ReceiverAdderProps>(
  ({ initialReceivers, onComplete, onClose, onValidCountChange }, ref) => {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
      defaultValues: {
        receivers: initialReceivers.length > 0 ? initialReceivers : [],
      },
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: "receivers",
    });

    useImperativeHandle(ref, () => ({
      appendReceiver: () => {
        if (fields.length < 10) {
          append({ name: "", phone: "", quantity: 1 });
        }
      },
      submitForm: () => {
        handleSubmit((data) => {
          const valid = validateReceivers(data.receivers);
          if (valid.length < data.receivers.length) {
            alert("모든 정보를 정확히 입력해주세요");
            return;
          }
          onComplete(valid);
          onClose();
        })();
      },
    }));

    const receivers = watch("receivers");

    useEffect(() => {
      onValidCountChange?.(fields.length);
    }, [fields.length]);

    return (
      <form
        id="receiver-form"
        onSubmit={handleSubmit((data) => {
          const valid = validateReceivers(data.receivers);
          if (valid.length < data.receivers.length) {
            return;
          }
          onComplete(valid);
          onClose();
        })}
      >
        {fields.map((field, idx) => (
          <div key={field.id}>
            <ReceiverTitleBox>
                <ReceiverTitle>받는 사람 {idx + 1}{" "}</ReceiverTitle>
                <RemoveBtn type="button" onClick={() => remove(idx)}>
                  ✕
                </RemoveBtn>
              </ReceiverTitleBox>
              <ReceiverInputBox>
                <ReceiverInputLabel>이름</ReceiverInputLabel>
                <RecevierInputWrapper>
                                     <ReceiverInput
                     {...register(`receivers.${idx}.name`, { required: true })}
                     placeholder="이름"
                     error={!!errors.receivers?.[idx]?.name}
                   />
                   {errors.receivers?.[idx]?.name && (
                     <ErrorMessage>이름을 입력해주세요.</ErrorMessage>
                   )}
                </RecevierInputWrapper>
              </ReceiverInputBox>
              <ReceiverInputBox>
                <ReceiverInputLabel>전화번호</ReceiverInputLabel>
                <RecevierInputWrapper>
                                     <ReceiverInput
                     {...register(`receivers.${idx}.phone`, {
                       required: "전화번호를 입력해주세요.",
                       pattern: {
                         value: /^010\d{8}$/,
                         message: "올바른 전화번호 형식이 아닙니다.",
                       },
                       validate: (value) => {
                         const phones = receivers.map((r) => r.phone);
                         return phones.filter((p) => p === value).length === 1 || "중복된 전화번호가 있습니다.";
                       },
                     })}
                     placeholder="전화번호"
                     error={!!errors.receivers?.[idx]?.phone}
                   />
                   {errors.receivers?.[idx]?.phone && (
                     <ErrorMessage>{errors.receivers[idx].phone.message}</ErrorMessage>
                   )}
                </RecevierInputWrapper>
              </ReceiverInputBox>
              <ReceiverInputBox>
                <ReceiverInputLabel>수량</ReceiverInputLabel>
                <RecevierInputWrapper>
                                     <ReceiverNumberInput
                     {...register(`receivers.${idx}.quantity`, {
                       required: true,
                       min: 1,
                     })}
                     placeholder="수량"
                     type="number"
                     error={!!errors.receivers?.[idx]?.quantity}
                   />
                   {errors.receivers?.[idx]?.quantity && (
                     <ErrorMessage>구매 수량은 1개 이상이어야 합니다.</ErrorMessage>
                   )}
                </RecevierInputWrapper>
              </ReceiverInputBox>
          </div>
        ))}
      </form>
    );
  }
);

export default ReceiverAdder;

const ReceiverTitleBox = styled.div`  
  display: flex;
    -webkit-box-align: center;
    align-items: center;
`

const ReceiverTitle = styled.p` 
  font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: rgb(42, 48, 56);
    margin: 0px;
    text-align: left;
`

const RemoveBtn = styled.button` 
  font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.1875rem;
    color: rgb(42, 48, 56);
    border:none;
    margin: 0px;
    text-align: left;
    background-color: transparent;
`

const ReceiverInputBox = styled.div`
  display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 8px 0px;
`;

const ReceiverInputLabel = styled.div`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
  min-width: 3.75rem;
`;

const RecevierInputWrapper = styled.div`
  width: 100%;
`;

const ReceiverInput = styled.input< { error?: boolean} >`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  ${({ theme }) => theme.typography.body2Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  min-height: 2.3rem;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const ReceiverNumberInput = styled.input< { error?: boolean} >`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.3rem;
  ${({ theme }) => theme.typography.body2Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};
  appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    opacity: 1;
    margin: 0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;