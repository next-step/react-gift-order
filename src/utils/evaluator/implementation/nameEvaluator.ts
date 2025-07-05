import { Evaluator } from "../rulesetEvaluator";

export function createNewNameEvaluator() {
  const nameEvaluator = new Evaluator<string>("name");

  nameEvaluator.addRule(
    (name) => Boolean(name && name.length > 0),
    "이름을 입력해주세요."
  );

  return nameEvaluator;
}
