import { expect } from '@playwright/test';
import { LoginPageLocators } from '../Locator/LoginPageLocators';
import { BasePage } from './BasePage';
import { wrongCode } from '../../AddeadInfo/UserData';


export class LoginPage extends BasePage{

    async assertLoginModalTextIsVisible(): Promise<void> {
        expect(this.page.locator(LoginPageLocators.logInModalXpath)).toBeVisible;
    }

    async buttonNextIsntEnabled(): Promise<void> {
        expect(this.page.locator(LoginPageLocators.nextButtonXpath)).toBeDisabled;
    }
   
    async assertWrongCodeMessageIsVisible(): Promise<void> {   
        expect(this.page.locator(LoginPageLocators.wrongCodeMessageXpath)).toBeVisible;
    }

    async assertCodeModalIsVisible(): Promise<void> {
        expect(this.page.locator(LoginPageLocators.logInModalXpath)).toBeVisible;
    }

    async typeNumber(number: string): Promise<void> {  
        await this.page.locator(LoginPageLocators.numberFieldXpath).fill(number);
    }    

    async sendNumberOrCodeButton(): Promise<void> {
        this.page.locator(LoginPageLocators.nextButtonXpath).click();
    }

    async goToRegistrationPageButton(): Promise<void> {
        this.page.locator(LoginPageLocators.registrationButtonXpath).click();
    }

    async getWrongCode(code: string): Promise<void> {
        this.page.locator(LoginPageLocators.codeForLoginFieldXpath).fill(wrongCode);
    }

    async sendCodeAgainButton(): Promise<void> {
        this.page.locator(LoginPageLocators.sendAgainButtonXpath).click();
    }    

    async enterAnotherPhoneNumberButton(): Promise<void> {
        this.page.locator(LoginPageLocators.changingNumberButtonXpath).click();
    }   
    
}