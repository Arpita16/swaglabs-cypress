import checkout from "../pageObject.js/checkoutPage";
import login from "../pageObject.js/loginPage";
import productPage from "../pageObject.js/productPage";

describe('TC03-Check out with credential and Check out ',function(){
    
    let username,password,firstname, lastname,postalcode;
    let tiltle,price,description;
    before(()=>{
        
        cy.fixture('userData').then((data)=>{
            username = data.username;
            password = data.password;
            firstname=data.firstname;
            lastname=data.lastname;
            postalcode=data.postalcode;
        
        login.visitHomePage();
        login.typeUserName(username);
        login.typePassword(password);
        login.clickLoginBtn();
        productPage.addProductToCart();
        checkout.getCartItemButton();
        
        
        })
    })
 
it('TC03-Check out with valid credential and check out with correct product',function(){

      checkout.clickCheckOutBtn();
     login.verifyUrl('https://www.saucedemo.com/checkout-step-one.html');
        
        checkout.typeFirstName(firstname);
        checkout.typeLastName(lastname);
        checkout.typePostalCode(postalcode);
        checkout.clickContinueBtn();
    login.verifyUrl('https://www.saucedemo.com/checkout-step-two.html');
  
    cy.fixture('capturedValue.json').then((productData)=>{;
    
        tiltle = productData.productTitle;
        price= productData.productPrice;
        description=productData.productDescription;
    }); 
            
        cy.get('#item_4_title_link').then ((cartTitle)=>{
            let testTitle= cartTitle.text();
            expect(testTitle).to.equal(tiltle);

        });
        cy.get('.inventory_item_price').then ((cartPrice)=>{
            let testPrice=cartPrice.text();
            expect(testPrice).to.equal(price);
        });
        cy.get('.inventory_item_desc').then ((cartDescription)=>{
            let testDescription=cartDescription.text();
            expect(testDescription).to.equal(description);
        });      
        checkout.clickFinishBtn();
        checkout.verifyOrderMsg();
         })
        })
    

