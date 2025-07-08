import { ErrorMessage, Input } from "@/components/common";
import styled from "@emotion/styled";
import { ErrorPlaceholder } from "@/components/common/ErrorMessage";
import { useOrderForm } from "@/contexts/order";

const ReceiverInfoContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: `${theme.spacing2} ${theme.spacing4}`,
}));

const ReceiverInfoTitle = styled.h2(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  lineHeight: `${theme.typography.title2Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
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

export const ReceiverInfoSection = () => {
  const { register } = useOrderForm();

  const { error: receiverNameFieldError, ...receiverNameField } =
    register("receiverName");
  const { error: receiverPhoneFieldError, ...receiverPhoneField } =
    register("receiverPhone");
  const { error: receiverQuantityError, ...receiverQuantityField } =
    register("quantity");

  return (
    <ReceiverInfoContainer>
      <ReceiverInfoTitle>받는 사람</ReceiverInfoTitle>

      <ReceiverInfoInput>
        <ReceiverInfoLabel>이름</ReceiverInfoLabel>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요"
            variant="outlined"
            {...receiverNameField}
          />
          {receiverNameFieldError ? (
            <ErrorMessage>{receiverNameFieldError}</ErrorMessage>
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
            {...receiverPhoneField}
            type="tel"
          />
          {receiverPhoneFieldError ? (
            <ErrorMessage>{receiverPhoneFieldError}</ErrorMessage>
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
            {...receiverQuantityField}
          />
          {receiverQuantityError && (
            <ErrorMessage>{receiverQuantityError}</ErrorMessage>
          )}
        </InputWrapper>
      </ReceiverInfoInput>
    </ReceiverInfoContainer>
  );
};
