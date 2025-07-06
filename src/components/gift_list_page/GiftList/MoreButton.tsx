import type { MoreButtonType } from '@/types/button';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 6rem;
  background-color: white;
`;

const Button = styled.button`
  ${({ theme }) => theme.typography.label2Regular};
  width: 30rem;
  height: 2.85rem;
  margin-top: ${({ theme }) => theme.spacing.spacing3};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 0.35rem;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const MoreButton = ({ isViewMore, setIsViewMore }: MoreButtonType) => {
  return (
    <Container>
      {isViewMore ? (
        <Button
          onClick={() => {
            setIsViewMore(!isViewMore);
          }}
        >
          접기
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsViewMore(!isViewMore);
          }}
        >
          더보기
        </Button>
      )}
    </Container>
  );
};
