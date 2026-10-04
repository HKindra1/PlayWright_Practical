import type { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite): void {
    // Intentionally empty: keeps the reporter functional without extra output.
  }

  onTestBegin(test: TestCase, result: TestResult): void {
    // Intentionally empty.
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    // Intentionally empty.
  }

  onEnd(result: FullResult): void {
    // Intentionally empty.
  }
}

export default CustomReporter;
