import styled from '@emotion/styled';

const FriendBoxWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.semantic.backgroundFill,
  padding: theme.spacing.spacing4,
}));

const FriendBox = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.semantic.backgroundDefault,
  borderRadius: '12px',
  padding: `${theme.spacing.spacing3} ${theme.spacing.spacing4}`,
  cursor: 'pointer',
  boxShadow: `0 0 0 1px ${theme.colors.semantic.borderDefault} inset`,
}));

const PlusButton = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  marginRight: theme.spacing.spacing3,
  borderRadius: '10px',
  backgroundColor: theme.colors.semantic.kakaoYellow,
  transition: 'background-color .15s',
  ':hover': { backgroundColor: theme.colors.semantic.kakaoYellowHover },
  ':active': { backgroundColor: theme.colors.semantic.kakaoYellowPressed },
}));

const GuideText = styled.span(({ theme }) => ({
  fontSize: theme.typography.body1Bold.fontSize,
  fontWeight: theme.typography.body1Bold.fontWeight,
  lineHeight: theme.typography.body1Bold.lineHeight,
  color: theme.colors.semantic.textDefault,
}));

const FreiendSelector = () => {
  return (
    <FriendBoxWrapper>
      <FriendBox>
        <PlusButton>+</PlusButton>
        <GuideText>선물할 친구를 선택해주세요</GuideText>
      </FriendBox>
    </FriendBoxWrapper>
  );
};

export default FreiendSelector;
