import styled from '@emotion/styled';

const Frame = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`;
const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  padding: ${({ theme }) => theme.spacing.spacing4};
  border-radius: ${({ theme }) => theme.spacing.spacing4};;
`;
const Strong = styled.span`
  font: ${({ theme }) => theme.typography.title2Bold};
`;

const Sub = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textSub};
`;

const Banner = () => {
    return (
        <Frame>
            <Box>
                <Sub>카카오테크 캠퍼스 3기 여러분</Sub>
                <Strong>프론트엔드 2단계 과제 화이팅! 🎉</Strong>
            </Box>
        </Frame>
    );
};
export default Banner;
