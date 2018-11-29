var conf = require('../../nightwatch.conf.js');
var loginPage = require('../pages/login_page.js')

module.exports = {
  'Login with valid credentials': function (browser) {
        //const loginPage = browser.page.login_page()
        loginPage.gotoSite(browser)
        loginPage.signIn(browser)
        loginPage.validateSignIn(browser)
        browser.end()
    }
  }