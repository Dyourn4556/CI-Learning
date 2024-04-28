import { expect } from '@playwright/test';
import { ExchangePageLocators } from '../Locator/ExchangePageLocators';
import { BasePage } from './BasePage';


export class ExchangePage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(ExchangePageLocators.exchangePage_TITLE_XPATH)).toBeVisible;
    }
}