import styled from "@emotion/styled";
import TargetButton from "./TargetButton";
import theme from "@src/styles/kakaoTheme";
import { target, type TargetType } from "../enumerators";
import { useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

function TargetSelectionPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState<TargetType>(() => {
    const q = searchParams.get("targetType") ?? "ALL";
    return Object.values(target).find((t) => t.query === q) ?? target.ALL;
  });

  return (
    <SelectionPanelWrapper>
      {Object.entries(target).map(([key, t]) => {
        let children: string | ReactNode = t.children;
        if (typeof children === "string" && children.includes("ReactNode")) {
          const param = children.split(":")[1];
          switch (param) {
            case "ALL":
              children = <AllText />;
              break;
          }
        }
        return (
          <TargetButton
            key={key}
            selected={selected === t}
            target={t}
            children={children}
            onClick={() => {
              setSelected(t);
              const newParams = new URLSearchParams(searchParams);
              newParams.set("targetType", t.query);
              setSearchParams(newParams);
            }}
          />
        );
      })}
    </SelectionPanelWrapper>
  );
}

const SelectionPanelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

function AllText() {
  return <InnerText color={theme.colors.blue.blue300}>ALL</InnerText>;
}

const InnerText = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 15px;
  font-weight: bold;
`;

export default TargetSelectionPanel;
