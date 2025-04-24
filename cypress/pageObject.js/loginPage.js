class login{

    elements = {
        usernameInput:()=>{ return cy.get('[id="user-name"]')},
        passwordInput:()=>{ return cy.get('[id="password"]')},
        loginbtn:()=>{return cy.get('[id="login-button"]')},
    }

    //PageElements
    

    typeUserName(username)
    {
        this.elements.usernameInput().type(username);
    }

    typePassword(password)
    {
        this.elements.passwordInput().type(password)
    }
    clickLoginBtn()
    {
        this.elements.loginbtn().click()
    }
    visitHomePage()
    {    
        cy.visit('https://www.saucedemo.com/')
    }
    verifyUrl(expectedUrl)
    {
        cy.url().should('eq',expectedUrl);
    }
    
}

module.exports = new login();
