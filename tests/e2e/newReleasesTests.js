module.exports = {
    "Validate new release - movies functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        newReleasesMoviesPage = browser.page.newReleasesMoviesPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickNewReleaseMovies();
        newReleasesMoviesPage.validateHeader();
        browser.end();
    },

    "Validate new release - games functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        newReleasesGamesPage = browser.page.newReleasesGamesPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickNewReleaseGames();
        newReleasesGamesPage.validateHeader();
        browser.end();
    },

    "Validate new coming soon - movies functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        newComingSoonMoviesPage = browser.page.newComingSoonMoviesPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickNewComingSoonMovies();
        newComingSoonMoviesPage.validateHeader();
        //newComingSoonMoviesPage.validateWishlistText();
        browser.end();
    },

    "Validate new coming soon - games functionality": '' + function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        newComingSoonGamesPage = browser.page.newComingSoonGamesPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.clickNewComingSoonGames();
        newComingSoonGamesPage.validateHeader();
        browser.end();
    }
}