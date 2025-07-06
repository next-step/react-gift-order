import StyledRankingAnyTagItem from '@styles/Home/RankingTagItem/StyledRankingAnyTagItem';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ANY_TAG_ITEM_LIST = ['받고 싶어한', '많이 선물한', '위시로 받은'];
type AnyTagItemTypeList = '받고 싶어한' | '많이 선물한' | '위시로 받은';

const RankingAnyTagItem = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [selected, setSelected] = useState<AnyTagItemTypeList>('받고 싶어한');

  const isValidSelectedOption = (value: string): value is AnyTagItemTypeList => {
    return ANY_TAG_ITEM_LIST.includes(value);
  };
  useEffect(() => {
    const params = new URLSearchParams(search);
    const value = params.get('AnyTagSelected');
    if (value && isValidSelectedOption(value)) {
      setSelected(value);
    }
  }, [search]);

  const handleClick = (value: AnyTagItemTypeList) => {
    const params = new URLSearchParams(search);
    params.set('AnyTagSelected', value);
    navigate(`?${params.toString()}`, { replace: true });
  };

  return (
    <>
      {ANY_TAG_ITEM_LIST.map((item: string) => {
        const tag = item as AnyTagItemTypeList;
        return (
          <StyledRankingAnyTagItem key={tag} className='ranking-any-tag-item' onClick={() => handleClick(tag)} isSelected={selected === tag}>
            {tag.toLowerCase()}
          </StyledRankingAnyTagItem>
        );
      })}
    </>
  );
};

export default RankingAnyTagItem;
