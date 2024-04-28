import { expect } from '@playwright/test';
import {InformationPageLocators} from '../Locator/InformationPageLocators';
import { BasePage } from './BasePage';

export class InformationPage extends BasePage {
    async expectingOfSiteTitle(): Promise<void> {
        const locators = InformationPageLocators.locatorsOfInformationPages;
        for (const locatorKey of Object.keys(locators)) {
            const locator = locators[locatorKey];
            await expect(this.page.locator(locator)).toBeVisible();
            console.log(locator);
        }
    }
}
