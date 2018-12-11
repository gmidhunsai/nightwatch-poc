/*
 * Coming Soon - Movies page functionality
 */
const commands = {  
    validateHeader: function() {
        this.waitForElementVisible('@pageHeader', 3000)
            .assert.containsText('@pageHeader', 'Movies Coming Soon')
    },

    /*validateWishlistText: function() {
      this.waitForElementVisible('@wishlistText', 3000)
      wishListText = this.getText('@wishlistText')
      wishListText = wishListText.replace(/\r\n\t|\n|\r\t|\r\n/, '')
      assert(wishListText == "Add to Wish List, we’ll send you an email.")
    }*/
  };
  
  
  module.exports = {
    commands: [commands],
    elements: 
    {
      pageHeader: 'h1.h1',
      /*wishlistText: {
        selector: '//*[@id="root"]/main/div[1]/div/header/div/div/p',
        locateStrategy: 'xpath'
      }*/
    }
  };