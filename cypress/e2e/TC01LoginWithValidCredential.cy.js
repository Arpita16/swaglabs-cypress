
import login from "D:/e2e-SauceDemoApp/cypress/pageObject.js/loginPage";
import product from "D:/e2e-SauceDemoApp/cypress/pageObject.js/productPage";

describe('TC01-Login with credential',function(){
    
    let username, password;
    
    before(()=>{
        cy.fixture('userData').then((data)=>{
            username = data.username;
            password = data.password;
        })
    })

 it('TC01-Login with valid credential',function(){
    
        login.visitHomePage();
        login.verifyUrl('https://www.saucedemo.com/');
        login.typeUserName(username);
        login.typePassword(password);
        login.clickLoginBtn();
        
        login.verifyUrl('https://www.saucedemo.com/inventory.html');
        product.getProductList().should('have.length',6);
        product.getProductList().each(($el)=>{
            let demo = $el.text();
                cy.log(demo);

        })
    })
    })

    