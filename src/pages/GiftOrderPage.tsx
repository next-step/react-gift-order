import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { NavigationHeader } from '@/components/shared/layout';
import { FormField } from '@/components/shared/ui';
import { messageCardTemplates, rankingProducts } from '@/mock/mockData';
import type { MessageCardTemplate, Product, Recipient } from '@/types';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RecipientModal from '@/components/features/gift-order/RecipientModal';
import { RecipientTable } from '@/components/features/gift-order';
import { orderSchema } from '@/schemas/giftOrderSchemas';

interface GiftOrderPageProps {
  product?: Product;
}

type OrderForm = z.infer<typeof orderSchema>;

export default function GiftOrderPage({
  product = rankingProducts[0],
}: GiftOrderPageProps) {
  const navigate = useNavigate();
  const modalBodyRef = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    register,
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      senderName: '',
      message: messageCardTemplates[0].defaultTextMessage,
      selectedTemplate: messageCardTemplates[0],
      recipients: [],
    },
  });

  const selectedTemplate = watch('selectedTemplate');

  const { fields } = useFieldArray({
    control,
    name: 'recipients',
  });

  const [isRecipientModalOpen, setIsRecipientModalOpen] = useState(false);

  const onSubmit = (data: OrderForm) => {
    const totalQuantity = data.recipients.reduce(
      (sum: number, r: Recipient) => sum + r.quantity,
      0
    );
    alert(
      '주문이 완료되었습니다.' +
        '\n상품명: ' +
        displayProductName +
        '\n구매 수량: ' +
        totalQuantity +
        '\n발신자 이름: ' +
        data.senderName +
        '\n메시지: ' +
        data.message
    );
    navigate('/');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTemplateSelect = (template: MessageCardTemplate) => {
    setValue('message', template.defaultTextMessage);
    setValue('selectedTemplate', template);
  };

  const displayProductName = product.name.replace(/\s\d+$/, '');

  const openModal = () => {
    setIsRecipientModalOpen(true);
  };

  const handleModalSave = (
    recipients: { name: string; phone: string; quantity: number }[]
  ) => {
    setValue('recipients', recipients);
    setIsRecipientModalOpen(false);
  };

  const calculateTotalQuantity = (
    recipients: { quantity: number }[]
  ): number => {
    return recipients.reduce((sum, recipient) => sum + recipient.quantity, 0);
  };

  const calculateTotalPrice = (
    unitPrice: number,
    recipients: { quantity: number }[]
  ): number => {
    const totalQuantity = calculateTotalQuantity(recipients);
    return unitPrice * totalQuantity;
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader title="선물하기" onBackClick={handleBackClick} />

        <FormContainer>
          <TemplateSelectorContainer>
            <TemplateScroller>
              {messageCardTemplates.map(template => (
                <TemplateThumb
                  key={template.id}
                  isSelected={selectedTemplate.id === template.id}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <img
                    src={template.thumbUrl || '/placeholder.svg'}
                    alt="메시지 카드"
                  />
                </TemplateThumb>
              ))}
            </TemplateScroller>

            <MessageCardPreview>
              <img
                src={selectedTemplate.imageUrl || '/placeholder.svg'}
                alt="선택된 메시지 카드"
              />
            </MessageCardPreview>
          </TemplateSelectorContainer>
          <Separator />

          <MessageSection>
            <FormField error={errors.message?.message}>
              <TextArea
                {...register('message')}
                placeholder="축하해요"
                hasError={!!errors.message?.message}
              />
            </FormField>
          </MessageSection>
          <Separator />

          <FormSection>
            <SectionTitle>보내는 사람</SectionTitle>
            <FormField
              error={errors.senderName?.message}
              helpText="* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다."
            >
              <Input
                type="text"
                {...register('senderName')}
                placeholder="이름을 입력하세요"
                hasError={!!errors.senderName?.message}
              />
            </FormField>
          </FormSection>
          <Separator />
          <FormSection>
            <RecipientHeader>
              <SectionTitle>받는 사람</SectionTitle>
              <EditButton onClick={openModal}>추가</EditButton>
            </RecipientHeader>
            {fields.length === 0 ? (
              <EmptyRecipientContainer>
                <EmptyRecipientText>받는 사람이 없습니다.</EmptyRecipientText>
                <EmptyRecipientSubText>
                  받는 사람을 추가해주세요.
                </EmptyRecipientSubText>
              </EmptyRecipientContainer>
            ) : (
              <RecipientTable fields={fields} errors={errors} />
            )}
          </FormSection>
          <Separator />

          <ProductSection>
            <SectionTitle>상품 정보</SectionTitle>
            <ProductInfo>
              <ProductImage src={product.imageURL} alt={product.name} />
              <ProductDetails>
                <ProductName>{displayProductName}</ProductName>
                <ProductBrand>{product.brandInfo.name}</ProductBrand>
                <ProductPrice>
                  상품가 {product.price.sellingPrice}원
                </ProductPrice>
              </ProductDetails>
            </ProductInfo>
          </ProductSection>
        </FormContainer>
        <RecipientModal
          isOpen={isRecipientModalOpen}
          onClose={() => setIsRecipientModalOpen(false)}
          initialRecipients={getValues('recipients')}
          onSave={handleModalSave}
          modalBodyRef={modalBodyRef}
        />

        <OrderButton onClick={handleSubmit(onSubmit)}>
          {calculateTotalPrice(
            product.price.sellingPrice,
            getValues('recipients')
          )}
          원 주문하기
        </OrderButton>
      </MobileViewport>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  padding: 0 ${theme.spacing.spacing4};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MobileViewport = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  background: ${theme.colors.default};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 8px;
  background: #f5f5f5;
`;

const FormContainer = styled.div`
  padding-bottom: 70px;
`;

const TemplateSelectorContainer = styled.div`
  background: ${theme.colors.default};
  padding: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing3};
`;

const MessageSection = styled.div`
  background: ${theme.colors.default};
  padding: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing3};
