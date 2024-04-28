export class LoginPageLocators {

    static readonly numberFieldXpath: string =  "//input[@type='text']";

    static readonly nextButtonXpath: string = "//button[@class='sc-iJuWdM MMFFA']";

    static readonly registrationButtonXpath: string = "//button[@aria-label='Зареєструватися']";  

    static readonly logInModalXpath: string = "//div[@class='sc-fQnAwa dTrsyS']";  


    // NEXT STEP OF REGISTRATION

    static readonly wrongCodeMessageXpath: string = "//div[@class='sc-hwinwt kqXhlb']";

    static readonly codeForLoginFieldXpath: string = "//input[@type='text']";

    static readonly sendAgainButtonXpath: string = "//button[@aria-label='Вислати код ще раз']";

    static readonly changingNumberButtonXpath: string = "//button[@aria-label='Ввести інший номер телефону']";

}