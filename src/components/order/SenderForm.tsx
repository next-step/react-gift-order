import styled from "@emotion/styled";
import { Padding3, PaddingMd } from "../padding/Padding";
import { PaddingSm } from "@/components/padding/Padding";
//TODO: 스타일링 만들어놓은 변수 이용해서하기
const SidePadding = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;
const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
const InputWrapper = styled.div`
  width: 100%;
`;
const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: rgb(42, 48, 56);
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: rgb(220, 222, 227);
`;
const NoticeText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(176, 179, 186);
  margin: 0px;
  text-align: left;
`;
interface SenderFormProps {
  value: string;
  error: string | null;
  onChange: (field: string, value: string) => void;
  onBlur: (field: string) => void;
}
const SenderForm = ({ value, error, onChange, onBlur }:SenderFormProps) => {
  return (
    <SidePadding>
      <Padding3 />
      <Title>보내는 사람</Title>
      <Padding3 />
      <InputWrapper>
        <NameInput
          value={value}
          onBlur={() => onBlur("sendername")}
          onChange={(e) => onChange("sendername", e.target.value)}
        ></NameInput>
        {error && <p>{error}</p>}
        <PaddingSm />
        <NoticeText>
          * 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.
        </NoticeText>
      </InputWrapper>
      <PaddingMd />
    </SidePadding>
  );
};

export default SenderForm;
