import { test, expect } from '@playwright/test';

test.describe('Positive Login', () => {


test('Visiting', async ({ page }) => {
  await page.goto('https://stylus.ua/uk/');

  await expect(page).toHaveTitle('Інтернет-магазин електроніки та побутової техніки STYLUS.UA ≡ Кращі ціни, знижки на товари в Україні');
});

test('Has a title', async ({ page }) => {
  await page.goto('https://stylus.ua/uk/');

 
  const btnOfLogIn = page.locator('.sc-eFtZDC .sc-fmlKft');

  await btnOfLogIn.click();


  const textOfLogInPage = page.locator('text="Вхід"');

  expect(textOfLogInPage).toBeTruthy();
});

test('Log in by number', async ({ page }) => {
    await page.goto('https://stylus.ua/uk/');
  
  
    const btnOfLogIn = page.locator('.sc-eFtZDC .sc-fmlKft');
  
    await btnOfLogIn.click();
  
  
    const textOfLogInPage = page.locator('text="Вхід"');
  
    expect(textOfLogInPage).toBeTruthy();
  
  
    const fieldOfNumberForSignUp = page.locator('//*[@id=":r0:"]');
  
    await fieldOfNumberForSignUp.fill('+38(099)5236450');


    const btnOfLogInAcceptationNumber = page.locator('//*[@aria-label="Далі"]');
  
    await btnOfLogInAcceptationNumber.click();
  
  
    const waitingOfCode = page.locator('text="Код з SMS відправленно"');
  
    expect(waitingOfCode).toBeTruthy();
  });

})
