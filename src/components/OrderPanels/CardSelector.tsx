import styled from "@emotion/styled";
import { cardTempleteMockData } from "@src/mock/cardTempleteMockData";
import { useEffect, useState } from "react";
import AdvancedTextArea from "../shared/AdvancedTextArea";
import { Controller, useFormContext } from "react-hook-form";

function CardSelector({ name }: { name: string }) {
  const cardTemplete = cardTempleteMockData;
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const { control, setValue } = useFormContext();

  useEffect(() => {
    setValue(name, cardTemplete[selectedCard].defaultTextMessage);
  }, [selectedCard, setValue, name]);

  return (
    <CardSelectorWrapper>
      <CardThumbnailWrapper>
        {cardTemplete.map((c, i) => {
          return (
            <CardThumbnail
              onClick={() => {
                setSelectedCard(i);
                setValue(name, cardTemplete[i].defaultTextMessage);
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
      <Controller
        name={name}
        control={control}
        rules={{ required: "메세지를 입력해주세요." }}
        render={({ field, fieldState }) => (
          <AdvancedTextArea
            {...field}
            placeholder="메세지를 입력해주세요."
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
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

export default CardSelector;
