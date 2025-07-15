import { useFormContext } from "react-hook-form";
import { OrderCardData } from "@/mockdata/ordercardData";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  ImageListWrapper,
  Thumbnail,
  MainImageWrapper,
  MainImage,
  MessageInput,
  SectionDescription,
} from "@/sections/CardSelectionSection/CardSelectionSection.style";

const CardSelectionSection = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  const selectedIdx = watch("selectedIdx");

  return (
    <>
      <ImageListWrapper>
        {OrderCardData.map((item, idx) => (
          <Thumbnail
            key={item.id || idx}
            src={item.thumbUrl}
            selected={selectedIdx === idx}
            onClick={() => {
              setValue("selectedIdx", idx);
              setValue("cardMessage", OrderCardData[idx].defaultTextMessage);
            }}
          />
        ))}
      </ImageListWrapper>
      <MainImageWrapper>
        <MainImage src={OrderCardData[selectedIdx].imageUrl} />
        <MessageInput
          {...register("cardMessage", { required: "메시지를 입력해주세요." })}
          placeholder="메시지를 입력해주세요."
          style={errors.cardMessage ? { borderColor: "#ff3b30" } : {}}
        />
        {errors.cardMessage && (
          <SectionDescription
            style={{ color: "#ff3b30", margin: "4px 0 0 4px" }}
          >
            {errors.cardMessage.message}
          </SectionDescription>
        )}
      </MainImageWrapper>
    </>
  );
};

export default CardSelectionSection;
