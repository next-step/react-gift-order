import styled from '@emotion/styled';
import ReceiverInputItem from '@/components/ReceiverFormSection/ReceiverInputItem';
import { useReceiverForm } from '@/hooks/useReceiverForm';
import { BUTTON_TEXT, LABELS } from '@/constants/receiverLabels';

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

  const canAddMore = fields.length < 10;
  const confirmButtonLabel = BUTTON_TEXT.CONFIRM_COUNT(fields.length);

  const handleAdd = () => {
    append({ name: '', phone: '', quantity: 1 });
  };

  const handleDelete = (index: number) => {
    remove(index);
  };

  const handleConfirm = handleSubmit(data => {
    onConfirmList(data.receivers);
    onClose();
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>{LABELS.RECEIVER_MODAL_TITLE}</Title>
          <Description>{LABELS.RECEIVER_MODAL_DESCRIPTION}</Description>
        </Header>

        <AddButtonWrapper>
          <AddButton type="button" onClick={handleAdd} disabled={!canAddMore}>
            {BUTTON_TEXT.ADD}
          </AddButton>
        </AddButtonWrapper>

        <ScrollableContent>
          <List>
            {fields.map((field, index) => (
              <ReceiverInputItem
                key={field.id}
                index={index}
                onDelete={() => handleDelete(index)}
                register={register}
                errors={errors}
                isDuplicate={isDuplicate}
              />
            ))}
          </List>
        </ScrollableContent>

        <Footer>
          <CancelButton type="button" onClick={handleCancel}>
            {BUTTON_TEXT.CANCEL}
          </CancelButton>
          <ConfirmButton type="button" onClick={handleConfirm}>
            {confirmButtonLabel}
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
  background: ${({ theme }) => theme.color.semantic.background.default};
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
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.sub};
  white-space: pre-line;
`;

const AddButtonWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.semantic.text.disabled : theme.color.blue[700]};
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
  background-color: ${({ theme }) => theme.color.blue[700]};
  color: ${({ theme }) => theme.color.gray[0]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
