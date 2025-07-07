import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import CardSelector from '@/components/OrderSection/CardSelector';

const OrderPage = () => {
  const { id } = useParams();
  const product = mockProducts[Number(id) - 1];

  const [selectedCardId, setSelectedCardId] = useState(messageCards[0].id);
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  return (
    <>
      <Navigation />
      <Main>
        <Section>
          <CardSelector
            selectedCardId={selectedCardId}
            onSelect={setSelectedCardId}
          />

          <TextAreaWrapper>
            <Input
              placeholder="메시지를 입력해주세요."
              value={selectedCard.defaultTextMessage}
            />
          </TextAreaWrapper>

          <SenderSection>
            <Label>보내는 사람</Label>
            <Input placeholder="이름을 입력하세요." />
            <ValidationMessage>이름을 입력해주세요.</ValidationMessage>
          </SenderSection>

          <ReceiverSection>
            <Label>받는 사람</Label>
            <InputGroup>
              <FieldLabel>이름</FieldLabel>
              <Input placeholder="이름을 입력하세요." />
              <ValidationMessage>이름을 입력해주세요.</ValidationMessage>
            </InputGroup>
            <InputGroup>
              <FieldLabel>전화번호</FieldLabel>
              <Input placeholder="전화번호를 입력하세요." />
              <ValidationMessage>전화번호를 입력해주세요.</ValidationMessage>
            </InputGroup>
            <InputGroup>
              <FieldLabel>수량</FieldLabel>
              <Input type="number" defaultValue={1} />
            </InputGroup>
          </ReceiverSection>

          <ProductInfoSection>
            <Label>상품 정보</Label>
            <ProductWrapper>
              <ProductImage src={product.imageURL} alt="product" />
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <BrandName>{product.brandInfo.name}</BrandName>
                <ProductPrice>
                  <span>상품가 </span>
                  {product.price.sellingPrice.toLocaleString()}원
                </ProductPrice>
              </ProductDetails>
            </ProductWrapper>
          </ProductInfoSection>

          <SubmitButton>
            {product.price.sellingPrice.toLocaleString()}원 주문하기
          </SubmitButton>
        </Section>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

const FieldLabel = styled.label`
  ${({ theme }) => theme.typography.label.label1Regular};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const Label = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const SenderSection = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
`;

const ReceiverSection = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  ${({ theme }) => theme.typography.body.body2Regular};
`;

const TextAreaWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;

  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray[300]};
    background-color: ${({ theme }) => theme.color.semantic.background.default};
    ${({ theme }) => theme.typography.body.body2Regular};
    resize: none;
    color: ${({ theme }) => theme.color.semantic.text.default};
  }
`;

const ValidationMessage = styled.p`
  color: ${({ theme }) => theme.color.red[600]};
  ${({ theme }) => theme.typography.label.label2Regular};
`;

const CardSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;

const CardImage = styled.img<{ isSelected: boolean }>`
  height: 56px;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.color.semantic.kakaoYellow}` : 'none'};
`;

const PreviewCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

const SelectedImage = styled.img`
  width: 100%;
  max-width: 360px;
  max-height: 300px;
  border-radius: 16px;
  object-fit: contain;
`;

const ProductInfoSection = styled.div``;
const ProductWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
const ProductDetails = styled.div``;
const ProductName = styled.p``;
const BrandName = styled.p``;
const ProductPrice = styled.p``;
const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  background-color: #ffe812;
`;
