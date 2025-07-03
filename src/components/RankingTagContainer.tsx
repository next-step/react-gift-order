import styled from '@emotion/styled';
import RankingSexTagItem from './RankingSexTagItem';
import RankingAnyTagItem from './RankingAnyTagItem';

const StyledRankingTagContainer = styled.div`
  width: 720px;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
const StyledRankingSexTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
const StyledRankingAnyTagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.spacing4} 0px ${({ theme }) => theme.spacing.spacing4} 0px;
  margin-bottom: 10px;
`;

const RankingTag = () => {
  return (
    <StyledRankingTagContainer>
      <StyledRankingSexTagContainer>
        <RankingSexTagItem />
      </StyledRankingSexTagContainer>
      <StyledRankingAnyTagContainer>
        <RankingAnyTagItem />
      </StyledRankingAnyTagContainer>
    </StyledRankingTagContainer>
  );
};

export default RankingTag;
