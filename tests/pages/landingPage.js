// Post Login page functionalities
const commands = {  
 
    validateSignIn: function () {
      this.waitForElementVisible('@signInHeader', 3000)
      return this.assert.containsText('@signInHeader', 'Hi PZS!')
    },

    clickSettings: function() {
      this.waitForElementVisible('@signInHeader', 3000)
      this.moveToElement('@signInHeader', 1, 1)
      return this.waitForElementVisible('@settingsButton', 3000)
        .click('@settingsButton')
    }
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      signInHeader: 'div.rb-header__greeting',
      settingsButton: 
      {
        selector: "//a[contains(text(),'Settings')]",
        locateStrategy: 'xpath'
      },
      newButton:
      {
        selector: "//span[contains(text(), 'New')]",
        locateStrategy: 'xpath'
      },
      moviesButton:
      {
        selector: "//span[contains(text(), 'Movies')]",
        locateStrategy: 'xpath'
      },
      gamesButton:
      {
        selector: "//span[contains(text(), 'Games')]",
        locateStrategy: 'xpath'
      },
      onDemandButton:
      {
        selector: "//span[contains(text(), 'On Demand')]",
        locateStrategy: 'xpath'
      },
      moreButton:
      {
        selector: "//span[contains(text(), 'More')]",
        locateStrategy: 'xpath'
      },
      newReleaseMoviesButton:
      {
        selector: "//div[contains(text(), 'NEW RELEASES')]/..//a[contains(text(), 'Movies')]",
        locateStrategy: 'xpath'
      },
      newReleaseGamesButton:
      {
        selector: "//div[contains(text(), 'NEW RELEASES')]/..//a[contains(text(), 'Games')]",
        locateStrategy: 'xpath'
      },
      comingSoonMoviesButton:
      {
        selector: "//div[contains(text(), 'COMING SOON')]/..//a[contains(text(), 'Movies')]",
        locateStrategy: 'xpath'
      },
      comingSoonGamesButton:
      {
        selector: "//div[contains(text(), 'COMING SOON')]/..//a[contains(text(), 'Games')]",
        locateStrategy: 'xpath'
      }
    }
  };