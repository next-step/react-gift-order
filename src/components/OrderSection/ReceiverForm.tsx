import styled from '@emotion/styled';
import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import InputField from '@/components/common/InputField';
import {
  ERROR_MESSAGES,
  PHONE_REGEX,
  MIN_QUANTITY,
} from '@/constants/validation';

type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

interface Props {
  receiverList: Receiver[];
  setReceiverList: React.Dispatch<React.SetStateAction<Receiver[]>>;
}

const ReceiverForm = ({ receiverList, setReceiverList }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(receiverList.length > 0);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<{ receivers: Receiver[] }>({
    defaultValues: { receivers: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const onConfirm = handleSubmit(data => {
    setReceiverList(data.receivers);
    setIsConfirmed(true);
    setIsModalOpen(false);
  });

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const watchPhones = watch('receivers');

  const isDuplicate = (phone: string, index: number): boolean => {
    return (
      watchPhones.filter((r, i) => r.phone === phone && i !== index).length > 0
    );
  };

  return (
    <Wrapper>
      <Header>
        <Title>받는 사람</Title>
        <AddButton
          type="button"
          onClick={() => setIsModalOpen(true)}
          disabled={fields.length >= 10}
        >
          {isConfirmed ? '수정' : '추가'}
        </AddButton>
      </Header>

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
              <AddButton
                type="button"
                onClick={() => append({ name: '', phone: '', quantity: 1 })}
                disabled={fields.length >= 10}
              >
                추가하기
              </AddButton>
            </AddButtonWrapper>

            <ScrollableContent>
              <ReceiverListWrapper>
                {fields.map((field, index) => (
                  <ReceiverInputItem key={field.id}>
                    <InputHeader>
                      <h4>받는 사람 {index + 1}</h4>
                      <DeleteButton type="button" onClick={() => remove(index)}>
                        삭제
                      </DeleteButton>
                    </InputHeader>

                    <InputField
                      type="text"
                      placeholder="이름을 입력하세요."
                      {...register(`receivers.${index}.name`, {
                        required: ERROR_MESSAGES.EMPTY_RECEIVER_NAME,
                      })}
                      error={errors.receivers?.[index]?.name?.message}
                    />

                    <InputField
                      type="tel"
                      placeholder="전화번호를 입력하세요."
                      {...register(`receivers.${index}.phone`, {
                        required: ERROR_MESSAGES.EMPTY_RECEIVER_PHONE,
                        pattern: {
                          value: PHONE_REGEX,
                          message: ERROR_MESSAGES.INVALID_PHONE,
                        },
                        validate: value =>
                          !isDuplicate(value, index) ||
                          '전화번호가 중복되었습니다.',
                      })}
                      error={errors.receivers?.[index]?.phone?.message}
                    />

                    <InputField
                      type="number"
                      placeholder="수량"
                      {...register(`receivers.${index}.quantity`, {
                        valueAsNumber: true,
                        min: {
                          value: MIN_QUANTITY,
                          message: ERROR_MESSAGES.INVALID_QUANTITY,
                        },
                        required: ERROR_MESSAGES.INVALID_QUANTITY,
                      })}
                      error={errors.receivers?.[index]?.quantity?.message}
                    />
                  </ReceiverInputItem>
                ))}
              </ReceiverListWrapper>
            </ScrollableContent>

            <ModalFooter>
              <CancelButton type="button" onClick={handleCancel}>
                취소
              </CancelButton>
              <ConfirmButton type="button" onClick={onConfirm}>
                {fields.length}명 완료
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

const ScrollableContent = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.spacing[4]};
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
