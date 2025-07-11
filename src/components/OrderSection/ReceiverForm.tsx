import styled from '@emotion/styled';
import { useState } from 'react';
import InputField from '@/components/common/InputField';

type ReceiverInput = {
  name: string;
  phone: string;
  quantity: number;
};

const ReceiverForm = () => {
  const [receiverInputs, setReceiverInputs] = useState<ReceiverInput[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReceiverInput = () => {
    if (receiverInputs.length >= 10) {
      alert('최대 10명까지 입력할 수 있어요!');
      return;
    }
    setReceiverInputs(prev => [...prev, { name: '', phone: '', quantity: 1 }]);
  };

  const handleInputChange = (
    index: number,
    field: keyof ReceiverInput,
    value: string
  ) => {
    setReceiverInputs(prev => {
      const updated = [...prev];
      const target = { ...updated[index] };

      if (field === 'name') {
        target.name = value;
      } else if (field === 'phone') {
        target.phone = value;
      } else if (field === 'quantity') {
        target.quantity = Number(value);
      }

      updated[index] = target;
      return updated;
    });
  };

  return (
    <Wrapper>
      <Spacer />
      <Header>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={() => setIsModalOpen(true)}>
          추가
        </AddButton>
      </Header>
      <Spacer />
      {receiverInputs.length === 0 ? (
        <EmptyNotice>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
        </EmptyNotice>
      ) : (
        receiverInputs.map((r, i) => (
          <ReceiverCard key={i}>
            {r.name} / {r.phone} / {r.quantity}개
          </ReceiverCard>
        ))
      )}
      <BottomSpacer />

      {isModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalHeader>
              <ModalTitle>받는 사람</ModalTitle>
              <Description>
                * 최대 10명까지 추가 할 수 있어요.
                <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
              </Description>
            </ModalHeader>

            <AddButtonWrapper>
              <AddButton type="button" onClick={handleAddReceiverInput}>
                추가하기
              </AddButton>
            </AddButtonWrapper>

            <ReceiverListWrapper>
              {receiverInputs.map((input, index) => (
                <div key={index}>
                  <h4>받는 사람 {index + 1}</h4>
                  <InputField
                    name={`name-${index}`}
                    type="text"
                    value={input.name}
                    onChange={e =>
                      handleInputChange(index, 'name', e.target.value)
                    }
                    placeholder="이름을 입력하세요."
                  />
                  <InputField
                    name={`phone-${index}`}
                    type="tel"
                    value={input.phone}
                    onChange={e =>
                      handleInputChange(index, 'phone', e.target.value)
                    }
                    placeholder="전화번호를 입력하세요."
                  />
                  <InputField
                    name={`quantity-${index}`}
                    type="number"
                    value={String(input.quantity)}
                    onChange={e =>
                      handleInputChange(index, 'quantity', e.target.value)
                    }
                    placeholder="수량"
                  />
                </div>
              ))}
            </ReceiverListWrapper>

            <ModalFooter>
              <CancelButton type="button" onClick={() => setIsModalOpen(false)}>
                취소
              </CancelButton>
              <ConfirmButton
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                {receiverInputs.length}명 완료
              </ConfirmButton>
            </ModalFooter>
          </ModalBox>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default ReceiverForm;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing[2]};
`;

const BottomSpacer = styled.div`
  height: ${({ theme }) => theme.spacing[4]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const AddButton = styled.button`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.blue[500]};
  background: none;
  border: none;
  cursor: pointer;
`;

const EmptyNotice = styled.p`
  text-align: center;
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  white-space: pre-line;
`;

const ReceiverCard = styled.div`
  background-color: ${({ theme }) => theme.color.gray[100]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ModalTitle = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  white-space: pre-line;
`;

const AddButtonWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

const ReceiverListWrapper = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ModalFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  background: none;
  border: none;
`;

const ConfirmButton = styled.button`
  ${({ theme }) => theme.typography.body.body2Bold};
  background-color: ${({ theme }) => theme.color.blue[500]};
  color: white;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
`;
