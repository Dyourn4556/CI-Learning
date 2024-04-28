import { expect } from '@playwright/test';
import {DeliveryPageLocators} from '../Locator/DeliveryPageLocators';
import { BasePage } from './BasePage';


export class DeliveryPage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(DeliveryPageLocators.deliveryPage_TITLE_XPATH)).toBeVisible;
    }
}