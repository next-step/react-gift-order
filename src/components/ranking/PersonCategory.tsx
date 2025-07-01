import styled from "@emotion/styled";
import type { personProps } from "./types";

const PersonCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;
const PersonBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
  gap: 4px;
`;
const PersonImage = styled.div<{ selected: boolean }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typography.subtitle2Bold};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.blue.blue700 : theme.colors.state.infoBackground};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.gray.gray00 : theme.colors.blue.blue400};
`;

const PersonCategory = ({ options, selected, onSelect }: personProps) => {
  return (
    <PersonCategoryWrapper>
      {options.map((o) => (
        <PersonBtn key={o.label} onClick={() => onSelect(o.label)}>
          <PersonImage selected={selected === o.label}>
            {o.emoji}
          </PersonImage>
          <p>{o.label}</p>
        </PersonBtn>
      ))}
    </PersonCategoryWrapper>
  );
};

export default PersonCategory;
