var loginCommands = {
  login: function(userName, password) {
    var teamsPage= this.api.page.teamsPage();
    var teamsLink = teamsPage.elements.teamsLink;

    return this
      .navigate()
      .setValue('@userNameTextField', 'pg@example.com')
      .setValue('@passwordTextField', 'pAsWoRd')
      .click('@loginBtn')
      .waitForElementVisible(teamsLink)
  },

  logout: function() {
    return this
    .click('@signOutLink')
  }
};



module.exports = {
  url: 'http://localhost:8080',
  commands: [loginCommands],
  elements: {
    userNameTextField: 'input[name="login"]',
    passwordTextField: 'input[name="password"]',
    loginBtn: "button[id='submit-login']",
    signOutLink: "a[href$='signout']"
  }
};