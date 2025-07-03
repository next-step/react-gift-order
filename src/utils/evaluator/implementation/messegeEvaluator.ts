import { Evaluator } from "../rulesetEvaluator";

export function createNewMessegeEvaluator() {
  const messegeEvaluator = new Evaluator<string>("messege");

  messegeEvaluator.addRule(
    (messege) => Boolean(messege && messege.length > 0),
    "메세지를 입력해주세요."
  );

  return messegeEvaluator;
}
