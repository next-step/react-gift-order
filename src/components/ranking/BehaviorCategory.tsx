import styled from "@emotion/styled";
import type { behaviorProps } from './types';

const BehaviorCategoryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.state.infoBackground};
  color: ${({ theme }) => theme.colors.blue.blue400};
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
`;
const BehaviorTextButton = styled.button<{selected:boolean}>`
  width: 100%;

  ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ selected, theme }) => selected?theme.colors.state.info:theme.colors.blue.blue400};
  display: flex;
  justify-content: center;
  transition:
    color 200ms,
    font-weight 200ms;
`;

const BehaviorCategory = ({ options, selected, onSelect }: behaviorProps) => {
  return (
    <BehaviorCategoryWrapper>
      {options.map((o) => (
        <BehaviorTextButton key={o} onClick={()=>onSelect(o)} selected={selected===o}>{o}</BehaviorTextButton>
      ))}
      
    </BehaviorCategoryWrapper>
  );
};

export default BehaviorCategory
 