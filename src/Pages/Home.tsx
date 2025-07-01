import Header from '@/components/Header';
import styled from '@emotion/styled';
import { FiPlus } from 'react-icons/fi';
import { mockThemeList } from '@/mocks/themeListMock';
import ThemeItem from '@/components/ThemeItem';
import type { ThemeItemType } from '@/types/theme';
import RankingSection from '@/components/RankingSection';
import { SectionContainer, SectionTitle } from '@/components/Common/SectionLayout';

const Home = () => {
  return (
    <>
      <Header title="선물하기" />
      <HomeContainer>
        <SelectFriendSection>
          <SelectFriend>
            <FiPlusIcon size={16} />
            <SelectFriendText>선물할 친구를 선택해 주세요.</SelectFriendText>
          </SelectFriend>
        </SelectFriendSection>
        <SectionContainer>
          <SectionTitle>선물 테마</SectionTitle>
          <ThemeGrid>
            {mockThemeList.slice(0, 15).map((item: ThemeItemType) => (
              <ThemeItem key={item.themeId} {...item} />
            ))}
          </ThemeGrid>
        </SectionContainer>

        <CheerBannerSection>
          <CheerBanner>
            <CheerBannerLabel>카카오테크 캠퍼스 3기 여러분</CheerBannerLabel>
            <CheerBannerText>프론트엔드 2단계 과제 화이팅!🎉</CheerBannerText>
          </CheerBanner>
        </CheerBannerSection>
        <RankingSection />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.main`
  padding-top: 56px;
  width: 100%;
  max-width: 720px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  overflow-y: auto;
  margin: 0 auto;
`;

const SelectFriendSection = styled.section`
  background-color: ${({ theme }) => theme.colors.gray200};
  width: 100%;
  display: flex;
  padding: 16px 12px;
`;

const SelectFriend = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 18px;
  max-width: 720px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.spacing4}`};
  gap: ${({ theme }) => theme.spacing.spacing2};
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;

const FiPlusIcon = styled(FiPlus)`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 16px;
  width: 36px;
  height: 36px;
  padding: ${({ theme }) => theme.spacing.spacing1};
`;

const SelectFriendText = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.subtitle1Bold.size};
    font-weight: ${theme.font.subtitle1Bold.weight};
    line-height: ${theme.font.subtitle1Bold.lineHeight};
  `}
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
  margin-top: ${({ theme }) => theme.spacing.spacing4};
`;

const CheerBannerSection = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  width: 100%;
  display: flex;
  padding: 16px;
`;

const CheerBanner = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  cursor: pointer;
  border-radius: 18px;
  align-items: flex-start;
  max-width: 720px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.spacing3}`};
  gap: ${({ theme }) => theme.spacing.spacing2};
  border: none;
  flex-direction: column;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
  gap: 2px;
`;

const CheerBannerLabel = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: 600;
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
  color: ${({ theme }) => theme.colors.gray700};
`;

const CheerBannerText = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.body2Regular.size};
    font-weight: 600;
    line-height: ${theme.font.body2Regular.lineHeight};
    `}
`;
