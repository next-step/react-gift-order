import { useState } from 'react';
import { useFormContext, useFieldArray, useWatch } from 'react-hook-form';
import { Modal as RecipientModal } from '@/components/common/Modal'; // 사용자 정의 Modal 컴포넌트
import styled from '@emotion/styled';
import type { OrderFormValues } from '@/components/OrderForm/OrderForm';
import shouldForwardProp from '@emotion/is-prop-valid';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const AddButton = styled.button(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  padding: '8px 16px',
  borderRadius: '8px',
  backgroundColor: theme.colorScale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',
  '&:hover': {
    backgroundColor: theme.colorScale.gray400,
  },
  '&:active': {
    backgroundColor: theme.colorScale.gray500,
  },
}));
interface InfoProps {
  isEmpty: boolean;
}

const RecipientInfo = styled('div', {
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'isEmpty',
})<InfoProps>(({ theme, isEmpty }) => ({
  display: 'flex',
  borderRadius: '8px',

  /* 빈 목록일 때 */
  ...(isEmpty && {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    border: '1px solid rgb(238, 239, 241)',
  }),

  /* 값이 있을 때 */
  ...(!isEmpty && {
    flexDirection: 'column',
    border: '1px solid',
    borderColor: theme.semanticColors.border.disabled,
    overflow: 'hidden',
  }),
}));

const NoRecipientNotice = styled.p(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.sub,
  margin: 0,
  textAlign: 'center',
}));

// 받는 사람 리스트
const RecipientTableTitleContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '12px',
  padding: '12px',
  backgroundColor: theme.semanticColors.background.fill,
  borderBottom: '1px solid ',
  borderColor: theme.semanticColors.border.disabled,
}));

const RecipientTableText = styled.p<{ fontWeight: number }>(({ theme, fontWeight }) => ({
  fontSize: '0.875rem',
  fontWeight: fontWeight,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const RecipientTable = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '12px',
  padding: '12px',
  borderBottom: '1px solid ',
  borderColor: theme.semanticColors.border.disabled,
}));

export const Recipient = () => {
  const { control, clearErrors } = useFormContext<OrderFormValues>();
  const { fields, replace } = useFieldArray({ control, name: 'recipients' });
  const [isModalOpen, setModalOpen] = useState(false);

  const recipients = useWatch({ control, name: 'recipients' }) ?? [];
  const handleAddClick = () => {
    clearErrors('recipients');
    setModalOpen(true);
  };

  const handleConfirm = (items: { name: string; phone: string; quantity: number }[]) => {
    replace(items);
    setModalOpen(false);
  };

  const addLabel = recipients.length === 0 ? '추가' : '수정';

  return (
    <Wrapper>
      <Margin height="12px" />
      <TitleContainer>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={handleAddClick} disabled={fields.length >= 10}>
          {addLabel}
        </AddButton>
      </TitleContainer>
      <Margin height="12px" />

      <RecipientInfo isEmpty={recipients.length === 0}>
        {recipients.length === 0 ? (
          <NoRecipientNotice>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </NoRecipientNotice>
        ) : (
          <>
            <RecipientTableTitleContainer>
              <RecipientTableText fontWeight={700}>이름</RecipientTableText>
              <RecipientTableText fontWeight={700}>전화번호</RecipientTableText>
              <RecipientTableText fontWeight={700}>수량</RecipientTableText>
            </RecipientTableTitleContainer>
            {recipients.map((f, idx) => (
              <RecipientTable key={idx}>
                <RecipientTableText fontWeight={400}>{f.name}</RecipientTableText>
                <RecipientTableText fontWeight={400}>{f.phone}</RecipientTableText>
                <RecipientTableText fontWeight={400}>{f.quantity}</RecipientTableText>
              </RecipientTable>
            ))}
          </>
        )}
      </RecipientInfo>

      {/* 사용자 정의 Modal 호출 */}
      <RecipientModal
        open={isModalOpen}
        recipients={recipients}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />

      <Margin height="24px" />
    </Wrapper>
  );
};
