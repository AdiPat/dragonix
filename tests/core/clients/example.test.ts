import { test, expect } from "@playwright/test";

test.describe("example", () => {
  test("passes", async () => {
    const result = 1;
    await expect(result).toEqual(1);
  });
});
