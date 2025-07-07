import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { messageCards } from '@/data/messageCards';
import { mockProducts } from '@/data/products';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import CardSelector from '@/components/OrderSection/CardSelector';
import MessageInput from '@/components/OrderSection/MessageInput';

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

          <MessageInput value={selectedCard.defaultTextMessage} />

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

const ValidationMessage = styled.p`
  color: ${({ theme }) => theme.color.red[600]};
  ${({ theme }) => theme.typography.label.label2Regular};
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
