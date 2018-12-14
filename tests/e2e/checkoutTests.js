module.exports = {
    "Validate movies - On Demand - checkout functionality": function(browser) {
        signInPage = browser.page.loginPage()
        landingPage = browser.page.landingPage()
        moviesOnDemandPage = browser.page.moviesOnDemandPage()
        moviesOnDemandSelectionPage = browser.page.moviesOnDemandSelectionPage()
        moviesOnDemandCheckoutPage = browser.page.moviesOnDemandCheckoutPage()
        paymentConfirmationPage = browser.page.paymentConfirmationPage()
        browser.maximizeWindow()

        signInPage.navigate()
        .signInWithCredentials('purnasai.redbox@gmail.com','Redbox1!');
        landingPage.clickMoviesOnDemand();
        moviesOnDemandPage.validateHeader()
        moviesOnDemandPage.clickMovieListing()
        moviesOnDemandSelectionPage.validateHeader()
        moviesOnDemandSelectionPage.clickRentOnDemand()
        moviesOnDemandSelectionPage.clickRentHDPopup()
        moviesOnDemandCheckoutPage.validateHeader()
        moviesOnDemandCheckoutPage.validateSectionText()
        moviesOnDemandCheckoutPage.validateSummaryText()
        moviesOnDemandCheckoutPage.verifyAgeCheckBox()
        moviesOnDemandCheckoutPage.checkoutPayment()
        paymentConfirmationPage.validateHeader()
        browser.end();
    }
}