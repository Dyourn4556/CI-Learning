import { BasePage } from '../pageObject/PagesMethods/BasePage';
import { BaseUrl } from './BaseUrl.ts';

export class Provider extends BasePage{

    async goToResourсe(): Promise<void> {
        await this.page.goto(BaseUrl.Stylus_Url);
    }

    // static getRegisteredNumber(): string {
    //     return userRegisteredNumber;
    // }

}