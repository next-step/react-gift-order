import styled from "@emotion/styled";

const Bar = styled.div`
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  text-align: center;
  padding: 16px;
  font-weight: bold;
  position: sticky;
  bottom: 0;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
`;

interface Props {
    totalPrice: number;
    isValid: boolean;
    onOrder: () => void;
}

export default function BottomOrderBar({ totalPrice, isValid, onOrder }: Props) {
    return (
        <Bar>
            <Button onClick={onOrder} disabled={!isValid}>
                {totalPrice.toLocaleString()}원 주문하기
            </Button>
        </Bar>
    );
}
