import { useState } from 'react';
import styled from '@emotion/styled';
import { X } from 'lucide-react';
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

const RecipientSection = styled('div')({
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
  color: theme.colorScale.gray800,
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

// Margin 스타일 유지
const Margin = styled('div')<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const InputWrapper = styled('div')({
  flex: '1 1 0%',
  overflow: 'auto',
});

const InputBoxContainer = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 0px;
`;

const RecipientNumberContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const RecipientNumber = styled.p(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
}));

const InputBoxTitle = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
  minWidth: '3.75rem',
}));

const InputBoxStyle = styled('div')({ flex: 1, width: '100%' });

const InputBox = styled('input')<{ hasError?: boolean }>(({ theme, hasError }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px 12px',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: 'rgb(42, 48, 56)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: hasError ? theme.semanticColors.state.critical : theme.semanticColors.border.default,
  transition: 'border-color 200ms',
  '::placeholder': {
    color: theme.semanticColors.text.placeholder,
  },
}));

// 구분선
const Divider = styled('hr')(({ theme }) => ({
  width: '100%',
  height: 1,
  backgroundColor: theme.semanticColors.border.default,
  border: 'none',
  margin: '8px 0px 16px',
}));

export const Modal = ({ open, onClose, onConfirm }: ModalProps) => {
  const [fields, setFields] = useState<number[]>([]);

  const handleAdd = () => {
    setFields((prev) => [...prev, Date.now()]);
  };

  const handleRemove = (removeIdx: number) => {
    setFields((prev) => prev.filter((_, idx) => idx !== removeIdx));
  };

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
            <AddButton type="button" onClick={handleAdd}>
              추가하기
            </AddButton>
          </div>
          <RecipientSection>
            {fields.map((id, idx) => (
              <InputWrapper key={id}>
                {idx > 0 && <Divider />}
                <RecipientNumberContainer>
                  <RecipientNumber>받는 사람 {idx + 1}</RecipientNumber>
                  <X
                    size={20}
                    strokeWidth={1.5}
                    style={{ marginLeft: '0.25rem' }}
                    onClick={() => handleRemove(idx)}
                  />
                </RecipientNumberContainer>
                {/* 이름 */}
                <InputBoxContainer>
                  <InputBoxTitle>이름</InputBoxTitle>
                  <InputBoxStyle>
                    <InputBox placeholder="이름을 입력하세요." />
                  </InputBoxStyle>
                </InputBoxContainer>

                {/* 전화번호 */}
                <InputBoxContainer>
                  <InputBoxTitle>전화번호</InputBoxTitle>
                  <InputBoxStyle>
                    <InputBox type="tel" placeholder="전화번호를 입력하세요." />
                  </InputBoxStyle>
                </InputBoxContainer>

                {/* 수량 */}
                <InputBoxContainer>
                  <InputBoxTitle>수량</InputBoxTitle>
                  <InputBoxStyle>
                    <InputBox type="number" placeholder="수량을 입력하세요." />
                  </InputBoxStyle>
                </InputBoxContainer>
              </InputWrapper>
            ))}
          </RecipientSection>
          <SubmitButtonSection>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton onClick={onConfirm}>완료</SubmitButton>
          </SubmitButtonSection>
        </ModalSection>
      </Container>
    </Wrapper>
  );
};

export default Modal;
