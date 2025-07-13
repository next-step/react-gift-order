import { ErrorMessage, Input } from "@/components/common";
import styled from "@emotion/styled";
import { ErrorPlaceholder } from "@/components/common/ErrorMessage";
import { X } from "lucide-react";
import { useFormContext, type FieldPath } from "react-hook-form";
import type { OrderFormData } from "@/contexts/order";
import type { ReceiverKeys } from "@/contexts/order/order-schema";

const ReceiverInfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const ReceiverInfoTitleWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
});

const ReceiverInfoTitle = styled.h2(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  lineHeight: `${theme.typography.title2Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: theme.spacing3,
}));

const ReceiverInfoDeleteButton = styled.span(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginBottom: theme.spacing3,
}));

const ReceiverInfoInput = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: `${theme.spacing1} 0`,
}));

const ReceiverInfoLabel = styled.p(({ theme }) => ({
  width: "60px",
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  fontWeight: `${theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${theme.typography.label1Regular.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  paddingTop: theme.spacing1,
}));

const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: theme.spacing1,
}));

interface ReceiverInfoFormProps {
  index: number;
  onClick: () => void;
}

export const ReceiverInfoForm = ({ index, onClick }: ReceiverInfoFormProps) => {
  const { register, formState, watch } = useFormContext<OrderFormData>();
  const { errors } = formState;

  const getFieldName = (field: ReceiverKeys): FieldPath<OrderFormData> => {
    return `receivers.${index}.${field}` as FieldPath<OrderFormData>;
  };

  const getError = (field: ReceiverKeys) => {
    return errors?.receivers?.[index]?.[field];
  };

  const currentPhone = watch(getFieldName("receiverPhone"));
  const allReceivers = watch("receivers") || [];

  const isDuplicatePhone =
    !!currentPhone &&
    allReceivers.filter(
      (receiver, idx) =>
        idx !== index &&
        receiver.receiverPhone &&
        receiver.receiverPhone === currentPhone,
    ).length > 0;

  const getPhoneError = () => {
    const fieldError = getError("receiverPhone");
    if (fieldError) return fieldError.message;

    if (isDuplicatePhone) {
      return "중복된 전화번호입니다.";
    }

    return null;
  };

  return (
    <ReceiverInfoContainer>
      <ReceiverInfoTitleWrapper>
        <ReceiverInfoTitle>
          받는 사람{index !== undefined ? ` ${index + 1}` : ""}
        </ReceiverInfoTitle>
        <ReceiverInfoDeleteButton onClick={onClick}>
          <X size={20} />
        </ReceiverInfoDeleteButton>
      </ReceiverInfoTitleWrapper>

      <ReceiverInfoInput>
        <ReceiverInfoLabel>이름</ReceiverInfoLabel>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요"
            variant="outlined"
            {...register(getFieldName("receiverName"))}
          />
          {getError("receiverName")?.message ? (
            <ErrorMessage>{getError("receiverName")?.message}</ErrorMessage>
          ) : (
            <ErrorPlaceholder />
          )}
        </InputWrapper>
      </ReceiverInfoInput>

      <ReceiverInfoInput>
        <ReceiverInfoLabel>전화번호</ReceiverInfoLabel>
        <InputWrapper>
          <Input
            placeholder="전화번호를 입력하세요"
            variant="outlined"
            type="tel"
            {...register(getFieldName("receiverPhone"))}
          />
          {getPhoneError() ? (
            <ErrorMessage>{getPhoneError()}</ErrorMessage>
          ) : (
            <ErrorPlaceholder />
          )}
        </InputWrapper>
      </ReceiverInfoInput>

      <ReceiverInfoInput>
        <ReceiverInfoLabel>수량</ReceiverInfoLabel>
        <InputWrapper>
          <Input
            placeholder="수량을 입력하세요"
            variant="outlined"
            type="number"
            min={1}
            {...register(getFieldName("quantity"), { valueAsNumber: true })}
          />
          {getError("quantity")?.message && (
            <ErrorMessage>{getError("quantity")?.message}</ErrorMessage>
          )}
        </InputWrapper>
      </ReceiverInfoInput>
    </ReceiverInfoContainer>
  );
};
