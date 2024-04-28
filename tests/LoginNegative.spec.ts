import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pageObject/PagesMethods/HomePage';
import { Provider } from '../src/AddeadInfo/Provider';
import { LoginPage } from '../src/pageObject/PagesMethods/LoginPage';
import { RegistrationPage } from '../src/pageObject/PagesMethods/RegistratioPage';
import { beforeEach } from 'node:test';
import { emptyNumber, userRegisteredNumber, wrongCode } from '../src/AddeadInfo/UserData';
import { getNumber } from '../src/DataGenerator/FakeUserData';



test.describe('NegativeSignUp', () => {

  let homePage: HomePage;
  let provider: Provider;
  let loginPage: LoginPage;
  let registrationPage: RegistrationPage;

  const wrongNumber = getNumber();


  test.beforeEach(async ({ page })=>{
      
  homePage = new HomePage(page);
  provider = new Provider(page);
  loginPage = new LoginPage(page);
  registrationPage = new RegistrationPage(page);

  })

test('Visiting', async ({ page }) => {

  await provider.goToResourсe();
  
  await homePage.expectingOfSiteIcon();
  await homePage.expectingOfSiteTitle();
});

test('Login without number', async ({ page }) => {

  await provider.goToResourсe();
  await homePage.expectingOfSiteTitle();
  
  await homePage.goToLoginModal();
  await loginPage.assertLoginModalTextIsVisible();

  await loginPage.typeNumber(emptyNumber);
  await loginPage.buttonNextIsntEnabled();

});

test('Login with unknown number', async ({ page }) => {
 
  await provider.goToResourсe();
  await homePage.expectingOfSiteTitle();

  await homePage.goToLoginModal();
  await loginPage.assertLoginModalTextIsVisible();

  await loginPage.goToRegistrationPageButton();

  // await loginPage.typeNumber(wrongNumber); 
  // await loginPage.sendNumberOrCodeButton();
  // await registrationPage.unknownUserText(); 

});

test('Login by number', async ({ page }) => {

  await provider.goToResourсe();
  await homePage.expectingOfSiteTitle();

  await homePage.goToLoginModal();
  await loginPage.assertLoginModalTextIsVisible();
  await loginPage.typeNumber(userRegisteredNumber);
  await loginPage.sendNumberOrCodeButton();

  await loginPage.assertCodeModalIsVisible();
  await loginPage.getWrongCode(wrongCode);

  await loginPage.sendNumberOrCodeButton();
  await loginPage.assertWrongCodeMessageIsVisible();
});

})
