import styled from '@emotion/styled';
import { colors, fontSizes, spaces, radii, shadows } from '@/tokens/designTokens';
import products from '@/data/products';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Wrap = styled.section`
  padding: ${spaces.lg} ${spaces.md};
  background: ${colors.bg};
`;

const Title = styled.h2`
  font-size: ${fontSizes.h2};
  margin-bottom: ${spaces.md};
  color: ${colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${spaces.md};
`;

const Card = styled.div`
  background: ${colors.surface};
  border-radius: ${radii.sm};
  box-shadow: ${shadows.card};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: ${spaces.sm};
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spaces.sm};
`;

const BrandName = styled.span`
  font-size: ${fontSizes.body};
  color: ${colors.text};
`;

const GiftName = styled.h3`
  font-size: ${fontSizes.body};
  margin: 0 0 ${spaces.sm} 0;
  color: ${colors.text};
`;

const GiftPrice = styled.p`
  margin: 0;
  font-size: ${fontSizes.body};
  font-weight: 600;
  color: ${colors.primary};
`;

const BrandLogo = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: ${spaces.sm};
`;

export default function FeaturedGifts() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleProductClick = (productId: number) => {
    if (user) {
      navigate(`/order/${productId}`);
    } else {
      navigate('/login', { state: { from: `/order/${productId}` } });
    }
  };

  return (
    <Wrap>
      <Title>추천 선물</Title>
      <Grid>
        {products.map(item => (
          <Card key={item.id} onClick={() => handleProductClick(item.id)}>
            <Image src={item.imageURL} alt={item.name} />
            <Content>
              <BrandWrapper>
                <BrandLogo
                  src={item.brandInfo.imageURL}
                  alt={item.brandInfo.name}
                />
                <BrandName>{item.brandInfo.name}</BrandName>
              </BrandWrapper>
              <GiftName>{item.name}</GiftName>
              <GiftPrice>
                {item.price.sellingPrice.toLocaleString()}원
              </GiftPrice>
            </Content>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
