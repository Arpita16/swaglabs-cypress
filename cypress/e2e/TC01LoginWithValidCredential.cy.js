
import login from "../pageObject.js/loginPage";
import productPage from "../pageObject.js/productPage";


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
        productPage.getProductList().should('have.length',6);
        productPage.getProductList().each(($el)=>{
            let demo = $el.text();
                cy.log(demo);

        })
    })
    })

    