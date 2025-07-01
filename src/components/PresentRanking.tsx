import styled from '@emotion/styled';
import { css, ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import productData from '../data/productData';
import { useEffect, useState } from 'react';

const Wrapper = styled.section`
  padding: 0px 16px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const MarginBox1 = styled.div`
  width: 100%;
  height: 20px;
  background-color: transparent;
`;

const SelectionBanner = styled.div`
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReceiverType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const TypeButton = styled.button`
  width: 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const ButtonLogo = styled.div<{ selected: boolean }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'rgb(255, 255, 255)' : 'rgb(170, 206, 253)')};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  background-color: ${({ selected }) => (selected ? 'rgb(33, 124, 249)' : 'rgb(239, 246, 255)')};
  transition:
    background-color 200ms,
    color 200ms;
`;

const TypeTitle = styled.p<{ selected: boolean }>`
  font-size: 0.875rem;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  line-height: 1.1875rem;
  margin: 0px;
  text-align: left;
  color: ${({ selected }) => (selected ? 'rgb(33, 124, 249)' : 'rgb(134, 139, 148)')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MarginBox2 = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`;

const PresentType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(239, 246, 255);
  border-radius: 0.5rem;
  padding: 12px 16px;
`;

const PresentTypeButton = styled.button<{ selected: boolean }>`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  line-height: 1.1875rem;
  color: ${({ selected }) => (selected ? 'rgb(33, 124, 249)' : 'rgb(133, 184, 253)')};
  transition:
    color 200ms,
    font-weight 200ms;
  cursor: pointer;
`;

const PresentDisplayContainer = styled.div`
  width: 100%;
`;

const PresentDisplay = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;

const NumberLogo = styled.span`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  min-width: 1.25rem;
  height: 1.25rem;
  min-height: 1.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 700;
  top: 0.25rem;
  left: 0.25rem;
  color: rgb(255, 255, 255);
  background-color: rgb(252, 106, 102);
`;

const ProductBox = styled.div`
  width: 100%;
  position: relative;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;

const SubProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(176, 179, 186);
  margin: 0px;
  text-align: left;
`;

const ProdudctName = styled.h6`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
  word-break: break-word;
`;

const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoreButton = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
`;

const MoreButtonFont = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  width: 100%;
  text-align: center;
`;

const PresentRanking: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedType, setSelectedType] = useState<'all' | 'female' | 'male' | 'teen'>('all');
  const [selectedPresentType, setSelectedPresentType] = useState<number>(0);

  useEffect(() => {
    const savedType = localStorage.getItem('selectedType') as
      | 'all'
      | 'female'
      | 'male'
      | 'teen'
      | null;
    const savedPresentType = localStorage.getItem('selectedPresentType');

    if (savedType) setSelectedType(savedType);
    if (savedPresentType) setSelectedPresentType(Number(savedPresentType));
  }, []);

  const handleTypeSelect = (type: typeof selectedType) => {
    setSelectedType(type);
    localStorage.setItem('selectedType', type);
  };

  const handlePresentTypeSelect = (index: number) => {
    setSelectedPresentType(index);
    localStorage.setItem('selectedPresentType', index.toString());
  };

  const {
    name,
    imageURL,
    price: { sellingPrice },
    brandInfo,
  } = productData;

  const productsToShow = showAll ? 21 : 6;

  const typeOptions = [
    { key: 'all', label: '전체', icon: 'ALL' },
    { key: 'female', label: '여성이', icon: '👩🏻' },
    { key: 'male', label: '남성이', icon: '👨🏻' },
    { key: 'teen', label: '청소년이', icon: '👦🏻' },
  ] as const;

  const presentTypes = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>실시간 급상승 선물랭킹</Title>
        <MarginBox1 />
        <SelectionBanner>
          <ReceiverType>
            {typeOptions.map((type) => (
              <TypeButton key={type.key} onClick={() => handleTypeSelect(type.key)}>
                <ButtonLogo selected={selectedType === type.key}>{type.icon}</ButtonLogo>
                <TypeTitle selected={selectedType === type.key}>{type.label}</TypeTitle>
              </TypeButton>
            ))}
          </ReceiverType>
        </SelectionBanner>
        <MarginBox2 />
        <PresentType>
          {presentTypes.map((text, index) => (
            <PresentTypeButton
              key={text}
              selected={selectedPresentType === index}
              onClick={() => handlePresentTypeSelect(index)}
            >
              {text}
            </PresentTypeButton>
          ))}
        </PresentType>
        <MarginBox2 />
        <PresentDisplayContainer>
          <PresentDisplay>
            {Array.from({ length: productsToShow }, (_, index) => (
              <ProductBox key={index}>
                <NumberLogo
                  css={css`
                    background-color: ${index <= 2 ? 'rgb(252, 106, 102)' : 'rgb(176, 179, 186)'};
                  `}
                >
                  {index + 1}
                </NumberLogo>
                <ProductInfo>
                  <ProductImage src={imageURL} alt={name}></ProductImage>
                  <div
                    css={css`
                      width: 100%;
                      height: 12px;
                      background-color: transparent;
                    `}
                  ></div>
                  <SubProductName>{brandInfo.name}</SubProductName>
                  <ProdudctName>{brandInfo.name}</ProdudctName>
                  <div
                    css={css`
                      width: 100%;
                      height: 4px;
                      background-color: transparent;
                    `}
                  ></div>
                  <ProductPrice>
                    {sellingPrice}
                    <span
                      css={css`
                        font-weight: 400;
                      `}
                    >
                      원
                    </span>
                  </ProductPrice>
                </ProductInfo>
              </ProductBox>
            ))}
          </PresentDisplay>
        </PresentDisplayContainer>
        <div
          css={css`
            width: 100%;
            height: 32px;
            background-color: transparent;
          `}
        ></div>
        <MoreButtonContainer>
          <MoreButton onClick={() => setShowAll(!showAll)}>
            <MoreButtonFont>{showAll ? '접기' : '더보기'}</MoreButtonFont>
          </MoreButton>
        </MoreButtonContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default PresentRanking;
