import styled from '@emotion/styled';
import PresentRankingItem from './PresentRankingItem';
import RankingTagContainer from './RankingTagContainer';
import { useState } from 'react';

const StyledPresentRankingContainer = styled.div`
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;

const StyledPrsentRankingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;
const StyledPresenetRankingAddItemBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: ${({ theme }) => theme.spacing.spacing2} 0px ${({ theme }) => theme.spacing.spacing10} 0px;
`;
const StyledPresenetRankingAddItemBtn = styled.button`
  width: 80%;
  height: 80%;
  padding: ${({ theme }) => theme.spacing.spacing5};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.palette.gray500};
`;
const StyledPresentRankingContainerTitle = styled.p`
  ${({ theme }) => theme.typography.title1Bold};
  padding: ${({ theme }) => theme.spacing.spacing2};
`;
const PresentRankingContainer = () => {
  const [isVisible, setisVisible] = useState(false);
  //기본값을 false라고 정의했더니 상품 랭킹 컴포넌트들이 많이 등장하게 되었다. -> 의도와는 다른 부분
  //왜 기본값을 false라고 주었는데도 true인 상태로 PresentRankingItem에 보내지게 될까요?
  //변수명을 isVisible이라고 했기에 삼항연산자에서 isVisible == true면 적게, false면 많이 출력되도록 해야했는데
  //이전에는 순서를 바꿔서 작성했음

  const handelToogle = () => {
    setisVisible((prev) => !prev);
  };

  return (
    <StyledPresentRankingContainer>
      <StyledPresentRankingContainerTitle>실시간 급상승 선물랭킹</StyledPresentRankingContainerTitle>
      <div>
        <RankingTagContainer></RankingTagContainer>
      </div>
      <StyledPrsentRankingDiv>
        <PresentRankingItem isVisible={isVisible}></PresentRankingItem>
      </StyledPrsentRankingDiv>
      <StyledPresenetRankingAddItemBtnDiv>
        <StyledPresenetRankingAddItemBtn onClick={handelToogle}>
          {isVisible ? '닫기' : '더보기'}
        </StyledPresenetRankingAddItemBtn>
      </StyledPresenetRankingAddItemBtnDiv>
    </StyledPresentRankingContainer>
  );
};

export default PresentRankingContainer;
