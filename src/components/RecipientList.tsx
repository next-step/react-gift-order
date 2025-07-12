import theme from '@/styles/tokens';
import { css } from '@emotion/react';
import type { OrderValues } from '@src/hooks/useOrderForm';

const tableDiv = css`
  width: 100%;
  border: 1px solid ${theme.colors.borderDisabled};
  border-radius: 8px;
  overflow: hidden;
  background: ${theme.colors.backgroundDefault};
`;

const thDiv = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  padding: 12px 0;
  background-color: ${theme.colors.backgroundFill};
  border-bottom: 1px solid ${theme.colors.borderDisabled};
`;
const thP = css`
  font-size: ${theme.typography.subtitle2Bold.fontSize};
  font-weight: ${theme.typography.subtitle2Bold.fontWeight};
  line-height: ${theme.typography.subtitle2Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0;
  text-align: left;
  padding: 0 12px;
`;
const rowDiv = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  padding: 12px 0;
  border-bottom: 1px solid ${theme.colors.borderDisabled};

  &:last-of-type {
    border-bottom: none;
  }
`;

const tdP = css`
  font-size: ${theme.typography.subtitle2Regular.fontWeight};
  font-weight: ${theme.typography.subtitle2Regular.fontWeight};
  line-height: ${theme.typography.subtitle2Regular.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0;
  text-align: left;
  padding: 0 12px;
`;

interface RecipientListProps {
  recipients: OrderValues[];
}

const RecipientList = ({ recipients }: RecipientListProps) => {
  return (
    <div css={tableDiv}>
      <div css={thDiv}>
        <p css={thP}>이름</p>
        <p css={thP}>전화번호</p>
        <p css={thP}>수량</p>
      </div>
      {recipients.map((recipient, idx) => (
        <div css={rowDiv} key={idx}>
          <p css={tdP}>{recipient.recipientName}</p>
          <p css={tdP}>{recipient.recipientPhone}</p>
          <p css={tdP}>{recipient.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipientList;
