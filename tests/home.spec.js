import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("heading", { name: "Hello World" }).click();
});

test("has link", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Testing link" }).click();
  await expect(page).toHaveURL("https://www.google123.com");
});
