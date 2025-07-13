import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import itemList from '../mocks/item_list.mock';
import useUser from '@/hooks/useUser';

const RealtimeRankWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
`;

const RealtimeRankTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title1Bold.lineHeight};
`;

// 첫 번째 selector 시작
const UserGroupSelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing2};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserGroupSelectorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const UserGroupSelectorBtn = styled.button<{ isSelected?: boolean }>`
  width: ${({ theme }) => theme.spacing.spacing11};
  height: ${({ theme }) => theme.spacing.spacing11};
  border: none;
  border-radius: 16px;
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.gray.gray00 : theme.colors.blue.blue400};
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue.blue700 : theme.colors.blue.blue100};
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Bold.lineHeight};
  cursor: pointer;
`;

const UserGroupSelectorTxt = styled.p<{ isSelected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Bold.lineHeight};
  color: ${({ theme, isSelected}) => isSelected ? theme.colors.blue.blue700 : theme.colors.gray.gray700};
  margin-top: 5px;
`;

// 두 번째 selector 시작
const RankingTypeSelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.colors.blue.blue200};
  background-color: ${({ theme }) => theme.colors.blue.blue100};
  border-radius: 7px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RankingTypeSelectorBtn = styled.div<{ isSelected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Bold.lineHeight};
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.blue.blue700 : theme.colors.blue.blue500};
  cursor: pointer;
`;

// Item 영역 시작
const RealtimeRankItemWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${({ theme }) => theme.spacing.spacing5};
  justify-items: center; 
`;

const RealtimeRankItem = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  cursor: pointer;
`;

const RealtimeItemImg = styled.img`
  width: 220px;
  height: auto;
  border-radius: 5px;
  position: relative;
`;

const RealtimeItemTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};

  padding-top: ${({ theme }) => theme.spacing.spacing2};
`;

const RealtimeItemSubTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray1000};

  padding-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const RealtimeItemPriceTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.body.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray1000};
`;

// 더보기버튼 시작
const ExtraBtnWrapper = styled.div`
  width: auto;
  height: auto;
  padding-top: ${({ theme }) => theme.spacing.spacing8};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExtraBtn = styled.button`
  width: 480px;
  height: ${({ theme }) => theme.spacing.spacing11};
  
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  border-radius: 5px;

  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  line-height: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  cursor: pointer;
`;

// 메인 컴포넌트 시작
function RealtimeGiftRank() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {getId} = useUser();

  const navigate = useNavigate();

  const userGroupMock = [
    {key: 0, group: 'ALL', emoji: 'ALL', label: '전체'},
    {key: 1, group: 'FEMALE', emoji: '👩🏻', label: '여성이'},
    {key: 2, group: 'MALE', emoji: '👨🏻', label: '남성이'},
    {key: 3, group: 'TEEN', emoji: '👦🏻', label: '청소년이'},
  ];

  const rankingTypeMock = [
    {key: 0, type: 'WANT', label: '받고 싶어한'},
    {key: 1, type: 'MANY', label: '많이 선물한'},
    {key: 2, type: 'WISH', label: '위시로 받은'},
  ];

  useEffect(() => {
    const savedGroup = sessionStorage.getItem('selectedGroup');
    const savedType = sessionStorage.getItem('selectedType');

    if (savedGroup) {
      setSelectedGroup(savedGroup);
    }

    if (savedType) {
      setSelectedType(savedType);
    }
  }, []);

  // 이벤트 핸들러들
  function handleGroupClick(group : string) {
    setSelectedGroup(group);
    sessionStorage.setItem('selectedGroup', group);
  }

  function handleTypeClick(type : string) {
    setSelectedType(type);
    sessionStorage.setItem('selectedType', type);
  }

  function handleCollapsedClick() {
    setIsCollapsed(!isCollapsed);
  }

  function handleItemClick(
    brandInfo: any,
    id: any,
    imageURL: any,
    name: any,
    price: any,
  ) {
    const userId = getId();
    
    if (userId !== '') {
      const query = new URLSearchParams({
        brandInfo: brandInfo.name,
        id: id.toString(),
        imageURL,
        name,
        price: price.basicPrice,
      }).toString();
      // sessionStorage.setItem(
      //   'selectedItem',
      //   JSON.stringify({ brandInfo, id, imageURL, name, price }),
      // );

      navigate(`/order?${query}`);
    } else {
      navigate('/login');
    }
  }

  return (
    <RealtimeRankWrapper>
      <RealtimeRankTitle>실시간 급상승 선물랭킹</RealtimeRankTitle>
      {/* 첫 번째 selector */}
      <UserGroupSelectorWrapper>
        {userGroupMock.map(({ key, group, emoji, label}) => (
          <UserGroupSelectorItemWrapper key={key} onClick={() => handleGroupClick(group)} >
            <UserGroupSelectorBtn isSelected={selectedGroup === group}>
              {emoji}
            </UserGroupSelectorBtn>
            <UserGroupSelectorTxt isSelected={selectedGroup === group}>
              {label}
            </UserGroupSelectorTxt>
          </UserGroupSelectorItemWrapper>
        ))}
      </UserGroupSelectorWrapper>

      {/* 두 번째 selector */}
      <RankingTypeSelectorWrapper>
        {rankingTypeMock.map(({ key, type, label}) => (
          <RankingTypeSelectorBtn
            key={key}
            onClick={() => handleTypeClick(type)}
            isSelected={selectedType === type}>
            {label}
          </RankingTypeSelectorBtn>
        ))}
      </RankingTypeSelectorWrapper>

      {/* 아이템 리스트 */}
      <RealtimeRankItemWrapper>
        {(isCollapsed ? itemList : itemList.slice(0, 6)).map((item) => (
        <RealtimeRankItem
          key={item.id}
          onClick={() =>
            handleItemClick(
              item.brandInfo,
              item.id,
              item.imageURL,
              item.name,
              item.price,
            )
          }
        >
          <RealtimeItemImg
            src={item.imageURL}
            alt={item.name}
          >
          </RealtimeItemImg>
          <RealtimeItemTxt>{item.brandInfo.name}</RealtimeItemTxt>
          <RealtimeItemSubTxt>{item.brandInfo.name}</RealtimeItemSubTxt>
          <RealtimeItemPriceTxt>
            {item.price.sellingPrice} 원
          </RealtimeItemPriceTxt>
        </RealtimeRankItem>
      ))}
      </RealtimeRankItemWrapper>

      {/* 더보기 접기 버튼 */}
      <ExtraBtnWrapper>
        <ExtraBtn
        onClick={() => {
          handleCollapsedClick();
        }}
        >
        {isCollapsed ? '접기' : '더보기'}
        </ExtraBtn>
      </ExtraBtnWrapper>
    </RealtimeRankWrapper>
  );
}

export default RealtimeGiftRank;
