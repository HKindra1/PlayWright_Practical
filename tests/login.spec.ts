import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login to the secure area successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.expectSuccessfulLogin();
});
