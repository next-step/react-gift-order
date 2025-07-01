import StyledRankingSexTagItemBtn from '@/styles/StyledRankingSexTagItemBtn';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const sexTagItemlist = ['전체', '여성이', '남성이', '청소년이'];

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
  const [selected, setSelected] = useState<string | null>('전체');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const value = params.get('SexTagSelected');
    if (value) {
      setSelected(value);
    }
  }, [search]);
  const handleClick = (value: string) => {
    const params = new URLSearchParams(search);
    params.set('SexTagSelected', value);
    navigate(`?${params.toString()}`, { replace: true });
  };
  return (
    <>
      {sexTagItemlist.map((item: string) => {
        return (
          <StyledRankingSexTagItemBtn isSelected={selected === item} key={item} onClick={() => handleClick(item)}>
            <StyledRankingSexTagItem className='ranking-sex-tag-item'></StyledRankingSexTagItem>
            <p>{item.toLocaleLowerCase()}</p>
          </StyledRankingSexTagItemBtn>
        );
      })}
    </>
  );
};

export default RankingSexTagItem;
