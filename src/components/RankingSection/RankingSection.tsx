/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdFace2, MdFace, MdFace6 } from 'react-icons/md';

import { mockItems } from '../../data/mockItems';

import {
  sectionWrapper,
  tabRow,
  subTabRow,
  cardGrid,
  moreButton,
} from './RankingSection.style';

import TabButton from '../Shared/TabButton'
import RankingCard from '../Shared/RankingCard';

const genderTabs = [
  { label: '전체', icon: <FaUser /> },
  { label: '여성이', icon: <MdFace2 /> },
  { label: '남성이', icon: <MdFace /> },
  { label: '청소년이', icon: <MdFace6 /> },
];

const giftTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const RankingSection = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialGender = searchParams.get('gender') || '전체';
  const initialGiftType = searchParams.get('giftType') || '받고 싶어한';

  const [gender, setGender] = useState(initialGender);
  const [giftType, setGiftType] = useState(initialGiftType);
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilters = (newGender: string, newGiftType: string) => {
    setSearchParams({ gender: newGender, giftType: newGiftType });
    setGender(newGender);
    setGiftType(newGiftType);
    setIsExpanded(false);
  };

  useEffect(() => {
    setGender(initialGender);
    setGiftType(initialGiftType);
  }, [initialGender, initialGiftType]);

  const visibleItems = isExpanded ? mockItems : mockItems.slice(0, 6);
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <section css={sectionWrapper}>
      <h2 css={css`margin-bottom: ${theme.spacing[3]};`}>실시간 급상승 선물랭킹</h2>

      <div css={tabRow}>
        {genderTabs.map(({ label, icon }) => (
          <TabButton
            key={label}
            active={gender === label}
            theme={theme}
            onClick={() => updateFilters(label, giftType)}
            icon={icon}
            label={label}
          />
        ))}
      </div>

      <div css={subTabRow}>
        {giftTabs.map((label) => (
          <TabButton
            key={label}
            active={giftType === label}
            theme={theme}
            onClick={() => updateFilters(gender, label)}
            label={label}
            isSubTab
          />
        ))}
      </div>

      <div css={cardGrid}>
        {visibleItems.map((item, i) => (
          <RankingCard
            key={item.id}
            rank={i + 1}
            imageURL={item.imageURL}
            brand={item.brand}
            name={item.name}
            price={item.price}
            theme={theme}
          />
        ))}
      </div>

      <button onClick={toggleExpanded} css={moreButton(theme)}>
        {isExpanded ? '접기' : '더보기'}
      </button>
    </section>
  );
};

export default RankingSection;
