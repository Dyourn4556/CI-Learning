import { expect } from '@playwright/test';
import { HomePageLocators } from '../Locator/HomePageLocators';
import { BasePage } from './BasePage';


export class HomePage extends BasePage{

    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(HomePageLocators.site_TITLE_XPATH)).toBeVisible;
    }

    async goToEXchangePage(): Promise<void> {
        await this.page.locator(HomePageLocators.exchangePage_BTN_BTN_XPATH).click();
    }

    async goToDeliveryPage(): Promise<void> {
        await this.page.locator(HomePageLocators.deliveryPage_BTN_XPATH).click();
    }

    async goToLoyaltyProgramPage(): Promise<void> {
        await this.page.locator(HomePageLocators.loyaltyProgramPage_BTN_XPATH).click();
    }

    async goToWarrantyPage(): Promise<void> {
        await this.page.locator(HomePageLocators.warrantyPage_BTN_XPATH).click();
    }

    async goToQuestionsAndAnswersPage(): Promise<void> {
        await this.page.locator(HomePageLocators.questionsAndAnswersPage_BTN_XPATH).click();
    }

    async goToContactPage(): Promise<void> {
        await this.page.locator(HomePageLocators.contactPage_BTN_XPATH).click();
    }

    async goToInformationPage(): Promise<void> {
        await this.page.locator(HomePageLocators.informationPage_BTN_XPATH).hover();
    }

    async goToLoginModal(): Promise<void> {
        await this.page.locator(HomePageLocators.logIn_BTN_XPATH).click();
    }

    // Second layer

    async expectingOfSiteIcon(): Promise<void> {
        expect(this.page.locator(HomePageLocators.site_ICON_XPATH)).toBeVisible;
    }

    async goToBuyByCreditPage(): Promise<void> {
        await this.page.locator(HomePageLocators.buyByCreditPage_XPATH).click();
    }

    async goToBuyTradeInPage(): Promise<void> {
        await this.page.locator(HomePageLocators.buyTradeInPage_XPATH).click();
    }

    async goToPromotionsAndNewsPage(): Promise<void> {
        await this.page.locator(HomePageLocators.promotionsAndNewsPage_XPATH).click();
    }

    async goToMarkDownPage(): Promise<void> {
        await this.page.locator(HomePageLocators.markDownPage_XPATH).click();
    }

}