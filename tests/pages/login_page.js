// Login page functionalities
const signinCommands = {  
  goToSite(browser) {
    browser
      .windowMaximize()
      .url('https://qaweb.accessredbox.net')
      .waitForElementVisible('body', 1000);
  },

  signIn(browser) {
    browser
      .click('@signInButton')
      .setValue('@userNameBox', 'pzsqaint@gmail.com')
      .setValue('@passwordBox', 'Redbox1!')
    browser.useXpath().click('@submitButton')
  },

  validateSignIn(browser) {
    browser.assert.containsText('@signInHeader', 'Hi PZS!')
  }
};


module.exports = {
  commands: [signinCommands],
  elements: 
  {
    signInButton: 
    { 
      selector: '#myredbox' 
    },
    userNameBox:
    {
      selector: '#userName'
    },
    passwordBox:
    {
      selector: '#password'
    },
    submitButton: 
    { 
      selector: '//*[@id="root"]/dialog[2]/div/div[1]/div[1]/form/button', 
      locateStrategy: 'xpath'
    },
    signInHeader:
    {
      selector: '//*[@id="root"]/header/div[1]/div/div[1]/button/div/',
      locateStrategy: 'xpath'
    }
  }
};