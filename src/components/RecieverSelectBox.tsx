import styled from '@emotion/styled';
import { IoAdd } from 'react-icons/io5';
const Frame = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing11};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  padding: ${({ theme }) => theme.spacing.spacing4};
  
  border-radius: ${({ theme }) => theme.spacing.spacing3};
`;

const IconWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.spacing.spacing2};
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
    font: ${({ theme }) => theme.typography.subtitle1Bold};
    color: ${({ theme }) => theme.colors.semantic.textDeafult};
`;

const ReceiverSelectBox = () => {
  return (
    <Frame>
      <Box>
        <IconWrap>
          <IoAdd />
        </IconWrap>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </Box>
    </Frame>
  );
};
export default ReceiverSelectBox;
