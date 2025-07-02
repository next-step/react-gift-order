/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray.gray300};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.semantic.textDefault};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
`;

const FriendSelector = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Button>
        <IconWrapper>
          <FaPlus size={12} color="black" />
        </IconWrapper>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </Button>
    </Wrapper>
  );
};

export default FriendSelector;
