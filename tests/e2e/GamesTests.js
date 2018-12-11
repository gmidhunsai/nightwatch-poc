module.exports = {
    "Validate Games Playstation functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        gamesPlayStation = browser.page.games()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickGamesPlayStation();
        gamesPlayStation.validateHeader();
        browser.end();
    },

    "Validate Games Xbox functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        gamesXbox = browser.page.games()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickGamesXbox();
        gamesXbox.validateHeader();
        browser.end();
    },

    "Validate Games NintendoSwitch functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        gamesNSW = browser.page.games()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickGamesNintendoSwitch();
        gamesNSW.validateHeader();
        browser.end();
    },

    "Validate Games ForSale functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        gamesForSale = browser.page.games()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickGamesForSale();
        gamesNSW.validateHeader();
        browser.end();
    },
   
}