import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GiftItem from '@/components/gift-ranking/GiftItem';
import { GiftList } from '@/mock-data/GiftList';
import { GridWrapper, MoreButton, ButtonWrapper } from '@/components/gift-ranking/Grid.style';
import { useAuth } from '@/context/AuthContext';
import type { Gift } from '@/types/gift';

const GiftGrid = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleCount = () => {
    if (visibleCount >= 21) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => prev + 6);
    }
  };

  const visibleGifts: Gift[] = GiftList.slice(0, visibleCount);

  return (
    <>
      <GridWrapper>
        {visibleGifts.map((gift, index) => (
          <GiftItem
            key={gift.id}
            {...gift}
            rank={index + 1}
            onClick={() => {
              if (!isLoggedIn) {
                alert('로그인이 필요합니다.');
                navigate('/login');
                return;
              }
              navigate('/order', { state: { id: gift.id } });
            }}
          />
        ))}
      </GridWrapper>
      <ButtonWrapper>
        <MoreButton onClick={handleCount}>{visibleCount >= 21 ? '접기' : '더보기'}</MoreButton>
      </ButtonWrapper>
    </>
  );
};

export default GiftGrid;
