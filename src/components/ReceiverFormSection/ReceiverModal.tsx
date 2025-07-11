import styled from '@emotion/styled';
import ReceiverInputItem from './ReceiverInputItem';
import { useReceiverForm } from '../../hooks/useReceiverForm';

interface Props {
  onConfirmList: (
    receivers: { name: string; phone: string; quantity: number }[]
  ) => void;
  onClose: () => void;
}

const ReceiverModal = ({ onConfirmList, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    errors,
    fields,
    append,
    remove,
    isDuplicate,
  } = useReceiverForm();

  const onConfirm = handleSubmit(data => {
    onConfirmList(data.receivers);
    onClose(); // 모달 닫기
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>받는 사람</Title>
          <Description>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Description>
        </Header>

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
          <List>
            {fields.map((field, index) => (
              <ReceiverInputItem
                key={field.id}
                index={index}
                onDelete={() => remove(index)}
                register={register}
                errors={errors}
                isDuplicate={isDuplicate}
              />
            ))}
          </List>
        </ScrollableContent>

        <Footer>
          <CancelButton type="button" onClick={handleCancel}>
            취소
          </CancelButton>
          <ConfirmButton type="button" onClick={onConfirm}>
            {fields.length}명 완료
          </ConfirmButton>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default ReceiverModal;

const Overlay = styled.div`
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

const Modal = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Title = styled.p`
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

const AddButton = styled.button<{ disabled?: boolean }>`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray[400] : theme.color.blue[500]};
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const List = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Footer = styled.div`
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
