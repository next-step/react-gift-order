import { Evaluator } from "../rulesetEvaluator";

export function createNewIDEvaluator() {
  const idEvaluator = new Evaluator<string>("id");

  idEvaluator.addRule(
    (id) => Boolean(id && id.length > 0),
    "ID를 입력해주세요."
  );

  idEvaluator.addRule((id) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(id);
  }, "ID는 이메일 형식으로 입력해주세요.");

  return idEvaluator;
}
