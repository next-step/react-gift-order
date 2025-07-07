import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, fontSizes, spaces, radii, shadows } from '@/tokens/designTokens';
import { useValidation } from '@/hooks/useValidation';
import products from '@/data/products';
import orderTemplates from '@/data/orderTemplates';
import type { OrderTemplate } from '@/data/orderTemplates';

const Wrap = styled.div`
  padding: ${spaces.lg};
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${fontSizes.h1};
  color: ${colors.text};
  margin-bottom: ${spaces.lg};
`;

const ProductInfo = styled.div`
  background: ${colors.surface};
  border-radius: ${radii.sm};
  padding: ${spaces.lg};
  margin-bottom: ${spaces.lg};
  box-shadow: ${shadows.card};
  display: flex;
  gap: ${spaces.lg};
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: ${radii.sm};
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductName = styled.h2`
  font-size: ${fontSizes.h2};
  color: ${colors.text};
  margin-bottom: ${spaces.sm};
`;

const ProductPrice = styled.p`
  font-size: ${fontSizes.body};
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spaces.sm};
`;

const Form = styled.form`
  background: ${colors.surface};
  border-radius: ${radii.sm};
  padding: ${spaces.lg};
  margin-bottom: ${spaces.lg};
  box-shadow: ${shadows.card};
