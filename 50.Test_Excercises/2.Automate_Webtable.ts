import { test, expect } from '@playwright/test';

test('Verify Webtable Functionality', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/webtable');

  const rowCount = 10;
  const colCount = 7;

  for (let i = 1; i <= rowCount; i++) {
    for (let j = 1; j <= colCount; j++) {
      const cell = page.locator(`//table[@aria-label="Employee Management System table"]//tbody/tr[${i}]/td[${j}]`);
      const cellText = (await cell.textContent())?.trim();

      if (cellText === 'Rohan.Mehta') {
        console.log(`Found 'Rohan.Mehta' at Row ${i}, Column ${j}`);

        const checkbox = cell.locator('xpath=preceding-sibling::td[1]//input[@type="checkbox"]');
        await checkbox.click();
        break;
      }
    }
  }
  await page.pause(); 
});