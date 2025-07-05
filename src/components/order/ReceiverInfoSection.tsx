import { ErrorMessage, Input } from "@/components/common";
import styled from "@emotion/styled";
import { useOrder } from "@/hooks/order/useOrder";
import { ErrorPlaceholder } from "@/components/common/ErrorMessage";

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
  const { register } = useOrder();

  const receiverNameField = register("receiverName");
  const receiverPhoneField = register("receiverPhone");
  const quantityField = register("quantity");

  return (
    <ReceiverInfoContainer>
      <ReceiverInfoTitle>받는 사람</ReceiverInfoTitle>

      <ReceiverInfoInput>
        <ReceiverInfoLabel>이름</ReceiverInfoLabel>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요"
            variant="outlined"
            value={receiverNameField.value}
            onChange={receiverNameField.onChange}
            onBlur={receiverNameField.onBlur}
            hasError={receiverNameField.hasError}
          />
          {receiverNameField.error ? (
            <ErrorMessage>{receiverNameField.error}</ErrorMessage>
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
            value={receiverPhoneField.value}
            onChange={receiverPhoneField.onChange}
            onBlur={receiverPhoneField.onBlur}
            hasError={receiverPhoneField.hasError}
            type="tel"
          />
          {receiverPhoneField.error ? (
            <ErrorMessage>{receiverPhoneField.error}</ErrorMessage>
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
            value={quantityField.value}
            onChange={e => quantityField.onChange(Number(e.target.value))}
            onBlur={quantityField.onBlur}
            hasError={quantityField.hasError}
          />
          {quantityField.error && (
            <ErrorMessage>{quantityField.error}</ErrorMessage>
          )}
        </InputWrapper>
      </ReceiverInfoInput>
    </ReceiverInfoContainer>
  );
};
