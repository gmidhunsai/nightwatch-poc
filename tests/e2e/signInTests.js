module.exports = {
    
    /*'Login with valid credentials': function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn()
        landingPage.validateSignIn()

        browser.end()
    },*/

    'Validate my account' : function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        settingsPage = browser.page.settingsPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signIn();
        landingPage.validateSignIn()
        browser.url(browser.launchUrl + 'account/')
        settingsPage.validateSettings()

        browser.end()
    }
}