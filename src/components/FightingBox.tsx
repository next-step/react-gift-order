import styled from "@emotion/styled";

type FightingBoxProps = {
  subMessage: string;
  titleMessage: string;
};

const FightingBox = ({ subMessage, titleMessage }: FightingBoxProps) => {
  return (
    <FightingBoxSection>
      <Box>
        <SubP>{subMessage}</SubP>
        <TitleP>{titleMessage}</TitleP>
      </Box>
    </FightingBoxSection>
  );
};

export default FightingBox;

const FightingBoxSection = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing6} ${theme.spacing.spacing4}`};
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  cursor: pointer;
`;

const SubP = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray700};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;

const TitleP = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) => theme.spacing.spacing0};
`;
