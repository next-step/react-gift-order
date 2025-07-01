import styled from '@emotion/styled';

interface ExpandButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandButton = ({ isExpanded, onToggle }: ExpandButtonProps) => {
  return (
    <Wrapper>
      <Button onClick={onToggle}>{isExpanded ? '접기' : '더보기'}</Button>
    </Wrapper>
  );
};

export default ExpandButton;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

const Button = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  cursor: pointer;
`;
