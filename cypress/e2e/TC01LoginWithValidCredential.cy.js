import loginPage from "D:/e2e-SauceDemoApp/cypress/pageObject.js/loginPage";
import productPage from "D:/e2e-SauceDemoApp/cypress/pageObject.js/productPage";


describe('TC01-Login with credential',function(){
    
    let username, password;
    
    before(()=>{
        cy.fixture('userData').then((data)=>{
            username = data.username;
            password = data.password;
        })
    })

 it('TC01-Login with valid credential',function(){
    
        loginPage.visitHomePage();
        loginPage.verifyUrl('https://www.saucedemo.com/');
        loginPage.typeUserName(username);
        loginPage.typePassword(password);
        loginPage.clickLoginBtn();
        
        loginPage.verifyUrl('https://www.saucedemo.com/inventory.html');
        productPage.getProductList().should('have.length',6);
        productPage.getProductList().each(($el)=>{
            let demo = $el.text();
                cy.log(demo);

        })
    })
    })

    