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
  Price,
  ProductCard,
  ProductDiv,
  ProductGrid,
  ProductImage,
  ProductInfo,
  Title,
  WishFilterButton,
  WishGroup,
} from './GiftRanking.styled';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GIFTLENGTH = 6;

const enum PeopleType {
  ALL = 'ALL',
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  TEEN = 'TEEN',
}

const enum WishType {
  WANT = 'WANT',
  MANY_GIFT = 'MANY_GIFT',
  MANY_WISH = 'MANY_WISH',
}

const peopleFilterOptions = [
  {type : PeopleType.ALL, icon : 'ALL', label : '전체'},
  {type : PeopleType.FEMALE, icon : '👩🏻', label : '여성이'},
  {type : PeopleType.MALE, icon : '👨🏻', label : '남성이'},
  {type : PeopleType.TEEN, icon : '👦🏻', label : '청소년'}
]

const WishFilterOption = [
  {type : WishType.WANT, text : '받고싶어한'},
  {type : WishType.MANY_GIFT, text : '많이 선물한'},
  {type : WishType.MANY_WISH, text : '위시로 받은'},
]


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

          {peopleFilterOptions.map(({type, icon, label}) => (
            <PeopleFilterButton
              active={peopleType === type}
              onClick={() => handlePeopleClick(type)}
            >
              <IconWrapper>{icon}</IconWrapper>
              <Label>{label}</Label>
            </PeopleFilterButton>
          ))}
        </PeopleGroup>

        <BlankSpace />
        <WishGroup>
          {WishFilterOption.map(({type, text})=>(
            <WishFilterButton
            active={wishType === type}
            onClick={() => handleWishClick(type)}
          >
            {text}
          </WishFilterButton>
          ))}


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
