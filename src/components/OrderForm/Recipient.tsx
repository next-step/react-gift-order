import { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Modal as RecipientModal } from '@/components/common/Modal'; // 사용자 정의 Modal 컴포넌트
import styled from '@emotion/styled';
import type { OrderFormValues } from '@/components/OrderForm/OrderForm';

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

const RecipientInfo = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  border: '1px solid ',
  borderColor: theme.semanticColors.border.disabled,
  borderRadius: '8px',
}));

const NoRecipientNotice = styled.p(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.sub,
  margin: 0,
  textAlign: 'center',
}));

export const Recipient = () => {
  const { control, clearErrors } = useFormContext<OrderFormValues>();
  const { fields, append, remove } = useFieldArray({ control, name: 'recipients' });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddClick = () => {
    clearErrors('recipients');
    setModalOpen(true);
  };

  const handleConfirm = (item: { name: string; phone: string; quantity: number }) => {
    append(item);
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Margin height="12px" />
      <TitleContainer>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={handleAddClick} disabled={fields.length >= 10}>
          추가
        </AddButton>
      </TitleContainer>
      <Margin height="12px" />

      <RecipientInfo>
        {fields.length === 0 ? (
          <NoRecipientNotice>
            받는 사람이 없습니다.
            <br />
            받는 사람을 추가해주세요.
          </NoRecipientNotice>
        ) : (
          fields.map((f, idx) => (
            <div key={f.id}>
              {idx + 1}. {f.name || '(이름 없음)'} / {f.phone || '(전화없음)'} / {f.quantity}개
              <button
                type="button"
                onClick={() => remove(idx)}
                disabled={fields.length <= 1}
                style={{ marginLeft: '8px' }}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </RecipientInfo>

      {/* 사용자 정의 Modal 호출 */}
      <RecipientModal
        open={isModalOpen}
        initialValue={fields.length < 10 ? { name: '', phone: '', quantity: 1 } : undefined}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />

      <Margin height="24px" />
    </Wrapper>
  );
};
