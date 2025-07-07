import styled from "@emotion/styled";
const CardMessageWrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;
const TextAreaDiv = styled.div`

width:100%`
const TextArea = styled.textarea`
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
interface CardMessageFormProps {
  value: string;
  error: string | null;
  onChange: (field: string, value: string) => void;
  onBlur: (field: string) => void;
}
const CardMessage = ({
  value,
  error,
  onChange,
  onBlur,
}: CardMessageFormProps) => {
  return (
    <CardMessageWrapper>
      <TextAreaDiv>
        <TextArea
          value={value}
          onChange={(e) => onChange("cardmessage", e.target.value)}
          onBlur={() => onBlur("cardmessage")}
          placeholder="축하해요."
          name=""
          id=""
        ></TextArea>
        {error && <p>{error}</p>}
      </TextAreaDiv>
    </CardMessageWrapper>
  );
};

export default CardMessage;
