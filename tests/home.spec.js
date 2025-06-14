import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("heading", { name: "useCallback Example" }).click();
});
