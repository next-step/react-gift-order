import styled from "@emotion/styled";
import { ErrorMessage, Input } from "@/components/common";
import { useOrder } from "@/hooks/order/useOrder";

const SenderInfoContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "136px",
  padding: `0 ${theme.spacing4}`,
}));

const SenderInfoTitle = styled.h2(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  lineHeight: `${theme.typography.title2Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: theme.spacing2,
}));

const SenderInfoDescription = styled.p(({ theme }) => ({
  padding: theme.spacing2,
  fontSize: `${theme.typography.label2Regular.fontSize}`,
  fontWeight: `${theme.typography.label2Regular.fontWeight}`,
  lineHeight: `${theme.typography.label2Regular.lineHeight}`,
  color: `${theme.color.gray[600]}`,
}));

const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: theme.spacing1,
}));

export const SenderInfoSection = () => {
  const { register } = useOrder();
  const senderNameField = register("senderName");

  return (
    <SenderInfoContainer>
      <SenderInfoTitle>보내는 사람</SenderInfoTitle>
      <InputWrapper>
        <Input
          placeholder="이름을 입력하세요."
          variant="outlined"
          value={senderNameField.value}
          onChange={senderNameField.onChange}
          onBlur={senderNameField.onBlur}
          hasError={senderNameField.hasError}
        />
        {senderNameField.error ? (
          <ErrorMessage>{senderNameField.error}</ErrorMessage>
        ) : (
          <SenderInfoDescription>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </SenderInfoDescription>
        )}
      </InputWrapper>
    </SenderInfoContainer>
  );
};
