import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Functionality', () => {


    test('should login with valid credentials', async ({ page }) => {
        //1. Navigate to the login page
        await page.goto('https://www.saucedemo.com/');
        //2. Enter username
        await page.fill(`//input[@id='user-name']`, "standard_user")
        //3. Enter password
        await page.fill(`//input[@id='password']`, "secret_sauce")
        //4. Click the login button
        await page.click(`//input[@id='login-button']`)
        //5. Verify that the user is logged in
        expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
        expect(await page.locator(`//div[text()='Swag Labs']`)).toBeVisible({timeout:30000});
    });

    test('should not login with invalid credentials', async ({ page }) => {
        const browser = await page.context().newPage();
        const loginPage = new LoginPage(browser);

        await loginPage.navigateToLogin('https://www.saucedemo.com/');
        await loginPage.enterUsername('invalid_user');
        await loginPage.enterPassword('invalid_password');
        await loginPage.clickLogin();
        expect(await page.url()).not.toBe('https://www.saucedemo.com/inventory.html');
    });
});