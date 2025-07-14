import { Modal } from '@/components/common/Modal';
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import { OutlineInputField } from '@/components/Form/InputField/OutlineInputField';
import { useModal } from '@/providers/Modal';
import {
  receiversFormSchema,
  type OrderFormData,
  type ReceiversFormData,
} from '@/schemas/orderForm';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';

const MAX_RECEIVERS_COUNT = 10;

type Props = {
  value: OrderFormData['receivers'];
  onChange: (value: OrderFormData['receivers']) => void;
};

export const ReceiversFormModal = ({ value, onChange }: Props) => {
  const { close: closeModal } = useModal();

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ReceiversFormData>({
    defaultValues: {
      receivers: value,
    },
    resolver: zodResolver(receiversFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });

  const handleAddReceiver = () => {
    append({
      name: '',
      phoneNumber: '',
      quantity: 1,
    });
  };

  const handleFormSubmit = async () => {
    handleSubmit(async (data) => {
      const receivers = data.receivers;
      onChange(receivers);

      await closeModal();
    })();
  };

  const handleCancel = async () => {
    reset({
      receivers: value,
    });

    await closeModal();
  };

  return (
    <Wrapper>
      <div>
        <Typography variant='title1Bold' color='gray900'>
          받는 사람
        </Typography>
        <HorizontalSpacing size='spacing1' />
        <Typography variant='label2Regular' color='gray800'>
          * 최대 10명까지 추가 할 수 있어요.
          <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
        </Typography>
        <HorizontalSpacing size='spacing2' />
        <AddButton onClick={handleAddReceiver} disabled={fields.length >= MAX_RECEIVERS_COUNT}>
          추가하기
        </AddButton>
      </div>
      <Content>
        {fields.map((data, index) => (
          <div key={data.id}>
            {index !== 0 && <Divider />}
            <ContentTitleWrapper>
              <Typography variant='body2Bold' color='gray900'>
                받는 사람 {index + 1}
              </Typography>
              <X
                size={20}
                strokeWidth={1.5}
                style={{ marginLeft: '0.25rem' }}
                onClick={() => {
                  remove(index);
                }}
              />
            </ContentTitleWrapper>
            <InputWrapper>
              <Typography variant='body2Regular' color='gray900' style={{ minWidth: '3.75rem' }}>
                이름
              </Typography>
              <OutlineInputField
                fieldSize='xsmall'
                placeholder='이름을 입력하세요.'
                {...register(`receivers.${index}.name`)}
                invalid={!!errors.receivers?.[index]?.name}
                message={errors.receivers?.[index]?.name?.message}
                style={{ width: '100%' }}
              />
            </InputWrapper>
            <InputWrapper>
              <Typography variant='body2Regular' color='gray900' style={{ minWidth: '3.75rem' }}>
                전화번호
              </Typography>
              <OutlineInputField
                fieldSize='xsmall'
                placeholder='전화번호를 입력하세요.'
                {...register(`receivers.${index}.phoneNumber`)}
                invalid={!!errors.receivers?.[index]?.phoneNumber}
                message={errors.receivers?.[index]?.phoneNumber?.message}
                style={{ width: '100%' }}
              />
            </InputWrapper>
            <InputWrapper>
              <Typography variant='body2Regular' color='gray900' style={{ minWidth: '3.75rem' }}>
                수량
              </Typography>
              <OutlineInputField
                fieldSize='xsmall'
                placeholder='수량을 입력하세요.'
                type='number'
                {...register(`receivers.${index}.quantity`, {
                  valueAsNumber: true,
                })}
                invalid={!!errors.receivers?.[index]?.quantity}
                message={errors.receivers?.[index]?.quantity?.message}
                style={{ width: '100%' }}
              />
            </InputWrapper>
          </div>
        ))}
      </Content>
      <Footer>
        <DefaultButton onClick={handleCancel}>취소</DefaultButton>
        <SubmitButton onClick={handleFormSubmit}>{fields.length}명 완료</SubmitButton>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled(Modal)(({ theme }) => ({
  maxWidth: '37.5rem',
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.scale.gray00,
  padding: `${theme.spacing.spacing4} ${theme.spacing.spacing6}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.spacing4,
}));

const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

const Footer = styled.div(({ theme }) => ({
  display: 'flex',

  gap: theme.spacing.spacing3,
}));

const AddButton = styled.button(({ theme }) => ({
  ...theme.typography.label2Regular,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing4}`,
  borderRadius: theme.spacing.spacing2,
  backgroundColor: theme.colors.scale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: theme.colors.scale.gray200,
    color: theme.colors.scale.gray600,
  },
}));

const DefaultButton = styled.button(({ theme }) => ({
  ...theme.typography.label1Regular,
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing6}`,
  borderRadius: theme.spacing.spacing2,
  backgroundColor: theme.colors.scale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',
  width: '100%',
  flex: 1,
}));

const SubmitButton = styled.button(({ theme }) => ({
  ...theme.typography.label1Regular,
  width: '100%',
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing6}`,
  borderRadius: theme.spacing.spacing2,
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',
  flex: 3,
}));

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2} 0;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.scale.gray400};
  margin: ${({ theme }) => `${theme.spacing.spacing2} 0 ${theme.spacing.spacing4}`};
`;

const ContentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
