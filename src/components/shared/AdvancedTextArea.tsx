import styled from "@emotion/styled";
import type { StateHook } from "@src/hooks/stateHookType";
import theme from "@src/styles/kakaoTheme";
import type { Evaluator } from "@src/utils/evaluator/rulesetEvaluator";

type AdvancedTextAreaProps = {
  placeholder: string;
  evaluator: Evaluator<string>;
  validHookSet: StateHook<boolean>;
  reasonHookSet: StateHook<string | null>;
  valueHookSet: StateHook<string>;
};

function AdvancedTextArea({
  placeholder,
  evaluator,
  validHookSet,
  reasonHookSet,
  valueHookSet
}: AdvancedTextAreaProps) {
  return (
    <AdvancedTextAreaWrapper>
      <TextArea
        valid={validHookSet.value}
        placeholder={placeholder}
        onChange={(e) => {
          const valid = evaluator.evaluate(e.target.value);
          const reason = evaluator.reason();
          if (!valid) {
            reasonHookSet.setValue(reason);
          } else {
            reasonHookSet.setValue(null);
          }
          validHookSet.setValue(valid);
          valueHookSet.setValue(e.target.value);
        }}
        value={valueHookSet.value}
      />
      <ErrorMessege>{reasonHookSet.value}</ErrorMessege>
    </AdvancedTextAreaWrapper>
  );
}

const AdvancedTextAreaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea<{ valid: boolean }>`
  flex: 1;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  transition: border-bottom 0.25s ease;

  border-color: ${({ valid }) =>
    valid ? theme.colors.gray.gray500 : theme.colors.red.red600};
`;

const ErrorMessege = styled.p`
  margin: 5px;
  margin-left: 10px;
  font-size: 12px;
  color: ${theme.colors.red.red600};
`;

export default AdvancedTextArea;
