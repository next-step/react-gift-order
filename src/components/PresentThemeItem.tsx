import { CATEGORY_DATA } from '@/assets/categoryData';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  padding: ${({ theme }) => theme.spacing.spacing2};
  width: 50px;
  height: 50px;
`;
const StyledP = styled.p`
  ${({ theme }) => theme.typography.label2Regular}
  margin: 3px;
`;
const StyledPresentThemeItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.spacing2};
`;
const PresentThemeItem = () => {
  return (
    <>
      {CATEGORY_DATA.map((item) => (
        <StyledPresentThemeItemDiv key={item.themeId} className='border'>
          <StyledImage src={item.image} alt={item.name} />
          <StyledP>{item.name}</StyledP>
        </StyledPresentThemeItemDiv>
      ))}
    </>
  );
};

export default PresentThemeItem;
