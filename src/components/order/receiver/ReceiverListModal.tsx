import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Modal = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 590px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 24px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: 4px;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => theme.typography.label2Regular};
  margin-bottom: 8px;
`;

const AddButton = styled.button`
  width: auto;
  align-self: start;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.typography.label2Regular};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  border-radius: 8px;
`;

const BottomBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 12px;
`;

const CancelBtn = styled.button`
  flex: 1 1 0%;
  padding: 12px 24px;
  width: 43px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.typography.label1Regular};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const SaveBtn = styled.button`
  flex: 3 1 0%;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  ${({ theme }) => theme.typography.label1Regular};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

interface Props {
  onClose: () => void;
}

export default function ReceiverListModal({ onClose }: Props) {
  return (
    <Overlay>
      <Modal>
        <Title>받는 사람</Title>
        <Label>
          <p>* 최대 10명까지 추가 할 수 있어요.</p>
          <p>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>
        </Label>

        <AddButton type="button">추가하기</AddButton>

        <Content>내용</Content>

        <BottomBtn>
          <CancelBtn type="button" onClick={onClose}>
            취소
          </CancelBtn>
          <SaveBtn type="button">0명 완료</SaveBtn>
        </BottomBtn>
      </Modal>
    </Overlay>
  );
}
