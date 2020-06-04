const waitTime = 10000;

var teamsCommands = {
   navigateToTeams: function() {
      return this
        .waitForElementVisible('@teamsLink',waitTime)
        .click('@teamsLink')
        .waitForElementVisible('@addTeamButton')
   },

   launchAddTeamPopup: function() {
   	 return this
   	  .waitForElementVisible('@addTeamButton', waitTime)
      .click('@addTeamButton')  
      .waitForElementVisible('@teamNameTextFieldAddTeamPopup'); 
   },

   fillInAddTeamForm: function(teamName, shortName, jiraURL, jiraKey) {
     return this
       .waitForElementVisible('@teamNameTextFieldAddTeamPopup')
       .setValue('@teamNameTextFieldAddTeamPopup', teamName)
       .setValue('@shortNameTextFieldAddTeamPopup', shortName)
       .setValue('@jiraURLAddTeamPopup', jiraURL)
       .setValue('@jiraProjectKeyAddTeamPopup', jiraKey)
       .click('@addTeamPopUpButton')
   },

   verifyAddTeamIsSuccessful: function() {
      return this
       .waitForElementVisible('@toastedPopUp',waitTime)
       .verify.containsText('@toastedPopUp','Name has already been taken, Short name has already been taken')
   },

   addTeam: function(teamName, shortName, jiraURL, jiraKey) {
      return this
        .navigateToTeams()
        .launchAddTeamPopup()
        .fillInAddTeamForm(teamName, shortName, jiraURL, jiraKey)
    },   

};

module.exports = {
  commands: [teamsCommands],
  elements: {
    teamsLink:  "[href$='teams']",
    addTeamButton: {
      selector: "button.white--text:nth-child(1)"
    },
    teamNameTextFieldAddTeamPopup: {
      selector: "//label[.='Team name']/../input",
      locateStrategy: 'xpath'
    },
    shortNameTextFieldAddTeamPopup: {
       selector: "//label[.='Team short name']/../input"	,
       locateStrategy: 'xpath'  
    },
    jiraURLAddTeamPopup: {
       selector: "//label[.='Jira URL']/../input",
       locateStrategy: 'xpath'       
    },
    jiraProjectKeyAddTeamPopup: {
    	selector: "//label[.='Jira project key']/../input",
    	       locateStrategy: 'xpath' 
    },
    addTeamPopUpButton: {
        selector: "//button//*[contains(text(),'Add Team')]",
        locateStrategy: 'xpath' 
    },
    addTeamPopUpCancelButton: {
        selector: "//button//*[contains(text(),'Cancel')]",
        locateStrategy: 'xpath' 
    },    
    toastedPopUp: {
    	selector: ".toasted"
    },
    addMemberButton: {
       selector: ".mdi-plus-thick"
    }, 
    searchMemberDropDown: { 
       selector: "//label[.='Search for a member and select']",
       locateStrategy: 'xpath' 

    },
    searchRoleDropDown:{
       selector: "//label[.='Select member role']",
       locateStrategy: 'xpath' 
    }, 
    addMemberConfirmationButton: {
       selector: "//span[contains(text(),'Add Member')]",
       locateStrategy: 'xpath' 
    },
    addMemberCancelButton: { 
       selector: "//span[contains(text(),'Cancel')]",
       locateStrategy: 'xpath'     	
    },
    searchMemberValue: { 
       selector: "//div[contains(text(), 'REPLACE')]",
       locateStrategy: 'xpath'     	
    },
    searchRoleValue: {
       selector: "//div[contains(text(), 'REPLACE')]",
       locateStrategy: 'xpath'     	
    },
    deleteMemberIcon: {
       selector: "//td[contains(text(),'REPLACE')][1]/../td[4]",
       locateStrategy: 'xpath'     	
    },
    deleteMemberConfirmationBtn: {
       selector: "//button/span[contains(text(),'Yes')]",
       locateStrategy: 'xpath'       
    }
}

};

