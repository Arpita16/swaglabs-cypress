class checkout{
    
    elements = {
        firstnameInput:()=>{ return cy.get('[id="first-name"]')},
        lastnameInput:()=>{ return cy.get('[id="last-name"]')},
        postalcodeInput:()=>{return cy.get('[id="postal-code"]')},
        continuebtn:()=>{return cy.get('[id="continue"]')},
        checkoutbtn:()=>{return cy.get('[id=checkout]')},
        finishbtn:()=>{return cy.get('[id="finish"]')} 
    }


    typeFirstName(firstname)
    {
        this.elements.firstnameInput().type(firstname);
    }

    typeLastName(lastname)
    {
        this.elements.lastnameInput().type(lastname);
    }
    typePostalCode(postalcode)
    {
        this.elements.postalcodeInput().type(postalcode);
    }
    clickContinueBtn()
    {
        this.elements.continuebtn().click();
    }

    clickCheckOutBtn()
    {
        this.elements.checkoutbtn().click();

    }
    clickFinishBtn(){
        this.elements.finishbtn().click();
    }
    
    getCartItemButton()
    {
        cy.get('[data-test="shopping-cart-badge"]').click();
    }
    
    
    verifyOrderMsg()
    {
        cy.get('[data-test="complete-header"]').should('be.visible');
        cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!'); 
    }
}

module.exports=new checkout;