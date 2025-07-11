import styled from '@emotion/styled';


export const GiftRanKingSection = styled.div`
  padding: 0px 16px;
  width: 100%;
`;

export const BlankSpace = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  width: 100%;
  text-align: left;
`;

export const CategoryGroup = styled.div`
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PeopleGroup = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 8px;
`;

export const WishGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(239, 246, 255);
  border-radius: 0.5rem;
  padding: 12px 16px;
`;

interface FilterButtonProps {
  active: boolean;
}

export const PeopleFilterButton = styled.button<FilterButtonProps>`
  width: 3.7rem;
  height: 3.7rem;
  padding: 10px 16px;
  border: none;
  border-radius: 20px;
  font-size: 10px;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? 'rgb(33, 124, 249)' : 'rgb(239, 246, 255)'};
  color: ${({ active }) => (active ? 'white' : '#333')};
  transition: background-color 0.2s;
`;

export const WishFilterButton = styled.button<FilterButtonProps>`
  padding: 10px 16px;
  font-size: 12px;
  cursor: pointer;
  background-color: rgb(239, 246, 255);
  color: ${({ active }) =>
    active ? 'rgb(33, 124, 249)' : 'rgb(133, 184, 253);'};
  transition: background-color 0.2s;
`;

export const Label = styled.p`
  margin: 4px 0 0;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const ProductDiv = styled.div`
  width: 100%;
`;

export const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;

export const ProductCard = styled.div`
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const BrandImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 4px auto;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const LoadMoreButtonDiv = styled.button`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: white;
`;
export const LoadMoreButton = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
`;

export const ProductInfo = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 6px 0 0;
`;
