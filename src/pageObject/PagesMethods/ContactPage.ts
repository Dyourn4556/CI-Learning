import { expect } from '@playwright/test';
import {ContactPageLocators} from '../Locator/ContactPageLocator';
import { BasePage } from './BasePage';


export class ContactPage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(ContactPageLocators.contactPage_TITLE_XPATH)).toBeVisible;
    }
}