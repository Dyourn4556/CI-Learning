import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { QuestionsAndAnswersPageLocators } from '../Locator/QuestionsAndAnswersPageLocators';


export class QuestionAndAnswersPage extends BasePage{
    async expectingOfSiteTitle(): Promise<void> {
        expect(this.page.locator(QuestionsAndAnswersPageLocators.page_TITLE_XPATH)).toBeVisible;
    }
}