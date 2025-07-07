import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GiftItem from '@/components/gift-ranking/GiftItem';
import { GiftList } from '@/components/gift-ranking/GiftList';
import { GridWrapper, MoreButton, ButtonWrapper } from '@/components/gift-ranking/Grid.style';

const GiftGrid = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleCount = () => {
    if (visibleCount >= 21) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => prev + 6);
    }
  };

  const visibleGifts = GiftList.slice(0, visibleCount);

  return (
    <>
      <GridWrapper>
        {visibleGifts.map((gift) => (
          <GiftItem key={gift.rank} {...gift} onClick={() => navigate('/order')} />
        ))}
      </GridWrapper>
      <ButtonWrapper>
        <MoreButton onClick={handleCount}>{visibleCount >= 21 ? '접기' : '더보기'}</MoreButton>
      </ButtonWrapper>
    </>
  );
};

export default GiftGrid;
