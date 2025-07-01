import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';

const sectionFighting = css`
  padding: 0px 16px;
`;

const divFighting = css`
  width: 100%;
  border-radius: 1rem;
  background-color: ${theme.colors.yellow600};
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const pFightingUp = css`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${theme.colors.gray700};
  margin: 0px;
  text-align: left;
`;

const pFightingDown = css`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: ${theme.colors.textDefault};
  margin: 0px;
  text-align: left;
`;

const spacer24 = css`
  height: 24px;
`;

const AdBoard = () => {
  return (
    <>
      <div css={spacer24} />
      <section css={sectionFighting}>
        <div css={divFighting}>
          <p css={pFightingUp}>카카오테크 캠퍼스 3기 여러분</p>
          <p css={pFightingDown}>프론트엔드 2단계 과제 화이팅! 🎉</p>
        </div>
      </section>
    </>
  );
};

export default AdBoard;
