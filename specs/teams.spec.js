const teamName="Orange";
const shortName="ORA";
const jiraURL="orange.color.io";
const jiraKey="ORA";

let loginPage, teamsPage;

before(function(browser) {
  loginPage = browser.page.loginPage();
  teamsPage = browser.page.teamsPage();
})

beforeEach(function() {
  loginPage.login();
})

afterEach(function(browser) {
  loginPage.navigate();
  loginPage.logout();
})

after(function(browser) {
  browser.end();
})


describe('Teams functional tests', function() {

   test('login and add a new team:', function(browser){
     teamsPage
      .addTeam(teamName, shortName, jiraURL, jiraKey)
      .verifyAddTeamIsSuccessful()
      .click('@addTeamPopUpCancelButton');
   })

   test('launch popup:', function(browser) {
     teamsPage
      .launchAddTeamPopup()
   })

})