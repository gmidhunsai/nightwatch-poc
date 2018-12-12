// Post Login page functionalities
const commands = {  
 
    validateSignIn: function () {
      this.waitForElementVisible('@signInHeader', 10000)
      return this.assert.containsText('@signInHeader', 'Hi PZS!')
    },

    clickSettings: function() {
      this.waitForElementVisible('@signInHeader', 10000)
      this.moveToElement('@signInHeader', 1, 1)
      return this.waitForElementVisible('@settingsButton', 10000)
        .click('@settingsButton')
    },

    clickNewReleaseMovies: function() {
      this.waitForElementVisible('@newButton', 10000)
        .moveToElement('@newButton', 1, 1)
        .waitForElementVisible('@newReleaseMoviesButton', 10000)
        .click('@newReleaseMoviesButton')
    },

    clickNewReleaseGames: function() {
      this.waitForElementVisible('@newButton', 10000)
        .moveToElement('@newButton', 1, 1)
        .waitForElementVisible('@newReleaseGamesButton', 10000)
        .click('@newReleaseGamesButton')
    },

    clickNewComingSoonMovies: function() {
      this.waitForElementVisible('@newButton', 10000)
        .moveToElement('@newButton', 1, 1)
        .waitForElementVisible('@comingSoonMoviesButton', 10000)
        .click('@comingSoonMoviesButton')
    },
    
    clickNewComingSoonGames: function() {
      this.waitForElementVisible('@newButton', 10000)
        .moveToElement('@newButton', 1, 1)
        .waitForElementVisible('@comingSoonGamesButton', 10000)
        .click('@comingSoonGamesButton')
    },

    
    clickMoviesAtTheBox: function() {
      this.waitForElementVisible('@moviesButton', 10000)
        .moveToElement('@moviesButton', 1, 1)
        .waitForElementVisible('@moviesAtTheBoxButton', 10000)
        .click('@moviesAtTheBoxButton')
    },

    clickMoviesOnDemand: function() {
      this.waitForElementVisible('@moviesButton', 10000)
        .moveToElement('@moviesButton', 1, 1)
        .waitForElementVisible('@moviesOnDemandButton', 10000)
        .click('@moviesOnDemandButton')
    },

    clickMoviesCollections: function() {
      this.waitForElementVisible('@moviesButton', 10000)
        .moveToElement('@moviesButton', 1, 1)
        .waitForElementVisible('@moviesCollectionsButton', 10000)
        .click('@moviesCollectionsButton')
    },

    clickMoviesForSale: function() {
      this.waitForElementVisible('@moviesButton', 10000)
        .moveToElement('@moviesButton', 1, 1)
        .waitForElementVisible('@moviesForSaleButton', 10000)
        .click('@moviesForSaleButton')
    },

    clickGamesPlayStation: function() {
      this.waitForElementVisible('@gamesButton', 10000)
        .moveToElement('@gamesButton', 1, 1)
        .waitForElementVisible('@gamesPlaystationButton', 10000)
        .click('@gamesPlaystationButton')
    },

    clickGamesXbox: function() {
      this.waitForElementVisible('@gamesButton', 10000)
        .moveToElement('@gamesButton', 1, 1)
        .waitForElementVisible('@gamesXboxButton', 10000)
        .click('@gamesXboxButton')
    },

    clickGamesNintendoSwitch: function() {
      this.waitForElementVisible('@gamesButton', 10000)
        .moveToElement('@gamesButton', 1, 1)
        .waitForElementVisible('@gamesNintendoSwitchButton', 10000)
        .click('@gamesNintendoSwitchButton')
    },

    clickGamesForSale: function() {
      this.waitForElementVisible('@gamesButton', 10000)
        .moveToElement('@gamesButton', 1, 1)
        .waitForElementVisible('@gamesForSaleButton', 10000)
        .click('@gamesForSaleButton')
    },
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      // Sign in header controls
      signInHeader: 'div.rb-header__greeting',
      settingsButton: 
      {
        selector: "//a[contains(text(),'Settings')]",
        locateStrategy: 'xpath'
      },
      // Nav bar controls
      newButton:
      {
        selector: "//li[contains(@class,'rb-header__li')]/a[contains(text(), 'New')]",
        locateStrategy: 'xpath'
      },
      moviesButton:
      {
        selector: "//li[contains(@class,'rb-header__li')]/a[contains(text(), 'Movies')]",
        locateStrategy: 'xpath'
      },
      gamesButton:
      {
        selector: "//li[contains(@class,'rb-header__li')]/a[contains(text(), 'Games')]",
        locateStrategy: 'xpath'
      },
      onDemandButton:
      {
        selector: "//li[contains(@class,'rb-header__li')]/a[contains(text(), 'On Demand')]",
        locateStrategy: 'xpath'
      },
      moreButton:
      {
        selector: "//li[contains(@class,'rb-header__li')]/a[contains(text(), 'More')]",
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
      },
      moviesAtTheBoxButton:
      {
        selector: "//a[contains(text(), 'At The Box')]",
        locateStrategy: 'xpath'
      },
      moviesOnDemandButton:
      {
        selector: "//a[contains(text(), 'On Demand')]",
        locateStrategy: 'xpath'
      },
      moviesCollectionsButton:
      {
        selector: "//a[contains(text(), 'Collections')]",
        locateStrategy: 'xpath'
      },
      moviesForSaleButton:
      {
        selector: "//a[contains(text(), 'For Sale')]",
        locateStrategy: 'xpath'
      },
      gamesPlaystationButton:
      {
        selector:"//a[contains(text(), 'Playstation')]",
        locateStrategy:'xpath'
      },
      gamesXboxButton:
      {
        selector:"//a[contains(text(), 'Xbox')]",
        locateStrategy:'xpath'
      },
      gamesNintendoSwitchButton:
      {
        selector:"//a[contains(text(), 'Nintendo Switch')]",
        locateStrategy:'xpath'
      },
      gamesForSaleButton:
      {
        selector:"//a[contains(text(), 'For Sale')]",
        locateStrategy:'xpath'
      }

    }
  };