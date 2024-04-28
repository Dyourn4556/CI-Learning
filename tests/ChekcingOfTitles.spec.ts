import { test } from '@playwright/test';
import { HomePage } from '../src/pageObject/PagesMethods/HomePage.ts';
import { ExchangePage } from '../src/pageObject/PagesMethods/ExchangePage.ts';
import { DeliveryPage } from '../src/pageObject/PagesMethods/DeliveryPage.ts';
import { LoyaltyProgramPage } from '../src/pageObject/PagesMethods/LoyaltyProgramPage.ts';
import { InformationPage } from '../src/pageObject/PagesMethods/InformationPage.ts';
import { WarrantyPage } from '../src/pageObject/PagesMethods/WarrantyPage.ts';
import { ContactPage } from '../src/pageObject/PagesMethods/ContactPage.ts';
import { QuestionAndAnswersPage } from '../src/pageObject/PagesMethods/QuestionAndAnswersPage.ts';
import { Provider } from '../src/AddeadInfo/Provider.ts';


test.describe('Positive Login', () => {
    let homePage: HomePage;
    let exchangePage: ExchangePage;
    let deliveryPage: DeliveryPage;
    let loyaltyProgramPage: LoyaltyProgramPage;
    let warrantyPage: WarrantyPage;
    let questionAndAnswersPage: QuestionAndAnswersPage;
    let contactPage: ContactPage;
    let informationPage: InformationPage;
    let provider: Provider;


test('Visiting', async ({ page }) => {
  homePage = new HomePage(page);
  provider = new Provider(page);

  await provider.goToResource();

  await homePage.expectingOfSiteTitle();
  
});

test('Checking of titles', async ({ page }) => {

  homePage = new HomePage(page);
  exchangePage = new ExchangePage(page);
  deliveryPage = new DeliveryPage(page);
  loyaltyProgramPage = new LoyaltyProgramPage(page);
  warrantyPage = new WarrantyPage(page);
  questionAndAnswersPage = new QuestionAndAnswersPage(page);
  contactPage = new ContactPage(page);
  informationPage = new InformationPage(page);
  provider = new Provider(page);

  
  await provider.goToResource();
  await homePage.expectingOfSiteTitle();

  await homePage.goToEXchangePage();
  await exchangePage.expectingOfSiteTitle();

  await homePage.goToDeliveryPage();
  await deliveryPage.expectingOfSiteTitle();

  await homePage.goToLoyaltyProgramPage();
  await loyaltyProgramPage.expectingOfSiteTitle();

  await homePage.goToWarrantyPage();
  await warrantyPage.expectingOfSiteTitle();

  await homePage.goToQuestionsAndAnswersPage();
  await questionAndAnswersPage.expectingOfSiteTitle();

  await homePage.goToContactPage();
  await contactPage.expectingOfSiteTitle();

  await homePage.goToInformationPage();
  await informationPage.expectingOfSiteTitle();
  
})

})
