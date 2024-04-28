import { expect } from '@playwright/test';
import { RegistrationPageLocators } from '../Locator/RegistrationPageLocators';
import { BasePage } from './BasePage';
import { getEmail, getFirstName, getLastName, getNumber } from '../../DataGenerator/FakeUserData';


export class RegistrationPage extends BasePage{
    public static readonly Name: string = getFirstName();
    public static readonly SurName: string = getLastName();
    public static readonly Email: string = getEmail();
    public static readonly Number: string = getNumber();


    async expectingOfSiteText(): Promise<void> {
        expect(this.page.locator(RegistrationPageLocators.page_TITLE_XPATH)).toBeVisible;
    }

    async unknownUserText(): Promise<void> {
        expect(this.page.locator(RegistrationPageLocators.unknownUser_Text_XPATH)).toBeVisible;
    }

    async getUserName(Name: string): Promise<void> {
        this.page.locator(RegistrationPageLocators.name_FIELD_XPATH).fill(Name);
    }

    async getUserSurName(SurName: string): Promise<void> {
        this.page.locator(RegistrationPageLocators.surName_FIELD_XPATH).fill(SurName);
    }

    async getUserEmeil(Email: string): Promise<void> {
        this.page.locator(RegistrationPageLocators.email_FIELD_XPATH).fill(Email);
    }

    async getUserNumder(Number: string): Promise<void> {
        this.page.locator(RegistrationPageLocators.number_FIELD_XPATH).fill(Number);
    }

    async clickRegistrationButton(): Promise<void> {
        this.page.locator(RegistrationPageLocators.registration_BTN_XPATH).click();
    }

    async returnToLogin(): Promise<void> {
        this.page.locator(RegistrationPageLocators.login_BTN_XPATH).click();
    }
    
    async getLicense(): Promise<void> {
        this.page.locator(RegistrationPageLocators.license_LINK_XPATH).click();
    }
    
}