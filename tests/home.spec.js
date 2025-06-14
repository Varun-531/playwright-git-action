import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:51731111");
  await page.getByRole("heading", { name: "useCallback Example" }).click();
});
