import { Evaluator } from "../rulesetEvaluator";

export function createNewMessageEvaluator() {
  const messageEvaluator = new Evaluator<string>("message");

  messageEvaluator.addRule(
    (message) => Boolean(message && message.length > 0),
    "메세지를 입력해주세요."
  );

  return messageEvaluator;
}
