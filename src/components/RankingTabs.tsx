/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { palette } from '@/styles/theme';

const tabBar = css`
  display: flex;
  gap: 10px;
  padding: 16px 0;
`;

const tabBtn = (active: boolean) => css`
  flex: 1;
  padding: 15px 20px;
  margin: 10px;
  border-radius: 200px;
  font-size: 13px;
  font-weight: 700;
  background: ${active ?palette.blue00 : palette.blue00};
`;

export type GenderFilter = 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
export type SortFilter   = 'WANT' | 'GIVE' | 'RECEIVE';
interface Props {
  onChange: (gender: GenderFilter, sort: SortFilter) => void;
}

export const RankingTabs = ({ onChange }: Props) => {
  const [gender, setGender] = useState<GenderFilter>('ALL');
  const [sort , setSort]   = useState<SortFilter>('GIVE');

  const genderLabels: Record<GenderFilter, string> = {
    ALL: '전체',
    FEMALE: '여성이',
    MALE: '남성이',
    TEEN: '청소년이',
  };

  const sortLabels: Record<SortFilter, string> = {
    WANT: '받고 싶어한',
    GIVE: '많이 선물한',
    RECEIVE: '위시로 받은',
  };

  return (
    <>
      <div css={css`
      font-weight: 700;
      margin: 0 auto;
      font-size: 20px;
    `} >실시간 급상승 선물랭킹</div>

     <div css={{ display: 'flex' }}>
        {(Object.keys(genderLabels) as GenderFilter[]).map((key) => (
          <button
            key={key}
            css={tabBtn(gender === key)}
            onClick={() => {
              setGender(key);
              onChange(key, sort);
            }}
          >
            {genderLabels[key]}
          </button>
        ))}
      </div>

      <div
        css={{
          display: 'flex',
          background: palette.blue00,
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {(Object.keys(sortLabels) as SortFilter[]).map((key) => (
          <button
            key={key}
            css={{
              flex: 1,
              padding: '10px 0',
              fontWeight: 700,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              color: sort === key ? palette.blue00 : palette.white,
            }}
            onClick={() => {
              setSort(key);
              onChange(gender, key);
            }}
          >
            {sortLabels[key]}
          </button>
        ))}
      </div>
      
    </>

  );
};