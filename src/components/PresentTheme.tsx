import styled from "@emotion/styled";

type PresentThemeType = {
  themeId: number;
  name: string;
  image: string;
};

const PresentTheme = ({ theme }: { theme: PresentThemeType }) => {
  return (
    <Flex>
      <Img src={theme.image} alt={theme.name} />
      <P>{theme.name}</P>
    </Flex>
  );
};

export default PresentTheme;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  cursor: pointer;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const P = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;
