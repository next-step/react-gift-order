import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import theme from '@src/styles/tokens/index';
import product from '@src/assets/mock/itemList_mock';
import { useAuthNavigation } from '@/hooks/useAuthNavigation';

const targets = [
  { key: 'ALL', label: '전체', icon: 'ALL' },
  { key: 'FEMALE', label: '여성이', icon: '👩🏻' },
  { key: 'MALE', label: '남성이', icon: '👨🏻' },
  { key: 'TEEN', label: '청소년이', icon: '👦🏻' },
];

const sortOptions = [
  { key: 'MANY_WISH', label: '받고 싶어한' },
  { key: 'MANY_RECEIVE', label: '많이 선물한' },
  { key: 'MANY_WISH_RECEIVE', label: '위시로 받은' },
];

const targetButton = css`
  width: 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
`;

const buttonDivBase = css`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  transition: background-color 200ms;
`;

const buttonPBase = css`
  font-size: 0.8rem;
  line-height: 1.1875rem;
  margin: 0px;
  text-align: left;
`;

const sectionRealtimeStyle = css`
  padding: 0px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const h3Style = css`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const buttonList = css`
  display: flex;
  border-radius: 1rem;
  background-color: white;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const targetList = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const selectBox = css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${theme.colors.blue100};
  border-radius: 0.5rem;
  padding: 12px 16px;
  gap: 8px;
`;

const selectContent = css`
  background: none;
  border: none;
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${theme.colors.blue500};
  transition:
    color 200ms,
    font-weight 200ms;
  cursor: pointer;
`;

const selectedContent = css`
  background: none;
  border: none;
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: ${theme.colors.blue700};
  transition:
    color 200ms,
    font-weight 200ms;
  cursor: pointer;
`;

const rankingDiv = css`
  width: 100%;
`;

const rankingGrid = css`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;

const rankingItemBox = css`
  width: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const rankingNumberWins = css`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  top: 0.25rem;
  left: 0.25rem;
  color: #fff;
  background-color: ${theme.colors.red600};
`;

const rankingNumber = css`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  top: 0.25rem;
  left: 0.25rem;
  color: #fff;
  background-color: ${theme.colors.textSub};
`;

const rankingItemInfo = css`
  width: 100%;
`;

const rankingItemImg = css`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;

const rankingItemBrand = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${theme.colors.textSub};
  margin: 0px;
  text-align: left;
`;

const rankingItemName = css`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

const rankingItemPrice = css`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
  word-break: break-word;
`;

const moreButtonCover = css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const moreButton = css`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.textDisabled};
  background: none;
  cursor: pointer;
`;

const moreButtonText = css`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  width: 100%;
  text-align: center;
`;
const spacer40 = css`
  height: 40px;
`;
const spacer16 = css`
  height: 16px;
`;
const spacer12 = css`
  height: 12px;
`;
const spacer4 = css`
  height: 4px;
`;
const spacer32 = css`
  height: 32px;
`;
const spacer20 = css`
  height: 20px;
`;

const Realtime = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramTarget = searchParams.get('targetType');
  const paramSort = searchParams.get('rankType');

  const DEFAULT_TARGET = 'ALL';
  const DEFAULT_SORT = 'MANY_WISH';

  const initialTarget = paramTarget || DEFAULT_TARGET;
  const initialSort = paramSort || DEFAULT_SORT;

  const [selectedTarget, setSelectedTarget] = useState(initialTarget);
  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [userHasSelected, setUserHasSelected] = useState(false);

  const { navigateIfLoggedIn } = useAuthNavigation();
  useEffect(() => {
    if (!userHasSelected && [...searchParams].length === 0) {
      if (selectedTarget === DEFAULT_TARGET && selectedSort === DEFAULT_SORT) {
        setSearchParams({});
      } else {
        setSearchParams({
          targetType: selectedTarget,
          rankType: selectedSort,
        });
      }
    } else {
      setSearchParams({
        targetType: selectedTarget,
        rankType: selectedSort,
      });
    }
  }, [selectedTarget, selectedSort, userHasSelected, setSearchParams]);

  const [expanded, setExpanded] = useState(false);
  const displayedCount = expanded ? 21 : 6;

  const getButtonDivStyle = (key: string) => css`
    ${buttonDivBase};
    color: ${key === selectedTarget ? 'white' : theme.colors.blue400};
    background-color: ${key === selectedTarget
      ? theme.colors.blue700
      : theme.colors.blue100};
  `;
  const getButtonPStyle = (key: string) => css`
    ${buttonPBase};
    font-weight: ${key === selectedTarget ? 700 : 400};
    color: ${key === selectedTarget
      ? theme.colors.blue700
      : theme.colors.gray700};
  `;

  const handleSelectTarget = (key: string) => {
    setSelectedTarget(key);
    setUserHasSelected(true);
  };

  const handleSelectSort = (key: string) => {
    setSelectedSort(key);
    setUserHasSelected(true);
  };

  const goOrder = (key: number) => {
    navigateIfLoggedIn(`/order/${key}`);
  };

  return (
    <>
      <div css={spacer40} />
      <section css={sectionRealtimeStyle}>
        <h3 css={h3Style}>실시간 급상승 선물랭킹</h3>
        <div css={spacer20} />
        <div css={buttonList}>
          <div css={targetList}>
            {targets.map((target) => (
              <button
                key={target.key}
                css={targetButton}
                onClick={() => handleSelectTarget(target.key)}
                type="button"
              >
                <div css={getButtonDivStyle(target.key)}>{target.icon}</div>
                <p css={getButtonPStyle(target.key)}>{target.label}</p>
              </button>
            ))}
          </div>
        </div>
        <div css={spacer16} />
        <div css={selectBox}>
          {sortOptions.map(({ key, label }) => (
            <button
              key={key}
              css={key === selectedSort ? selectedContent : selectContent}
              onClick={() => handleSelectSort(key)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <div css={spacer16} />
        <section css={rankingDiv}>
          <div css={rankingGrid}>
            {[...Array(displayedCount)].map((_, i) => {
              const rank = i + 1;
              return (
                <div
                  css={rankingItemBox}
                  key={rank}
                  onClick={() => {
                    goOrder(rank);
                  }}
                >
                  <span css={rank <= 3 ? rankingNumberWins : rankingNumber}>
                    {rank}
                  </span>
                  <div css={rankingItemInfo}>
                    <img
                      css={rankingItemImg}
                      src={product.imageURL}
                      alt={product.name}
                    />
                    <div css={spacer12} />
                    <p css={rankingItemBrand}>{product.brandInfo.name}</p>
                    <h6 css={rankingItemName}>{product.name}</h6>
                    <div css={spacer4} />
                    <p css={rankingItemPrice}>
                      {product.price.sellingPrice}
                      <span style={{ fontWeight: 400 }}>원</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div css={spacer32} />
          <div css={moreButtonCover}>
            <button
              css={moreButton}
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
            >
              <p css={moreButtonText}>{expanded ? '접기' : '더보기'}</p>
            </button>
          </div>
        </section>
      </section>
      <div css={spacer40} />
    </>
  );
};

export default Realtime;