`;

const FormGroup = styled.div`
  margin-bottom: ${spaces.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${fontSizes.body};
  color: ${colors.text};
  margin-bottom: ${spaces.sm};
  font-weight: 600;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${spaces.md};
  border: 1px solid ${props => props.hasError ? colors.error : '#ddd'};
  border-radius: ${radii.sm};
  font-size: ${fontSizes.body};
  outline: none;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${spaces.md};
  border: 1px solid ${props => props.hasError ? colors.error : '#ddd'};
  border-radius: ${radii.sm};
  font-size: ${fontSizes.body};
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const ErrorMsg = styled.p`
  color: ${colors.error};
  font-size: 14px;
  margin-top: ${spaces.sm};
  margin-bottom: 0;
`;

const TemplateGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${spaces.md};
  margin-top: ${spaces.md};
  padding-bottom: 8px;
  &::-webkit-scrollbar {
    height: 8px;
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const TemplateCard = styled.div<{ isSelected?: boolean }>`
  min-width: 180px;
  max-width: 180px;
  height: 120px;
  border: 2px solid ${props => props.isSelected ? colors.primary : '#ddd'};
  border-radius: ${radii.sm};
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);

  &:hover {
    border-color: ${colors.primary};
  }
`;

const TemplateImage = styled.img`
  width: 160px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const QuantityInput = styled.input`
  width: 80px;
  padding: ${spaces.sm};
  border: 1px solid #ddd;
  border-radius: ${radii.sm};
  font-size: ${fontSizes.body};
  text-align: center;
`;

const SubmitButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: ${radii.sm};
  padding: ${spaces.md} ${spaces.lg};
  font-size: ${fontSizes.body};
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background: #1a1f24;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SelectedImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 24px 0;
`;

const SelectedImage = styled.img`
  width: 380px;
  max-width: 90vw;
  height: 220px;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  background: #fff;
`;

export default function OrderPage() {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState<OrderTemplate | null>(null);
    const [quantity, setQuantity] = useState(1);

    // 모든 훅은 최상단에서 호출
    const message = useValidation<string>('', v => {
        if (!v) return '메시지는 반드시 입력되어야 해요.';
        return null;
    }, true);

    const senderName = useValidation<string>('', v => {
        if (!v) return '보내는 사람 이름이 반드시 입력되어야 해요.';
        return null;
    });

    const receiverName = useValidation<string>('', v => {
        if (!v) return '받는 사람 이름이 반드시 입력되어야 해요.';
        return null;
    });

    const receiverPhone = useValidation<string>('', v => {
        if (!v) return '받는사람 전화번호가 반드시 입력되어야 해요.';
        if (!/^010\d{8}$/.test(v)) return '전화번호는 01012341234 형식이어야 해요.';
        return null;
    });

    const quantityValidation = useValidation<number>(1, v => {
        if (v < 1) return '수량은 1개 이상이어야 해요.';
        return null;
    }, true);

    // 템플릿 선택 시 메시지 자동 입력
    useEffect(() => {
        if (selectedTemplate && selectedTemplate.defaultTextMessage) {
            message.onChange({
                target: { value: selectedTemplate.defaultTextMessage } as HTMLInputElement
            } as ChangeEvent<HTMLInputElement>);
        }
    }, [selectedTemplate, message]);

    const product = products.find(p => p.id === Number(productId));
    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    const canSubmit = message.isValid &&
        senderName.isValid &&
        receiverName.isValid &&
        receiverPhone.isValid &&
        quantityValidation.isValid &&
        selectedTemplate;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (canSubmit) {
            alert('주문이 완료되었습니다!');
            navigate('/');
        }
    };

    const handleQuantityChange = (value: string) => {
        const numValue = parseInt(value) || 0;
        setQuantity(numValue);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        message.onChange({
            target: { value: e.target.value } as HTMLInputElement
        } as ChangeEvent<HTMLInputElement>);
    };

    return (
        <Wrap>
            <Title>주문하기</Title>

            <ProductInfo>
                <ProductImage src={product.imageURL} alt={product.name} />
                <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>
                        {product.price.sellingPrice.toLocaleString()}원
                    </ProductPrice>
                </ProductDetails>
            </ProductInfo>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>카드 템플릿 선택</Label>
                    <TemplateGrid>
                        {orderTemplates.map(template => (
                            <TemplateCard
                                key={template.id}
                                isSelected={selectedTemplate?.id === template.id}
                                onClick={() => setSelectedTemplate(template)}
                            >
                                <TemplateImage src={template.thumbUrl} alt="template" />
                            </TemplateCard>
                        ))}
                    </TemplateGrid>
                </FormGroup>

                {selectedTemplate && (
                    <SelectedImageWrap>
                        <SelectedImage src={selectedTemplate.imageUrl} alt="선택된 카드" />
                    </SelectedImageWrap>
                )}

                <FormGroup>
                    <Label>메시지</Label>
                    <TextArea
                        placeholder="메시지를 입력해주세요"
                        value={message.value}
                        onChange={handleMessageChange}
                        onBlur={message.onBlur}
                        hasError={!!message.error}
                    />
                    <ErrorMsg>{message.error}</ErrorMsg>
                </FormGroup>

                <FormGroup>
                    <Label>보내는 사람 이름</Label>
                    <Input
                        type="text"
                        placeholder="보내는 사람 이름"
                        value={senderName.value}
                        onChange={senderName.onChange}
                        onBlur={senderName.onBlur}
                        hasError={!!senderName.error}
                    />
                    <ErrorMsg>{senderName.error}</ErrorMsg>
                </FormGroup>

                <FormGroup>
                    <Label>받는 사람 이름</Label>
                    <Input
                        type="text"
                        placeholder="받는 사람 이름"
                        value={receiverName.value}
                        onChange={receiverName.onChange}
                        onBlur={receiverName.onBlur}
                        hasError={!!receiverName.error}
                    />
                    <ErrorMsg>{receiverName.error}</ErrorMsg>
                </FormGroup>

                <FormGroup>
                    <Label>받는 사람 전화번호</Label>
                    <Input
                        type="text"
                        placeholder="01012341234"
                        value={receiverPhone.value}
                        onChange={receiverPhone.onChange}
                        onBlur={receiverPhone.onBlur}
                        hasError={!!receiverPhone.error}
                    />
                    <ErrorMsg>{receiverPhone.error}</ErrorMsg>
                </FormGroup>

                <FormGroup>
                    <Label>수량</Label>
                    <QuantityInput
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                        onBlur={quantityValidation.onBlur}
                    />
                    <ErrorMsg>{quantityValidation.error}</ErrorMsg>
                </FormGroup>

                <SubmitButton type="submit" disabled={!canSubmit}>
                    주문하기
                </SubmitButton>
            </Form>
        </Wrap>
    );
} 