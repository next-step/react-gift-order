import { useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  SectionWrapper,
  SectionTitle,
  InputRow,
  Input,
  SectionDescription,
  SectionDivider,
} from "@/sections/SenderInfoSection/SenderInfoSection.style";

const SenderInfoSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <>
      <SectionDivider />
      <SectionWrapper>
        <SectionTitle>보내는 사람</SectionTitle>
        <InputRow>
          <Input
            {...register("senderName", { required: "이름을 입력해주세요." })}
            type="text"
            placeholder="이름을 입력하세요."
            style={errors.senderName ? { borderColor: "#ff3b30" } : {}}
          />
        </InputRow>
        <SectionDescription>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </SectionDescription>
        {errors.senderName && (
          <SectionDescription style={{ color: "#ff3b30" }}>
            {errors.senderName.message}
          </SectionDescription>
        )}
      </SectionWrapper>
    </>
  );
};

export default SenderInfoSection;
