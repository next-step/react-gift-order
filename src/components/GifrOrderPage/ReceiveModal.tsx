import styled from '@emotion/styled';
import type { MultiOrderFormData } from '@schemas/orderSchema';
import {
  useFormContext,
  type FieldArrayWithId,
  type FieldErrors,
  type UseFieldArrayAppend,
  type UseFieldArrayRemove,
  type UseFormRegister,
} from 'react-hook-form';
import ReceiveForm from './ReceiveForm';
import { useEffect } from 'react';

interface ReceiveModalProps {
  register: UseFormRegister<MultiOrderFormData>;
  errors: FieldErrors<MultiOrderFormData>;
  fields: FieldArrayWithId<MultiOrderFormData, 'recipients', 'id'>[];
  append: UseFieldArrayAppend<MultiOrderFormData, 'recipients'>;
  remove: UseFieldArrayRemove;
  onClose: () => void;
  onComplete: () => void;
}

const ReceiveModal = ({
  register,
  errors,
  fields,
  append,
  remove,
  onClose,
  onComplete,
}: ReceiveModalProps) => {
  const { clearErrors } = useFormContext<MultiOrderFormData>();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    clearErrors('recipients');
  }, []);
  return (
    <Overlay>
      <ModalWrapper>
        <ModalHeader>
          <Title>받는 사람</Title>
          <Subtitle>*최대 10명까지 추가 할 수 있어요.</Subtitle>
          <Subtitle>
            * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </Subtitle>
          <AddButton
            onClick={() => append({ receiver: '', phone: '', quantity: 1 })}
            disabled={fields.length >= 10}
          >
            추가하기
          </AddButton>
        </ModalHeader>
        <FormScrollArea>
          {fields.map((field, index) => (
            <ReceiveForm
              key={field.id}
              index={index}
              register={register}
              errors={errors}
              remove={remove}
            />
          ))}
        </FormScrollArea>
        <ButtonGroup>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <CompleteButton type="submit" onClick={onComplete}>
            {fields.length} 명 완료
          </CompleteButton>
        </ButtonGroup>
      </ModalWrapper>
    </Overlay>
  );
};

export default ReceiveModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.semantic.backgroundDefault,
  width: '90%',
  maxWidth: '35rem',
  height: '80vh',
  padding: theme.spacing.spacing4,
  borderRadius: theme.spacing.spacing3,
  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
  display: 'flex',
  flexDirection: 'column',
}));

const ModalHeader = styled.div(({ theme }) => ({
  padding: theme.spacing.spacing4,
}));

const Title = styled.h1(({ theme }) => ({
  ...theme.typography.title1Bold,
  color: theme.colors.semantic.textDefault,
  marginBottom: theme.spacing.spacing2,
}));

const Subtitle = styled.h2(({ theme }) => ({
  ...theme.typography.subtitle2Regular,
  color: theme.colors.semantic.textSub,
}));

const AddButton = styled.button(({ theme, disabled }) => ({
  backgroundColor: theme.colors.gray.gray300,
  border: 'none',
  borderRadius: theme.spacing.spacing2,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
  margin: `${theme.spacing.spacing3} 0`,
  cursor: disabled ? 'not-allowed' : 'pointer',

  '&:active': {
    backgroundColor: disabled
      ? theme.colors.gray.gray300
      : theme.colors.gray.gray400,
  },
}));

const FormScrollArea = styled.div(({ theme }) => ({
  // backgroundColor: 'green', 영역 확인용
  flex: '1',
  overflowY: 'auto',
  padding: theme.spacing.spacing3,
  height: '40vh',
}));

const ButtonGroup = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing.spacing7,
}));

const CancelButton = styled.button(({ theme }) => ({
  width: '30%',
  maxWidth: '400px',
  backgroundColor: theme.colors.gray.gray300,
  border: 'none',
  borderRadius: theme.spacing.spacing2,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
  margin: `${theme.spacing.spacing3} 0`,
  cursor: 'pointer',

  '&:active': {
    backgroundColor: theme.colors.gray.gray400,
  },
}));

const CompleteButton = styled.button(({ theme }) => ({
  width: '65%',
  maxWidth: '400px',
  backgroundColor: theme.colors.semantic.kakaoYellow,
  border: 'none',
  borderRadius: theme.spacing.spacing2,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing3}`,
  margin: `${theme.spacing.spacing3} 0`,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.semantic.kakaoYellowHover,
  },
  '&:active': {
    backgroundColor: theme.colors.semantic.kakaoYellowActive,
  },
}));
