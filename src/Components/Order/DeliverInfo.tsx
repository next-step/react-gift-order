import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 0;
  border-radius: 8px;
`;

const Section = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.placeholder};
  }
`;

const HelperText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.semantic.text.placeholder};
`;

const ProductInfo = styled.div`
  padding: 20px 16px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > strong {
    font-size: 14px;
  }

  & > span {
    font-size: 12px;
    color:${({ theme }) => theme.color.semantic.text.placeholder};
  }

  & > b {
    font-weight: bold;

  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.color.semantic.brand.kakaoYellow};
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const GiftForm = () => {
  return (
    <Wrapper>

      <Section>
        <Label>보내는 사람</Label>
        <InputBox>
          <StyledInput type="text" placeholder="이름을 입력하세요." />
          <HelperText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</HelperText>
        </InputBox>
      </Section>

      <Section>
        <Label>받는 사람</Label>
        <InputBox>
          <StyledInput type="text" placeholder="이름을 입력하세요." />
          <StyledInput type="tel" placeholder="전화번호를 입력하세요." />
          <StyledInput type="number" value="1" readOnly />
        </InputBox>
      </Section>

      <Section>
        <Label>상품 정보</Label>
        <ProductInfo>
          <ProductImage src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg" alt="상품 이미지" />
          <ProductDetails>
            <strong>BBQ 양념치킨+크림치즈볼+콜라1.25L</strong>
            <span>BBQ</span>
            <b>상품가 29000원</b>
          </ProductDetails>
        </ProductInfo>
      </Section>

      <OrderButton>29000원 주문하기</OrderButton>
    </Wrapper>
  );
};

export default GiftForm;
