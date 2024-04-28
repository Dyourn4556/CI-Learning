import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { WarrantyPageLocators } from '../Locator/WarrantyPageLocators';

export class WarrantyPage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(WarrantyPageLocators.page_TITLE_XPATH)).toBeVisible;
    }
}