import { ErrorMessage } from "@/components/common";
import { useCardTemplate } from "@/hooks/order/useCardTemplate";
import { useOrder } from "@/hooks/order/useOrder";
import styled from "@emotion/styled";

const SelectedCardContainer = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing4,
}));

const SelectedCardImage = styled.img(({ theme }) => ({
  width: "360px",
  height: "240px",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0px 8px 2px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing8,
}));

const MessageInput = styled.textarea<{ hasError?: boolean }>(
  ({ theme, hasError }) => ({
    display: "flex",
    width: "100%",
    borderRadius: "8px",
    border: `1px solid ${
      hasError ? theme.color.red[700] : theme.color.gray[500]
    }`,
    color: theme.color.gray[900],
    padding: `${theme.spacing2} ${theme.spacing3}`,
    fontSize: theme.typography.body2Regular.fontSize,
    fontWeight: theme.typography.body2Regular.fontWeight,
    lineHeight: theme.typography.body2Regular.lineHeight,
    outline: "none",
    transition: "all 0.2s ease-in-out",

    "&:focus": {
      border: `1px solid ${
        hasError ? theme.color.red[500] : theme.color.gray[700]
      }`,
      outline: "none",
    },
  }),
);

export const SelectedCardView = () => {
  const { register } = useOrder();
  const messageField = register("message");
  const currentCardTemplate = useCardTemplate();

  return (
    <SelectedCardContainer>
      <SelectedCardImage
        id={String(currentCardTemplate.cardTemplate?.id)}
        src={currentCardTemplate.cardTemplate?.imageUrl}
        alt="선택된 카드 이미지"
      />
      <MessageInput
        placeholder={currentCardTemplate.cardTemplate?.defaultTextMessage}
        value={messageField.value}
        onChange={messageField.onChange}
        onBlur={messageField.onBlur}
        hasError={messageField.hasError}
      />
      {messageField.error && <ErrorMessage>{messageField.error}</ErrorMessage>}
    </SelectedCardContainer>
  );
};
