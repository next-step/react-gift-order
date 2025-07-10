import { Gift } from '@/mock/Gift';
import { useState } from 'react';
import {
  BlankSpace,
  BrandImage,
  CategoryGroup,
  GiftRanKingSection,
  IconWrapper,
  Label,
  LoadMoreButton,
  LoadMoreButtonDiv,
  PeopleFilterButton,
  PeopleGroup,
  PeopleType,
  Price,
  ProductCard,
  ProductDiv,
  ProductGrid,
  ProductImage,
  ProductInfo,
  Title,
  WishFilterButton,
  WishGroup,
  WishType,
} from './GiftRanking.styled';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GIFTLENGTH = 6;

const GiftRanking = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [peopleType, setPeopleType] = useState<PeopleType>(PeopleType.ALL);
  const [wishType, setWishType] = useState<WishType>(WishType.WANT);

  const handlePeopleClick = (type: PeopleType) => {
    setPeopleType(type);
  };

  const handleWishClick = (type: WishType) => {
    setWishType(type);
  };

  const GiftList = Array.from({ length: 12 }, (_, i) => ({
    ...Gift,
    id: i + 1,
  }));

  const visibleCount = isExpanded ? GiftList.length : GIFTLENGTH;

  const shownProducts = GiftList.slice(0, visibleCount);

  const { user } = useAuth();
  const navigate = useNavigate();

  interface ProductItem {
    id: number;
    name: string;
    imageURL: string;
    price: {
      basicPrice: number;
      discountRate: number;
      sellingPrice: number;
    };
    brandInfo: {
      id: number;
      name: string;
      imageURL: string;
    };
  }

  const handleClickProduct = (item: ProductItem) => {
    if (!user) {
      navigate(`/login?redirect=/order?id=${item.id}`);
    } else {
      navigate(`/order?id=${item.id}`, { state: { item } });
    }
  };

  return (
    <GiftRanKingSection>
      <BlankSpace />
      <Title> 실시간 급상승 선물랭킹 </Title>
      <BlankSpace />
      <CategoryGroup>
        <PeopleGroup>
          <PeopleFilterButton
            active={peopleType === PeopleType.ALL}
            onClick={() => handlePeopleClick(PeopleType.ALL)}
          >
            <IconWrapper>ALL</IconWrapper>
            <Label>전체</Label>
          </PeopleFilterButton>
          <PeopleFilterButton
            active={peopleType === PeopleType.FEMALE}
            onClick={() => handlePeopleClick(PeopleType.FEMALE)}
          >
            <IconWrapper>👩🏻</IconWrapper>
            <Label>여성이</Label>
          </PeopleFilterButton>
          <PeopleFilterButton
            active={peopleType === PeopleType.MALE}
            onClick={() => handlePeopleClick(PeopleType.MALE)}
          >
            <IconWrapper>👨🏻</IconWrapper>
            <Label>남성이</Label>
          </PeopleFilterButton>
          <PeopleFilterButton
            active={peopleType === PeopleType.TEEN}
            onClick={() => handlePeopleClick(PeopleType.TEEN)}
          >
            <IconWrapper>👦🏻</IconWrapper>
            <Label>청소년이</Label>
          </PeopleFilterButton>
        </PeopleGroup>

        <BlankSpace />
        <WishGroup>
          <WishFilterButton
            active={wishType === WishType.WANT}
            onClick={() => handleWishClick(WishType.WANT)}
          >
            받고 싶어한
          </WishFilterButton>
          <WishFilterButton
            active={wishType === WishType.MANY_GIFT}
            onClick={() => handleWishClick(WishType.MANY_GIFT)}
          >
            많이 선물한
          </WishFilterButton>
          <WishFilterButton
            active={wishType === WishType.MANY_WISH}
            onClick={() => handleWishClick(WishType.MANY_WISH)}
          >
            위시로 받은
          </WishFilterButton>
        </WishGroup>
      </CategoryGroup>
      <BlankSpace />
      <ProductDiv>
        <ProductGrid>
          {shownProducts.map((item) => (
            <ProductCard
              key={item.id}
              onClick={() => handleClickProduct(item)}
            >
              <ProductImage src={item.imageURL} alt={item.name} />
              <BrandImage
                src={item.brandInfo.imageURL}
                alt={item.brandInfo.name}
              />
              <ProductInfo title={item.name}>{item.name}</ProductInfo>
              <Price>{item.price.sellingPrice.toLocaleString()} 원</Price>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductDiv>

      <BlankSpace />
      <LoadMoreButtonDiv>
        {GiftList.length > GIFTLENGTH && (
          <LoadMoreButton onClick={() => setIsExpanded((prev) => !prev)}>
            {isExpanded ? '접기' : '더보기'}
          </LoadMoreButton>
        )}
      </LoadMoreButtonDiv>

      <BlankSpace />
    </GiftRanKingSection>
  );
};

export default GiftRanking;
