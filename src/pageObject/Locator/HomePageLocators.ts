export class HomePageLocators {
    
    //Locators of head
    static readonly exchangePage_BTN_BTN_XPATH: string = "//*[@title='Обмін']";
    static readonly deliveryPage_BTN_XPATH: string = "//*[@title='Доставка і оплата']";
    static readonly loyaltyProgramPage_BTN_XPATH: string = "//*[@title='Програма лояльності']";
    static readonly warrantyPage_BTN_XPATH: string = "//*[@title='Гарантія']";
    static readonly questionsAndAnswersPage_BTN_XPATH: string = "//*[@title='Питання та відповіді']";
    static readonly contactPage_BTN_XPATH: string = "//*[@title='Контакти']";
    static readonly informationPage_BTN_XPATH: string = "//li[contains(text(), 'Інформація')]";

    static readonly logIn_BTN_XPATH: string = "//*[@class='sc-gkdAvr cziozl']";

    static readonly site_TITLE_XPATH: string = "Інтернет-магазин електроніки та побутової техніки STYLUS.UA ≡ Кращі ціни, знижки на товари в Україні";


    //Locators of second layer
    static readonly site_ICON_XPATH: string = "//*[@alt='Stylus logo']";

    static readonly buyByCreditPage_XPATH: string = "//*[@class='sc-gsTDqH bHLLMz']";
    static readonly buyTradeInPage_XPATH: string = "//*[@class='sc-pGaPU NcrSR'] //* [@class='sc-gsTDqH bHLLMz']";
    static readonly promotionsAndNewsPage_XPATH: string = "//*[@class='sc-pGaPU NcrSR'] //*[@class='sc-gsTDqH gbsQoh']";
    static readonly markDownPage_XPATH: string = "//*[@class='sc-pGaPU NcrSR'] //*[@class='sc-gsTDqH gsvxkW']";

    //Locators of third layer 
    static readonly catalogOfGoods_BTN_XPATH: string = "//*[@class='sc-bBXqJn hyhive']";

    static readonly search_FIELD_XPATH: string = "//*[@type='search']";
    static readonly search_BTN_XPATH: string = "//*[@type='submit']";

    static readonly compare_BTN_XPATH: string = "//*[@class='sc-jONmMj fCMopK']";
    static readonly likedGoods_BTN_XPATH: string = "//*[@class='sc-jONmMj fCMopK'] //*[@alt='compare']";
    static readonly wishList_BTN_XPATH: string = "//*[@class='sc-jONmMj fCMopK'] //*[@alt='wishlist']";

}