import { rankingDatas } from '@/data/rankingDatas';
import styled from '@emotion/styled';

const OrderButtonContainer = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellowPressed};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

interface OrderButtonProps {
  onClick: () => void;
  index: number;
}

const OrderButton = ({ onClick, index }: OrderButtonProps) => {
  return (
    <OrderButtonContainer onClick={onClick}>{rankingDatas[index - 1].price}</OrderButtonContainer>
  );
};

export default OrderButton;
