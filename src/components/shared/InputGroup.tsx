import styled from "@emotion/styled";
import type { ReactNode } from "react";

function InputGroup(props: { title: string; children: ReactNode }) {
  return (
    <InputGroupWrapper>
      <TitleP>{props.title}</TitleP>
      {props.children}
    </InputGroupWrapper>
  );
}

//Change calc values as well when changing width value
const InputGroupWrapper = styled.div`
  width: calc(100% - 2 * 15px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
`;
const TitleP = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  margin: 10px;
`;

export default InputGroup;
