import StyledRankingAnyTagItem from '@/styles/Home/RankingTagItem/StyledRankingAnyTagItem';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ANY_TAG_ITEM_LIST = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const RankingAnyTagItem = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [selected, setSelected] = useState<string | null>('받고 싶어한');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const value = params.get('AnyTagSelected');
    if (value) {
      setSelected(value);
    }
  }, [search]);

  const handleClick = (value: string) => {
    const params = new URLSearchParams(search);
    params.set('AnyTagSelected', value);
    navigate(`?${params.toString()}`, { replace: true });
  };

  return (
    <>
      {ANY_TAG_ITEM_LIST.map((item: string) => {
        return (
          <StyledRankingAnyTagItem
            key={item}
            className='ranking-any-tag-item'
            onClick={() => handleClick(item)}
            isSelected={selected === item}
          >
            {item.toLowerCase()}
          </StyledRankingAnyTagItem>
        );
      })}
    </>
  );
};

export default RankingAnyTagItem;
