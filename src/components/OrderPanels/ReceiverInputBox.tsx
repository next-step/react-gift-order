import styled from "@emotion/styled";
import AdvancedInput from "@src/components/shared/AdvancedInput";
import type { FormType, Receiver } from "@src/pages/OrderPage";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type ReceiverInputBoxProps = {
  id: string;
  no: number;
  onRemove: (id: string) => void;
};

function ReceiverInputBox({ id, no, onRemove }: ReceiverInputBoxProps) {
  const { control, setError, clearErrors } = useFormContext<FormType>();
  const receivers = useWatch({ name: "receivers", control });

  useEffect(() => {
    if (!receivers) return;

    const phoneCountMap = receivers.reduce<Record<string, number>>((acc, r) => {
      if (!r.phoneNumber) return acc;
      acc[r.phoneNumber] = (acc[r.phoneNumber] || 0) + 1;
      return acc;
    }, {});

    receivers.forEach((receiver, index) => {
      const phone = receiver.phoneNumber;
      if (phone && phoneCountMap[phone] > 1) {
        setError(`receivers.${index}.phoneNumber`, {
          type: "duplicate",
          message: "중복된 전화번호가 있습니다."
        });
      } else {
        clearErrors(`receivers.${index}.phoneNumber`);
      }
    });
  }, [receivers]);

  return (
    <InputGroupWrapper>
      <TitleP>
        {`받는 사람 ${no}`}
        <RemoveButton onClick={() => onRemove(id)}>✕</RemoveButton>
      </TitleP>
      <InputCaptionPairWrapper>
        <Caption>이름</Caption>
        <Controller
          name={`receivers.${no}.name`}
          control={control}
          rules={{ required: "이름을 입력해주세요." }}
          render={({ field, fieldState }) => (
            <AdvancedInput
              placeholder="이름을 입력하세요."
              type="text"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>전화번호</Caption>
        <Controller
          name={`receivers.${no}.phoneNumber`}
          control={control}
          rules={{
            required: "전화번호를 입력해주세요.",
            pattern: {
              value: /^010\d{8}$/,
              message: "올바른 전화번호 형식이 아닙니다."
            },
            validate: (value) => {
              if (!receivers) return true;
              const count = receivers.filter(
                (r: Receiver, i: number) => r.phoneNumber === value && i !== no
              ).length;
              return count === 0 || "중복된 전화번호가 있습니다.";
            }
          }}
          render={({ field, fieldState }) => (
            <AdvancedInput
              placeholder="전화번호를 입력하세요."
              type="text"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>수량</Caption>
        <Controller
          name={`receivers.${no}.quantity`}
          control={control}
          rules={{
            required: "수량을 입력해주세요.",
            min: { value: 1, message: "구매 수량은 1개 이상이어야 합니다." }
          }}
          render={({ field, fieldState }) => (
            <AdvancedInput
              placeholder=""
              type="number"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </InputCaptionPairWrapper>
    </InputGroupWrapper>
  );
}

const Caption = styled.p`
  width: 60px;
  font-size: 14px;
`;

const InputCaptionPairWrapper = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

//Change calc values as well when changing width value
const InputGroupWrapper = styled.div`
  width: calc(100% - 2 * 15px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
`;

const TitleP = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

const RemoveButton = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
`;

export default ReceiverInputBox;
