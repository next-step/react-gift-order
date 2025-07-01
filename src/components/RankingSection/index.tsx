import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { rankingItems, genderItems, actionItems } from '../../data/ranking';
import ItemCard from '../common/ItemCard';
import * as S from './styles';

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // URL에서 필터 값 읽기 (기본값 설정)
  const selectedGender = searchParams.get('gender') || 'ALL';
  const selectedAction = searchParams.get('action') || '받고 싶어한';
  // 필터 변경 핸들러
  const handleGenderChange = (gender: string) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('gender', gender);
      return newParams;
    });
  };
  // 필터 변경 핸들러
  const handleActionChange = (action: string) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('action', action);
      return newParams;
    });
  };

  return (
    <S.Section>
      <S.Title>실시간 급상승 선물랭킹</S.Title>
      
      <S.FilterContainer>
        <S.GenderFilterContainer>
          {genderItems.map(option => (
            <S.GenderButton key={option.key} onClick={() => handleGenderChange(option.key)}>
              <S.GenderIconContainer isSelected={selectedGender === option.key}>
                {option.icon}
              </S.GenderIconContainer>
              <S.GenderText isSelected={selectedGender === option.key}>
                {option.label}
              </S.GenderText>
            </S.GenderButton>
          ))}
        </S.GenderFilterContainer>
        
        <S.ActionFilterContainer>
          {actionItems.map(action => (
            <S.ActionButton 
              key={action} 
              isSelected={selectedAction === action}
              onClick={() => handleActionChange(action)}
            >
              {action}
            </S.ActionButton>
          ))}
        </S.ActionFilterContainer>
      </S.FilterContainer>

      <S.Grid>
        {(isExpanded ? rankingItems : rankingItems.slice(0, 6)).map((item, index) => (
          <ItemCard 
            key={item.id} //key 간소화
            imageUrl={item.imageURL}
            title={item.name}
            subtitle={item.brandInfo.name}
            price={item.price.sellingPrice}
            rank={index + 1}
            variant="product"
          />
        ))}
      </S.Grid>

      <S.MoreButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '접기' : '더보기'}
      </S.MoreButton>
    </S.Section>
  );
};

export default RankingSection; 