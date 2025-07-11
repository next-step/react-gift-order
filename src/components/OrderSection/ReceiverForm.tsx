import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import InputField from '@/components/common/InputField';
import {
  PHONE_REGEX,
  MIN_QUANTITY,
  ERROR_MESSAGES,
} from '@/constants/validation';

type ReceiverInput = {
  name: string;
  phone: string;
  quantity: number;
};

type ReceiverError = {
  name: string;
  phone: string;
  quantity: string;
};

interface ReceiverFormProps {
  receiverList: ReceiverInput[];
  setReceiverList: React.Dispatch<React.SetStateAction<ReceiverInput[]>>;
}

const ReceiverForm = ({ receiverList, setReceiverList }: ReceiverFormProps) => {
  const [receiverInputs, setReceiverInputs] = useState<ReceiverInput[]>([]);
  const [receiverErrors, setReceiverErrors] = useState<ReceiverError[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(receiverList.length > 0);

  useEffect(() => {
    setIsConfirmed(receiverList.length > 0);
  }, [receiverList]);

  const handleAddReceiverInput = () => {
    if (receiverInputs.length >= 10) return;
    setReceiverInputs(prev => [...prev, { name: '', phone: '', quantity: 1 }]);
    setReceiverErrors(prev => [...prev, { name: '', phone: '', quantity: '' }]);
  };

  const validateReceiverField = (
    field: keyof ReceiverInput,
    value: string | number
  ): string => {
    if (field === 'name') {
      return value.toString().trim() === ''
        ? ERROR_MESSAGES.EMPTY_RECEIVER_NAME
        : '';
    }
    if (field === 'phone') {
      const text = value.toString().trim();
      if (!text) return ERROR_MESSAGES.EMPTY_RECEIVER_PHONE;
      if (!PHONE_REGEX.test(text)) return ERROR_MESSAGES.INVALID_PHONE;
      return '';
    }
    if (field === 'quantity') {
      return Number(value) < MIN_QUANTITY
        ? ERROR_MESSAGES.INVALID_QUANTITY
        : '';
    }
    return '';
  };

  const checkForDuplicatePhones = (
    inputs: ReceiverInput[]
  ): Record<string, boolean> => {
    const phoneCount: Record<string, number> = {};
    inputs.forEach(({ phone }) => {
      const trimmed = phone.trim();
      if (trimmed) {
        phoneCount[trimmed] = (phoneCount[trimmed] || 0) + 1;
      }
    });
    return Object.fromEntries(
      Object.entries(phoneCount).map(([phone, count]) => [phone, count > 1])
    );
  };

  const handleInputChange = (
    index: number,
    field: keyof ReceiverInput,
    value: string
  ) => {
    setReceiverInputs(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: field === 'quantity' ? Number(value) : value,
      };

      const duplicatePhones = checkForDuplicatePhones(updated);

      setReceiverErrors(errors => {
        const newErrors = [...errors];
        const phone = updated[index].phone.trim();
        newErrors[index] = {
          ...newErrors[index],
          [field]:
            validateReceiverField(field, value) ||
            (field === 'phone' && duplicatePhones[phone]
              ? '전화번호가 중복되었습니다.'
              : ''),
        };
        return newErrors;
      });

      return updated;
    });
  };

  const handleDelete = (index: number) => {
    setReceiverInputs(inputs => inputs.filter((_, i) => i !== index));
    setReceiverErrors(errors => errors.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    const phoneCounts: Record<string, number> = {};
    receiverInputs.forEach(r => {
      const phone = r.phone.trim();
      if (phone) {
        phoneCounts[phone] = (phoneCounts[phone] || 0) + 1;
      }
    });

    const newErrors: ReceiverError[] = receiverInputs.map(r => {
      const nameError = validateReceiverField('name', r.name);
      const phoneError = validateReceiverField('phone', r.phone);
      const quantityError = validateReceiverField('quantity', r.quantity);
      const isDuplicate = phoneCounts[r.phone.trim()] > 1;

      return {
        name: nameError,
        phone: phoneError || (isDuplicate ? '전화번호가 중복되었습니다.' : ''),
        quantity: quantityError,
      };
    });

    setReceiverErrors(newErrors);

    const allValid = newErrors.every(
      error => !error.name && !error.phone && !error.quantity
    );

    if (allValid) {
      setReceiverList(receiverInputs);
      setIsConfirmed(true);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setReceiverInputs([]);
    setReceiverErrors([]);
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Spacer />
      <Header>
        <Title>받는 사람</Title>
        <AddButton
          type="button"
          onClick={() => setIsModalOpen(true)}
          disabled={receiverInputs.length >= 10}
        >
          {isConfirmed ? '수정' : '추가'}
        </AddButton>
      </Header>
      <Spacer />
      {receiverList.length === 0 ? (
        <EmptyNotice>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
        </EmptyNotice>
      ) : (
        <TableWrapper>
          <TableHeader>
            <Cell>이름</Cell>
            <Cell>전화번호</Cell>
            <Cell>수량</Cell>
          </TableHeader>
          {receiverList.map((r, i) => (
            <TableRow key={i}>
              <Cell>{r.name}</Cell>
              <Cell>{r.phone}</Cell>
              <Cell>{r.quantity}개</Cell>
            </TableRow>
          ))}
        </TableWrapper>
      )}
      <BottomSpacer />

      {isModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ScrollableContent>
              <ModalHeader>
                <ModalTitle>받는 사람</ModalTitle>
                <Description>
                  * 최대 10명까지 추가 할 수 있어요.
                  <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
                </Description>
              </ModalHeader>

              <AddButtonWrapper>
                <AddButton
                  type="button"
                  onClick={handleAddReceiverInput}
                  disabled={receiverInputs.length >= 10}
                >
                  추가하기
                </AddButton>
              </AddButtonWrapper>

              <ReceiverListWrapper>
                {receiverInputs.map((input, index) => (
                  <ReceiverInputItem key={index}>
                    <InputHeader>
                      <h4>받는 사람 {index + 1}</h4>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDelete(index)}
                      >
                        삭제
                      </DeleteButton>
                    </InputHeader>
                    <InputField
                      name={`name-${index}`}
                      type="text"
                      value={input.name}
                      onChange={e =>
                        handleInputChange(index, 'name', e.target.value)
                      }
                      placeholder="이름을 입력하세요."
                      error={receiverErrors[index]?.name}
                    />
                    <InputField
                      name={`phone-${index}`}
                      type="tel"
                      value={input.phone}
                      onChange={e =>
                        handleInputChange(index, 'phone', e.target.value)
                      }
                      placeholder="전화번호를 입력하세요."
                      error={receiverErrors[index]?.phone}
                    />
                    <InputField
                      name={`quantity-${index}`}
                      type="number"
                      value={String(input.quantity)}
                      onChange={e =>
                        handleInputChange(index, 'quantity', e.target.value)
                      }
                      placeholder="수량"
                      error={receiverErrors[index]?.quantity}
                    />
                  </ReceiverInputItem>
                ))}
              </ReceiverListWrapper>
            </ScrollableContent>

            <ModalFooter>
              <CancelButton type="button" onClick={handleCancel}>
                취소
              </CancelButton>
              <ConfirmButton type="button" onClick={handleConfirm}>
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

const AddButton = styled.button<{ disabled?: boolean }>`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray[400] : theme.color.blue[500]};
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const EmptyNotice = styled.p`
  text-align: center;
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  white-space: pre-line;
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
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  padding-right: 4px;
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

const ReceiverInputItem = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px;
`;

const InputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.red[500]};
  cursor: pointer;
  ${({ theme }) => theme.typography.body.body2Regular};
`;

const ModalFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
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

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  background-color: ${({ theme }) => theme.color.gray[200]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  border-top: 1px solid ${({ theme }) => theme.color.gray[300]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const Cell = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  word-break: break-word;
`;
