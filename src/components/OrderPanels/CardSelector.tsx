import styled from "@emotion/styled";
import { cardTempleteMockData } from "@src/mock/cardTempleteMockData";
import theme from "@src/styles/kakaoTheme";
import { useEffect, useState } from "react";
import AdvancedTextArea from "../shared/AdvancedTextArea";
import type { Evaluator } from "@src/utils/evaluator/rulesetEvaluator";
import type { StateHook } from "@src/hooks/stateHookType";

type CardSelectorProps = {
  evaluator: Evaluator<string>;
  validHookSet: StateHook<boolean>;
  reasonHookSet: StateHook<string | null>;
  valueHookSet: StateHook<string>;
};

function CardSelector({
  evaluator,
  validHookSet,
  reasonHookSet,
  valueHookSet
}: CardSelectorProps) {
  const cardTemplete = cardTempleteMockData;
  const [selectedCard, setSelectedCard] = useState<number>(0);

  useEffect(() => {
    valueHookSet.setValue(cardTemplete[selectedCard].defaultTextMessage);
  }, []);

  return (
    <CardSelectorWrapper>
      <CardThumbnailWrapper>
        {cardTemplete.map((c, i) => {
          return (
            <CardThumbnail
              onClick={() => {
                setSelectedCard(i);
                valueHookSet.setValue(cardTemplete[i].defaultTextMessage);
              }}
              key={c.id}
              src={c.thumbUrl}
              alt="card"
              selected={selectedCard === i}
            />
          );
        })}
      </CardThumbnailWrapper>
      <CardImage src={cardTemplete[selectedCard].imageUrl} alt="card" />
      <AdvancedTextArea
        placeholder="메세지를 입력해주세요."
        evaluator={evaluator}
        validHookSet={validHookSet}
        reasonHookSet={reasonHookSet}
        valueHookSet={valueHookSet}
      />
    </CardSelectorWrapper>
  );
}

// fix calc value as well when changing padding value
const CardSelectorWrapper = styled.div`
  width: calc(100% - 2 * 20px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
`;

const CardThumbnail = styled.img<{ selected: boolean }>`
  border-radius: 10px;
  border: ${({ selected }) => (selected ? "2px solid black" : "none")};
`;

const CardImage = styled.img`
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.35);
`;

const CardThumbnailWrapper = styled.div`
  height: 75px;
  padding: 10px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

const MessegeArea = styled.textarea`
  margin: 20px;
  flex: 1;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  transition: border-bottom 0.25s ease;

  &:focus {
    border: 1px solid ${theme.colors.gray.gray700};
  }
`;

export default CardSelector;
