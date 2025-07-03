import { Evaluator } from "../rulesetEvaluator";

export function createNewPNEvaluator() {
  const phoneNumberEvaluator = new Evaluator<string>("phoneNumber");

  phoneNumberEvaluator.addRule(
    (pn) => Boolean(pn && pn.length > 0),
    "전화번호를 입력해주세요."
  );

  phoneNumberEvaluator.addRule((pn) => {
    const phoneRegex = /^010\d{8}$/;
    return phoneRegex.test(pn);
  }, "올바른 전화번호 형식이 아닙니다.");

  return phoneNumberEvaluator;
}
