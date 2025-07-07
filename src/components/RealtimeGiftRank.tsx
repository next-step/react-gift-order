import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import itemList from '../mocks/iteml_list.mock';

const RealtimeRankWrapper = styled.div`
  width: 95%;
  height: auto;
  margin: 0 20px;
  margin-top: 40px;
`;

const RealtimeRankTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
`;

const RealtimeRankNavWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
const RealtimeRankNavBtnTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RealtimeRankNavBtnStyle = styled.div<{ isSelected?: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['label1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['label1Bold'].lineHeight};
  cursor: pointer;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray[0] : theme.colors.blue[400]};
`;

function RealtimeRankNavBtn({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <>
      <RealtimeRankNavBtnStyle onClick={onClick} isSelected={isSelected}>
        {children}
      </RealtimeRankNavBtnStyle>
    </>
  );
}

const RealtimeRankNavTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const RealtimeRankNav2Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

const RealtimeRankNav2BtnStyle = styled.div<{ isSelected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.blue[500]};
  cursor: pointer;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[500]};
`;

function RealtimeRankNav2Btn({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <RealtimeRankNav2BtnStyle onClick={onClick} isSelected={isSelected}>
      {children}
    </RealtimeRankNav2BtnStyle>
  );
}

const RealtimeRankItemWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  box-sizing: border-box;
`;

const RealtimeItem = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RealtimeItemImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 190px;
  border-radius: 5px;
`;

const RealtimeItemGrayTitle = styled.p`
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};

  color: gray;
`;

const RealtimeItemTitle = styled.p`
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
`;

const RealtimeItemPriceTitle = styled.p`
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['label1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['label1Bold'].lineHeight};
`;

function RealtimeRankItemList({ collapsed }: { collapsed: boolean }) {
  const visibleItems = collapsed ? itemList.slice(0, 6) : itemList;

  return (
    <>
      {visibleItems.map((item) => (
        <RealtimeItem key={item.id}>
          <RealtimeItemImg
            src={item.imageURL}
            alt={item.name}
          ></RealtimeItemImg>
          <RealtimeItemGrayTitle>{item.brandInfo.name}</RealtimeItemGrayTitle>
          <RealtimeItemTitle>{item.brandInfo.name}</RealtimeItemTitle>
          <RealtimeItemPriceTitle>
            {item.price.sellingPrice} 원
          </RealtimeItemPriceTitle>
        </RealtimeItem>
      ))}
    </>
  );
}

const ExtraBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExtraBtn = styled.button`
  width: 500px;
  height: 40px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.typography['label1Bold'].fontSize};
  cursor: pointer;
`;

function RealtimeGiftRank() {
  const [selectedGroup, setSelectedGroup] = useState(''); // 전체, 여성이, 남성이, 청소년이중 하나를 선택했다는 것을 저장하기 위한 state
  const [selectRankingType, setSelectRankingType] = useState(''); // 받고 싶어한, 많이 선물한, 위시로 받은중 하나를 선택했다는 것을 저장하기 위한 state
  const [isCollapsed, setIsCollapsed] = useState(true); // 실시간 급상승 선물랭킹을 더보기 줄이기 할 수 있는 버튼의 상태를 저장하기 위한 state

  const rankGroup = [
    { group: 'ALL', label: 'ALL', text: '전체' },
    { group: 'FEMALE', label: '👩🏻', text: '여성이' },
    { group: 'MALE', label: '👨🏻', text: '남성이' },
    { group: 'TEEN', label: '👦🏻', text: '청소년이' },
  ];

  const rankTypes = [
    { type: 'WANT', label: '받고 싶어한' },
    { type: 'MANY', label: '많이 선물한' },
    { type: 'WISH', label: '위시로 받은' },
  ];

  useEffect(() => {
    const savedGrop = sessionStorage.getItem('selectedGroup');
    const savedType = sessionStorage.getItem('rankingType');

    if (savedGrop) {
      setSelectedGroup(savedGrop);
    }

    if (savedType) {
      setSelectRankingType(savedType);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('selectedGroup', selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    sessionStorage.setItem('rankingType', selectRankingType);
  }, [selectRankingType]);

  return (
    <>
      <RealtimeRankWrapper>
        <RealtimeRankTitle>실시간 급상승 선물랭킹</RealtimeRankTitle>
        <RealtimeRankNavWrapper>
          {rankGroup.map(({ group, label, text }) => (
            <RealtimeRankNavBtnTitleWrapper>
              <RealtimeRankNavBtn
                onClick={() => setSelectedGroup(group)}
                isSelected={selectedGroup === group}
              >
                {label}
              </RealtimeRankNavBtn>
              <RealtimeRankNavTitle>{text}</RealtimeRankNavTitle>
            </RealtimeRankNavBtnTitleWrapper>
          ))}
        </RealtimeRankNavWrapper>

        <RealtimeRankNav2Wrapper>
          {rankTypes.map(({ type, label }) => (
            <RealtimeRankNav2Btn
              key={type}
              onClick={() => setSelectRankingType(type)}
              isSelected={selectRankingType === type}
            >
              {label}
            </RealtimeRankNav2Btn>
          ))}
        </RealtimeRankNav2Wrapper>
        <RealtimeRankItemWrapper>
          <RealtimeRankItemList collapsed={isCollapsed}></RealtimeRankItemList>
        </RealtimeRankItemWrapper>
      </RealtimeRankWrapper>
      <ExtraBtnWrapper>
        <ExtraBtn
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? '더보기' : '접기'}
        </ExtraBtn>
      </ExtraBtnWrapper>
    </>
  );
}

export default RealtimeGiftRank;
