import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.locator(`//input[@id='user-name']`);
        this.inputPassword = page.locator(`//input[@id='password']`);
        this.btnLogin = page.locator(`//input[@id='login-button']`);
    }

    async navigateToLogin(url: string) {
        await this.page.goto(url);
    }
    async enterUsername(username: string) {
        await this.inputUsername.type(username);
    }
    async enterPassword(password: string) {
        await this.inputPassword.type(password);
    }
    async clickLogin() {
        await this.btnLogin.click();
    }



}