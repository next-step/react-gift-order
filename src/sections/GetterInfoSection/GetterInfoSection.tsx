import { Controller, useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  SectionWrapper,
  SectionTitle,
  InputRow,
  InputLabel,
  Input,
  SectionDescription,
} from "@/sections/GetterInfoSection/GetterInfoSection.style";

interface GetterInfoSectionProps {
  index: number;
  onRemove?: () => void;
}
const GetterInfoSection = ({ index, onRemove }: GetterInfoSectionProps) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext<FormValues>();

  const prefix = `getters.${index}` as const;

  return (
    <>
      <SectionWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SectionTitle>{`받는 사람 ${index + 1}`}</SectionTitle>
          {onRemove && (
            <button
              type="button"
              onClick={onRemove}
              style={{
                background: "none",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          )}
        </div>
        <InputRow>
          <InputLabel>이름</InputLabel>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Controller
              name={`${prefix}.name`}
              control={control}
              defaultValue=""
              rules={{ required: "이름을 입력해주세요." }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="이름을 입력하세요."
                  style={
                    errors.getters?.[index]?.name
                      ? { borderColor: "#ff3b30" }
                      : {}
                  }
                />
              )}
            />
            {errors.getters?.[index]?.name && (
              <SectionDescription
                style={{ color: "#ff3b30", marginTop: 4, marginLeft: 4 }}
              >
                {errors.getters[index].name?.message}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>전화번호</InputLabel>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Controller
              name={`${prefix}.phone`}
              control={control}
              defaultValue=""
              rules={{
                required: "전화번호를 입력해주세요.",
                pattern: {
                  value: /^010\d{8}$/,
                  message: "올바른 전화번호 형식이 아니에요.",
                },
                validate: (val) => {
                  const phones = getValues("getters").map((g) => g.phone);
                  const dupCount = phones.filter((p) => p === val).length;
                  return dupCount === 1 || "중복된 전화번호가 있습니다.";
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="전화번호를 입력하세요."
                  style={
                    errors.getters?.[index]?.phone
                      ? { borderColor: "#ff3b30" }
                      : {}
                  }
                />
              )}
            />
            {errors.getters?.[index]?.phone && (
              <SectionDescription
                style={{ color: "#ff3b30", marginTop: 4, marginLeft: 4 }}
              >
                {errors.getters[index].phone?.message}
              </SectionDescription>
            )}
          </div>
        </InputRow>
        <InputRow>
          <InputLabel>수량</InputLabel>
          <Controller
            name={`${prefix}.quantity`}
            control={control}
            defaultValue={1}
            rules={{
              min: { value: 1, message: "1 이상의 수량을 입력해주세요." },
            }}
            render={({ field }) => <Input {...field} type="number" min={1} />}
          />
          {errors.getters?.[index]?.quantity && (
            <SectionDescription>
              {errors.getters[index].quantity?.message}
            </SectionDescription>
          )}
        </InputRow>
      </SectionWrapper>
    </>
  );
};

export default GetterInfoSection;
