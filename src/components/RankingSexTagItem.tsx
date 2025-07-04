import StyledRankingSexTagItemBtn from '@/styles/Home/RankingTagItem/StyledRankingSexTagItemBtn';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SEX_TAG_ITEM_LIST = ['전체', '여성이', '남성이', '청소년이'];
type SelectedOptions = '전체' | '여성이' | '남성이' | '청소년이';

const StyledRankingSexTagItem = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const RankingSexTagItem = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const [selected, setSelected] = useState<SelectedOptions>('전체');

  const isValidSelectedOption = (value: string): value is SelectedOptions => {
    return SEX_TAG_ITEM_LIST.includes(value);
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const value = params.get('SexTagSelected');
    if (value && isValidSelectedOption(value)) {
      setSelected(value);
    }
  }, [search]);
  const handleClick = (value: SelectedOptions) => {
    const params = new URLSearchParams(search);
    params.set('SexTagSelected', value);
    navigate(`?${params.toString()}`, { replace: true });
  };
  return (
    <>
      {SEX_TAG_ITEM_LIST.map((item: string) => {
        const tag = item as SelectedOptions;
        return (
          <StyledRankingSexTagItemBtn isSelected={selected === tag} key={tag} onClick={() => handleClick(tag)}>
            <StyledRankingSexTagItem className='ranking-sex-tag-item' />
            <p>{tag.toLowerCase()}</p>
          </StyledRankingSexTagItemBtn>
        );
      })}
    </>
  );
};

export default RankingSexTagItem;
