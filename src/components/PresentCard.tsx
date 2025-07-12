import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import templates from '@src/assets/mock/order_card_template';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { SenderSchema } from '@/hooks/useOrderFormComplete';

const coverStyle = css`
  width: 100%;
`;

const cardListBoxStyle = css`
  width: 100%;
  position: relative;
`;

const cardListStyle = css`
  width: 100%;
  overflow: scroll auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
`;

const oneCardBox = (isSelected: boolean) => css`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 3px solid ${isSelected ? theme.colors.blue500 : 'transparent'};
  cursor: pointer;
  &:first-of-type {
    margin-left: 1rem;
  }
  &:last-of-type {
    margin-right: 1rem;
  }
`;

const oneCardImg = css`
  width: 100%;
  height: 100%;
`;

const mainCardDiv = css`
  width: 100%;
  padding: 0px 1rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const mainCardBox = css`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const mainCardImg = css`
  width: 100%;
  height: 100%;
`;

const textDiv = css`
  width: 100%;
  padding: 0px 1rem;
  box-sizing: border-box;
`;

const textBox = css`
  width: 100%;
`;

const textareaStyle = css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.textDefault};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.borderDefault};
  &:focus {
    outline: none;
    border-color: ${theme.colors.gray700};
  }
`;

const inputErrorStyle = css`
  border-color: red;
`;

const space12 = css`
  height: ${theme.spacing.spacing3};
`;
const space40 = css`
  height: ${theme.spacing.spacing10};
`;

const space32 = css`
  height: ${theme.spacing.spacing8};
`;
const colorSpace8 = css`
  height: ${theme.spacing.spacing2};
  background-color: ${theme.colors.gray200};
`;

const errorText = css`
  font-size: ${theme.typography.label2Regular.fontSize};
  color: red;
  margin-top: 4px;
  margin-bottom: 0;
  text-align: left;
`;

const PresentCard = () => {
  const [selectedCard, setSelectedCard] = useState(templates[0]);

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<SenderSchema>();

  const handleCardClick = (card: (typeof templates)[0]) => {
    setSelectedCard(card);
    setValue('letter', card.defaultTextMessage, { shouldValidate: true });
  };

  return (
    <div css={coverStyle}>
      <div css={space12} />
      <div css={cardListBoxStyle}>
        <div css={cardListStyle}>
          {templates.map((card) => (
            <div
              key={card.id}
              css={oneCardBox(selectedCard.id === card.id)}
              onClick={() => handleCardClick(card)}
            >
              <img
                css={oneCardImg}
                alt={`${card.id}번 메시지 카드`}
                src={card.thumbUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div css={space12} />
      <div css={mainCardDiv}>
        <div css={mainCardBox}>
          <img
            css={mainCardImg}
            src={selectedCard.imageUrl}
            alt={`${selectedCard.id}번 메시지 카드`}
          />
        </div>
      </div>
      <div css={space40} />
      <div css={textDiv}>
        <div css={textBox}>
          <textarea
            css={[textareaStyle, errors.letter && inputErrorStyle]}
            {...register('letter')}
            placeholder="메시지를 입력해 주세요"
          />
          {errors.letter && <p css={errorText}>{errors.letter.message}</p>}
        </div>
      </div>
      <div css={space32} />
      <div css={colorSpace8} />
    </div>
  );
};

export default PresentCard;
