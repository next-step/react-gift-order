import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import type { OrderFormData } from '@/schemas/orderForm';
import styled from '@emotion/styled';
import type { UseFormReturn } from 'react-hook-form';
import { MOCK_MESSAGE_CARD_LIST } from './mock';
import { OutlineTextareaField } from '@/components/Form/TextareaField/OutlineTextareaField';

type Props = {
  formHandler: UseFormReturn<OrderFormData>;
};

export const OrderFormMessageFields = ({ formHandler }: Props) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = formHandler;

  const selectedMessageCard = MOCK_MESSAGE_CARD_LIST.find(
    ({ id }) => id.toString() === watch('messageCardId'),
  );

  return (
    <Wrapper>
      <HorizontalSpacing size='spacing3' />
      <CardThumbnailSlideWrapper>
        <CardThumbnailSlide>
          {MOCK_MESSAGE_CARD_LIST.map(({ id, thumbUrl }) => (
            <ThumbnailItem
              key={id}
              selected={selectedMessageCard?.id === id}
              onClick={() => {
                setValue('messageCardId', id.toString());
                setValue('message', selectedMessageCard?.defaultTextMessage ?? '');
              }}
            >
              <img
                src={thumbUrl}
                alt={`${id}번 메시지 카드`}
                style={{ width: '100%', height: '100%' }}
              />
            </ThumbnailItem>
          ))}
        </CardThumbnailSlide>
        <CardThumbnailSlideGradient />
      </CardThumbnailSlideWrapper>
      <HorizontalSpacing size='spacing3' />
      <CardPreviewWrapper>
        <CardPreview>
          <img
            src={selectedMessageCard?.imageUrl}
            alt='메시지 카드 미리보기'
            style={{ width: '100%', height: '100%' }}
          />
        </CardPreview>
      </CardPreviewWrapper>
      <HorizontalSpacing size='spacing10' />
      <TextareaWrapper>
        <OutlineTextareaField
          placeholder='메시지를 입력해주세요.'
          {...register('message')}
          invalid={!!errors.message}
          message={errors.message?.message}
        />
      </TextareaWrapper>
      <HorizontalSpacing size='spacing8' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const CardThumbnailSlideWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const CardThumbnailSlide = styled.div(({ theme }) => ({
  width: '100%',
  overflowY: 'auto',
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'scroll',
  gap: theme.spacing.spacing1,

  '&::-webkit-scrollbar': {
    height: '16px',
  },
  '&::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 14px 14px #c1c1c1',
    border: '4px solid transparent',
    borderRadius: '14px',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 14px 14px #f2f2f2',
    border: 'solid #fafafa',
    borderWidth: '4px 0',
  },
}));

const CardThumbnailSlideGradient = styled.div`
  height: 100%;
  width: 2rem;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
  position: absolute;
  right: 0;
  top: 0;
`;

const ThumbnailItem = styled.div<{ selected: boolean }>(({ theme, selected }) => ({
  flex: '0 0 auto',
  width: '82px',
  height: '56px',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  border: `3px solid ${selected ? theme.colors.scale.gray900 : 'transparent'}`,
  cursor: 'pointer',

  '&:first-of-type': {
    marginLeft: '1rem',
  },
  '&:last-of-type': {
    marginRight: '1rem',
  },
}));

const CardPreviewWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
`;

const CardPreview = styled.div`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 39px 20px -30px rgba(0, 0, 0, 0.2);
`;

const TextareaWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;
