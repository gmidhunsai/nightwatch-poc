module.exports = {
    "Validate movies - At the Box functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesAtTheBoxPage = browser.page.moviesAtTheBoxPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesAtTheBox();
        moviesAtTheBoxPage.validateHeader()
        moviesAtTheBoxPage.validateCurrentWindow();
        browser.end();
    },
    "Validate movies - On Demand functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesOnDemandPage = browser.page.moviesOnDemandPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesOnDemand();
        moviesOnDemandPage.validateHeader()
        moviesOnDemandPage.validateCurrentWindow();
        browser.end();
    },
    "Validate movies - Collections functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesCollectionsPage = browser.page.moviesCollectionsPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesCollections();
        moviesCollectionsPage.validateHeader()
        moviesCollectionsPage.validateCurrentWindow();
        browser.end();
    },
    "Validate movies - For Sale functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesForSalePage = browser.page.moviesForSalePage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesForSale();
        moviesForSalePage.validateHeader()
        moviesForSalePage.validateCurrentWindow();
        browser.end();
    }
}