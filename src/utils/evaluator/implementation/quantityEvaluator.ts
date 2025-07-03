import { Evaluator } from "../rulesetEvaluator";

export function createNewQuantityEvaluator() {
  const quantityEvaluator = new Evaluator<string>("quantity");

  quantityEvaluator.addRule((q) => {
    return Boolean(q && q.length > 0 && parseInt(q) > 0);
  }, "구매 수량은 1개 이상이어야 합니다.");

  return quantityEvaluator;
}
