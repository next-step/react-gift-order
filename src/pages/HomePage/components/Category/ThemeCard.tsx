import styled from '@emotion/styled';

const ThemeCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding-top: ${({ theme }) => theme.spacing[0]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;

  width: 8rem;
  height: 5rem;

  cursor: pointer;
`;

const ThemeImage = styled.img`
  width: 50px;
  height: 50px;
`;

const ThemeName = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
`;

function ThemeCard({ name, image }: { name: string; image: string }) {
  return (
    <ThemeCardContainer>
      <ThemeImage src={image} alt={name} />
      <ThemeName>{name}</ThemeName>
    </ThemeCardContainer>
  );
}

export default ThemeCard;
