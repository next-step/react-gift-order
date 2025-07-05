import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { NavigationHeader } from '@/components/NavigationHeader';
import { messageCardTemplates, rankingProducts } from '@/mock/mockData';
import type { MessageCardTemplate, GiftOrderForm, Product } from '@/types';
import { useForm } from '@/hooks/useForm';

interface GiftOrderPageProps {
  product?: Product;
}

export default function GiftOrderPage({
  product = rankingProducts[0],
}: GiftOrderPageProps) {
  const navigate = useNavigate();

  const [selectedTemplate, setSelectedTemplate] = useState<MessageCardTemplate>(
    messageCardTemplates[0]
  );

  const initialFormData: GiftOrderForm = {
    message: messageCardTemplates[0].defaultTextMessage,
    senderName: '',
    recipientName: '',
    recipientPhone: '',
    quantity: 1,
    selectedTemplate: messageCardTemplates[0],
  };

  const validateForm = (values: GiftOrderForm) => {
    const errors: Partial<Record<keyof GiftOrderForm, string>> = {};

    if (!values.message.trim()) {
      errors.message = '메시지를 입력해주세요.';
    }

    if (!values.senderName.trim()) {
      errors.senderName = '이름을 입력해주세요.';
    }

    if (!values.recipientName.trim()) {
      errors.recipientName = '이름을 입력해주세요.';
    }

    if (!values.recipientPhone.trim()) {
      errors.recipientPhone = '전화번호를 입력해주세요.';
    } else {
      const phoneRegex = /^010(-?\d{4})-?(\d{4})$/;
      if (!phoneRegex.test(values.recipientPhone)) {
        errors.recipientPhone = '올바른 전화번호 형식이 아닙니다.';
      }
    }

    if (values.quantity < 1) {
      errors.quantity = '구매 수량은 1개 이상이어야 합니다.';
    }

    return errors;
  };

  const {
    values: formData,
    errors,
    handleChange,
    validateForm: validate,
  } = useForm(initialFormData, validateForm);

  const handleTemplateSelect = (template: MessageCardTemplate) => {
    // 템플릿 선택 시 관련 상태들을 함께 업데이트
    updateTemplateSelection(template);
  };

  const updateTemplateSelection = (template: MessageCardTemplate) => {
    setSelectedTemplate(template);
    handleChange('message', template.defaultTextMessage);
    handleChange('selectedTemplate', template);
  };

  const handleInputChange = (
    field: keyof GiftOrderForm,
    value: string | number
  ) => {
    handleChange(field, value);
  };

  const handleSubmit = () => {
    if (validate()) {
      const orderMsg = `주문이 완료되었습니다!\n\n상품명: ${displayProductName}\n구매수량: ${formData.quantity}\n발신자 이름: ${formData.senderName}\n메시지: ${formData.message}`;
      alert(orderMsg);
      navigate('/');
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const displayProductName = product.name.replace(/\s\d+$/, '');

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
                  hasError={!!errors.recipientPhone}
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
            <FormField>
              <TextArea
                value={formData.message}
                onChange={e => handleInputChange('message', e.target.value)}
                placeholder="축하해요"
                hasError={!!errors.message}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormField>
          </MessageSection>
          <Separator />

          <FormSection>
            <SectionTitle>보내는 사람</SectionTitle>
            <FormField>
              <Input
                type="text"
                value={formData.senderName}
                onChange={e => handleInputChange('senderName', e.target.value)}
                placeholder="이름을 입력하세요"
                hasError={!!errors.senderName}
              />
              {errors.senderName ? (
                <ErrorMessage>{errors.senderName}</ErrorMessage>
              ) : (
                <HelpText>
                  * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
                </HelpText>
              )}
            </FormField>
          </FormSection>
          <Separator />

          <FormSection>
            <SectionTitle>받는 사람</SectionTitle>
            <HorizontalFormField>
              <HorizontalLabel htmlFor="recipientName">이름</HorizontalLabel>
              <InputWithErrorWrapper>
                <HorizontalInput
                  id="recipientName"
                  type="text"
                  value={formData.recipientName}
                  onChange={e =>
                    handleInputChange('recipientName', e.target.value)
                  }
                  placeholder="이름을 입력하세요"
                  hasError={!!errors.recipientName}
                />
                {errors.recipientName && (
                  <ErrorMessage>{errors.recipientName}</ErrorMessage>
                )}
              </InputWithErrorWrapper>
            </HorizontalFormField>
            <HorizontalFormField>
              <HorizontalLabel htmlFor="recipientPhone">
                전화번호
              </HorizontalLabel>
              <InputWithErrorWrapper>
                <HorizontalInput
                  id="recipientPhone"
                  type="tel"
                  value={formData.recipientPhone}
                  onChange={e =>
                    handleInputChange('recipientPhone', e.target.value)
                  }
                  placeholder="전화번호를 입력하세요"
                  hasError={!!errors.recipientPhone}
                />
                {errors.recipientPhone && (
                  <ErrorMessage>{errors.recipientPhone}</ErrorMessage>
                )}
              </InputWithErrorWrapper>
            </HorizontalFormField>
            <HorizontalFormField>
              <HorizontalLabel htmlFor="quantity">수량</HorizontalLabel>
              <InputWithErrorWrapper>
                <HorizontalInput
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={e =>
                    handleInputChange(
                      'quantity',
                      Number.parseInt(e.target.value) || 0
                    )
                  }
                  hasError={!!errors.quantity}
                />
                {errors.quantity && (
                  <ErrorMessage>{errors.quantity}</ErrorMessage>
                )}
              </InputWithErrorWrapper>
            </HorizontalFormField>
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

        <OrderButton onClick={handleSubmit}>
          {product.price.sellingPrice * formData.quantity}원 주문하기
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
  hasError?: boolean;
}>`
  flex-shrink: 0;
  width: 80px;
  height: 55px;
  border: 3px solid
    ${({ isSelected, hasError, theme }) =>
      hasError ? 'none' : isSelected ? theme.colors.gray1000 : 'none'};
  border-radius: 10px;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ hasError, theme }) =>
      hasError ? 'none' : theme.colors.blue500};
  }

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

const FormField = styled.div`
  margin-bottom: ${theme.spacing.spacing4};

  &:last-child {
    margin-bottom: 0;
  }
`;

const TemplateScroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  padding: 12px 0;
  margin-bottom: 24px;
  border-radius: 12px;
  background: #fff;
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 8px;
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
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
      props.hasError ? theme.colors.critical : theme.colors.blue700};
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
      props.hasError ? theme.colors.critical : theme.colors.blue700};
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.critical};
  font-size: ${theme.typography.label2Regular.fontSize};
  margin-top: ${theme.spacing.spacing1};
`;

const HelpText = styled.div`
  color: ${theme.colors.gray700};
  font-size: ${theme.typography.label2Regular.fontSize};
  margin-top: ${theme.spacing.spacing1};
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

const HorizontalFormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.spacing4};

  &:last-child {
    margin-bottom: 0;
  }
`;

const HorizontalLabel = styled.label`
  min-width: 72px;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.title2Regular.fontWeight};
  color: ${theme.colors.textDefault};
  margin-right: ${theme.spacing.spacing3};
`;

const HorizontalInput = styled(Input)`
  flex: 1;
  margin-bottom: 0;
  ${({ hasError, theme }) =>
    hasError &&
    `
      border-color: ${theme.colors.critical} !important;
      box-shadow: none;
    `}
`;

const InputWithErrorWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
