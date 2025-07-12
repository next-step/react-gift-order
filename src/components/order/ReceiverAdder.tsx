import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "@emotion/styled";
import { validateReceivers } from "./validateReceiver";
import ErrorField from "./ErrorField";
import { zodResolver } from "@hookform/resolvers/zod";
import { receiverSchema } from "./receiverShema";

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
    const {
      control,
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(receiverSchema),
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
          onComplete(data.receivers);
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
              <ReceiverTitle>받는 사람 {idx + 1} </ReceiverTitle>
              <RemoveBtn type="button" onClick={() => remove(idx)}>
                ✕
              </RemoveBtn>
            </ReceiverTitleBox>
            <ReceiverInputBox>
              <ReceiverInputLabel>이름</ReceiverInputLabel>
              <RecevierInputWrapper>
                <ReceiverInput
                  {...register(`receivers.${idx}.name`)}
                  placeholder="이름"
                  error={!!errors.receivers?.[idx]?.name}
                />
                <ErrorField error={errors.receivers?.[idx]?.name} />
              </RecevierInputWrapper>
            </ReceiverInputBox>
            <ReceiverInputBox>
              <ReceiverInputLabel>전화번호</ReceiverInputLabel>
              <RecevierInputWrapper>
                <ReceiverInput
                  {...register(`receivers.${idx}.phone`)}
                  placeholder="전화번호"
                  error={!!errors.receivers?.[idx]?.phone}
                />
                <ErrorField error={errors.receivers?.[idx]?.phone} />
              </RecevierInputWrapper>
            </ReceiverInputBox>
            <ReceiverInputBox>
              <ReceiverInputLabel>수량</ReceiverInputLabel>
              <RecevierInputWrapper>
                <ReceiverNumberInput
                  {...register(`receivers.${idx}.quantity`, {
                    valueAsNumber: true,
                  })}
                  placeholder="수량"
                  type="number"
                  error={!!errors.receivers?.[idx]?.quantity}
                />
                <ErrorField error={errors.receivers?.[idx]?.quantity} />
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
`;

const ReceiverTitle = styled.p`
  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const RemoveBtn = styled.button`
  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  border: none;
  margin: 0px;
  text-align: left;
  background-color: transparent;
`;

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

const ReceiverInput = styled.input<{ error?: boolean }>`
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
    error ? theme.colors.state.critical : theme.colors.gray[400]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const ReceiverNumberInput = styled.input<{ error?: boolean }>`
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
    error ? theme.colors.state.critical : theme.colors.gray[400]};
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
