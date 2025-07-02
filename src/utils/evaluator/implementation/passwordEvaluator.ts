import { Evaluator } from "../rulesetEvaluator";

export function createNewPWEvaluator() {
  const passwordEvaluator = new Evaluator<string>("password");

  passwordEvaluator.addRule(
    (id) => Boolean(id && id.length > 0),
    "PW를 입력해주세요."
  );

  passwordEvaluator.addRule(
    (id) => Boolean(id.length > 7),
    "PW는 최소 8글자 이상이어야 합니다."
  );

  return passwordEvaluator;
}
