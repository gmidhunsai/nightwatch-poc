// Login page functionalities

const commands = {  
  signIn: function () {
    return this.click('@signInButton')
      .setValue('@userNameBox', 'pzsqaint@gmail.com')
      .setValue('@passwordBox', 'Redbox1!')
      .click('@submitButton')
  },
  signInWithCredentials: function (userName, password) {
    return this.click('@signInButton')
      .setValue('@userNameBox', userName)
      .setValue('@passwordBox', password)
      .click('@submitButton')
  }
};


module.exports = {
  'url': 'https://qaweb.accessredbox.net',
  commands: [commands],
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
    }
  }
};