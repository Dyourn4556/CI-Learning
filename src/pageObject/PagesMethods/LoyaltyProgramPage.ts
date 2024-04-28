import { expect } from '@playwright/test';
import {LoyaltyProgramPageLocators} from '../Locator/LoyaltyProgramPageLocators';
import { BasePage } from './BasePage';


export class LoyaltyProgramPage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(LoyaltyProgramPageLocators.page_TITLE_XPATH)).toBeVisible;
    }
}