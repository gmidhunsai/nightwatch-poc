module.exports = {
    "Validate movies functionality": function(browser) {
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

    "Validate movies OnDemand functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesOnDemand = browser.page.movies()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesOnDemand();
        moviesOnDemand.validateHeader();
        browser.end();
    },

    "Validate movies Collections functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesCollections = browser.page.movies()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesCollections();
        moviesCollections.validateHeader();
        browser.end();
    },

    "Validate movies ForSale functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesForSale = browser.page.movies()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickMoviesForSale();
        moviesForSale.validateHeader();
        browser.end();
    }

    
}