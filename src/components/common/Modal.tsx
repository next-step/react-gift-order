import React from 'react';
import styled from '@emotion/styled';

// ModalProps 정의
export interface ModalProps {
  open: boolean;
  initialValue?: { name: string; phone: string; quantity: number };
  onClose: () => void;
  onConfirm: () => void;
}

// Wrapper에 open prop을 받아 부드러운 페이드 인/아웃 처리
const Wrapper = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  opacity: open ? 1 : 0,
  visibility: open ? 'visible' : 'hidden',
  transition: 'opacity 300ms ease, visibility 300ms ease',
  padding: 16,
}));

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// 모달 크기를 원래대로: full width & height 내부 영역
const ModalSection = styled('div')({
  background: '#fff',
  borderRadius: 8,
  maxHeight: 'calc(-7.5rem + 100vh)',
  maxWidth: '37.5rem',
  width: '100%',
  height: '100%',
  padding: '16px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const Empty = styled('div')({
  flex: '1 1 0%',
  overflow: 'auto',
});

const Title = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '1.6875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
}));

const Notice = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem',
  color: theme.semanticColors.text.sub,
  margin: 0,
  textAlign: 'left',
}));

const AddButton = styled('button')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem',
  padding: '8px 16px',
  borderRadius: 8,
  backgroundColor: theme.colorScale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  ':hover': { backgroundColor: theme.colorScale.gray400 },
  ':active': { backgroundColor: theme.colorScale.gray500 },
}));

const SubmitButtonSection = styled('div')({
  display: 'flex',
  gap: 12,
});

const CancelButton = styled('button')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  padding: '12px 24px',
  borderRadius: 8,
  backgroundColor: theme.colorScale.gray300,
  border: 'none',
  cursor: 'pointer',
  flex: '1 1 0%',
}));

const SubmitButton = styled('button')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  padding: '12px 24px',
  borderRadius: 8,
  backgroundColor: theme.semanticColors.brand.kakaoYellow,
  border: 'none',
  cursor: 'pointer',
  flex: '3 1 0%',
}));

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

export const Modal = ({ open, initialValue, onClose, onConfirm }: ModalProps) => {
  return (
    <Wrapper open={open}>
      <Container>
        <ModalSection>
          <div>
            <Title>받는 사람</Title>
            <Margin height="4px" />
            <Notice>
              * 최대 10명까지 추가 할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </Notice>
            <Margin height="8px" />
            <AddButton onClick={onConfirm}>추가하기</AddButton>
          </div>
          <Empty />
          <SubmitButtonSection>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton onClick={onConfirm}>0명 완료</SubmitButton>
          </SubmitButtonSection>
        </ModalSection>
      </Container>
    </Wrapper>
  );
};

export default Modal;
