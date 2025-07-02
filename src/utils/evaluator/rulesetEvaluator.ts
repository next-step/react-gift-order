type Rule<T> = (element: T) => boolean;

type RuleSet<T> = {
  ruleName: string;
  rules: Rule<T>[];
  reasons: string[];
  lastReason: string | null;
};

export class Evaluator<T> implements RuleSet<T> {
  ruleName: string;
  rules: Rule<T>[];
  reasons: string[];
  lastReason: string | null;

  constructor(ruleName: string) {
    this.ruleName = ruleName;
    this.rules = [];
    this.reasons = [];
    this.lastReason = null;
  }

  addRule(rule: Rule<T>, reason: string) {
    this.rules.push(rule);
    this.reasons.push(reason);
  }

  evaluate(target: T): boolean {
    for (let i = 0; i < this.rules.length; i++) {
      const rule = this.rules[i];
      if (!rule(target)) {
        this.lastReason = this.reasons[i];
        return false;
      }
    }
    this.lastReason = null;
    return true;
  }

  reason(): string | null {
    return this.lastReason;
  }
}
