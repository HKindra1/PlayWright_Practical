import { test, expect } from '@playwright/test';

test('Verify Orange HRM - Webtable', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: /username/i }).fill('Admin');
  await page.getByRole('textbox', { name: /password/i }).fill('admin123');
  await page.getByRole('button', { name: /login/i }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox', { name: /first name/i }).fill('Himanshu');
    await page.getByRole('textbox', { name: /last name/i }).fill('Kumar');
    await page.getByRole('button', { name: 'Save' }).click();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');


  const table = page.locator('.oxd-table.orangehrm-employee-list');

  let matchingRow = table.locator('.oxd-table-card').filter({ hasText: 'Himanshu Kumar' });

  await matchingRow.locator('button.oxd-icon-button.oxd-table-cell-action--delete').click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();
  await page.pause();
});