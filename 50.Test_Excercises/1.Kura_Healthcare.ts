import { test, expect } from '@playwright/test';

test('Verify Webtable Functionality', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await expect(page).toHaveTitle(/CURA Healthcare Service/);

  await page.click('#btn-make-appointment');
  await page.fill('#txt-username', 'John Doe');
  await page.fill('#txt-password', 'ThisIsNotAPassword');
  await page.click('#btn-login');
  await expect(page.locator('h2')).toContainText('Make Appointment');
});