`;

const FormSection = styled.div`
  background: ${theme.colors.default};
  padding: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing3};
`;

const ProductSection = styled.div`
  background: ${theme.colors.default};
  padding: ${theme.spacing.spacing4};
  margin-bottom: 0;
`;

const TemplateThumb = styled.button<{
  isSelected: boolean;
}>`
  flex-shrink: 0;
  width: 80px;
  height: 55px;
  border: 3px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.gray1000 : 'none')};
  border-radius: 10px;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const MessageCardPreview = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto ${theme.spacing.spacing6} auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const SectionTitle = styled.h3`
  font-size: ${theme.typography.subtitle1Bold.fontSize};
  font-weight: ${theme.typography.subtitle1Bold.fontWeight};
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing4};
`;

const TemplateScroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  padding: 12px 0;
  margin-bottom: ${theme.spacing.spacing6};
  border-radius: 12px;
  background: ${theme.colors.default};
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 8px;
    background: ${theme.colors.gray200};
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray400};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${theme.colors.gray200};
    border-radius: 8px;
  }
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.spacing2};
  border: 1px solid
    ${props =>
      props.hasError ? theme.colors.critical : theme.colors.borderDefault};
  border-radius: 8px;
  font-size: ${theme.typography.body1Regular.fontSize};
  background: ${theme.colors.default};

  &:focus {
    outline: none;
    border-color: ${props =>
      props.hasError ? theme.colors.critical : theme.colors.gray700};
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  min-height: 50px;
  padding: ${theme.spacing.spacing3};
  border: 1px solid
    ${props =>
      props.hasError ? theme.colors.critical : theme.colors.borderDefault};
  border-radius: 8px;
  font-size: ${theme.typography.body1Regular.fontSize};
  background: ${theme.colors.default};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props =>
      props.hasError ? theme.colors.critical : theme.colors.gray600};
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing3};
  padding: ${theme.spacing.spacing4};
  border: 1px solid ${theme.colors.borderDefault};
  border-radius: 8px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  font-size: ${theme.typography.body2Bold.fontSize};
  font-weight: ${theme.typography.title2Regular.fontWeight};
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing1};
`;

const ProductBrand = styled.div`
  font-size: ${theme.typography.label1Regular.fontSize};
  color: ${theme.colors.textSub};
  margin-bottom: ${theme.spacing.spacing2};
`;

const ProductPrice = styled.div`
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${theme.colors.textDefault};
`;

const OrderButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 720px;
  padding: ${theme.spacing.spacing4};
  background: ${theme.colors.kakaoYellow};
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  color: ${theme.colors.gray1000};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.kakaoYellowHover};
  }

  &:active {
    background: ${theme.colors.kakaoYellowActive};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RecipientHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.spacing3};
`;

const EditButton = styled.button`
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
  background: ${theme.colors.gray200};
  border-radius: 8px;
  font-size: ${theme.typography.body2Regular.fontSize};
  color: ${theme.colors.textDefault};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.gray300};
  }

  &:active {
    background: ${theme.colors.gray400};
  }
`;

const EmptyRecipientContainer = styled.div`
  border: 1px solid ${theme.colors.borderDefault};
  border-radius: 8px;
  padding: ${theme.spacing.spacing6} ${theme.spacing.spacing4};
  text-align: center;
  background: ${theme.colors.default};
  color: ${theme.colors.textSub};
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyRecipientText = styled.div`
  font-size: ${theme.typography.body1Regular.fontSize};
  margin-bottom: ${theme.spacing.spacing1};
`;

const EmptyRecipientSubText = styled.div`
  font-size: ${theme.typography.body2Regular.fontSize};
`;
