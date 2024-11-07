import checkout from "../pageObject.js/checkoutPage";
import login from "../pageObject.js/loginPage";
import productPage from "../pageObject.js/productPage";

describe('TC03-Check out with valid credential and compare with captured product details ',function(){
    
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
 
it('TC03-Check out with valid credential and correct product',function(){

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
            
        checkout.getProductTitle().then((cartTitle)=>{
            expect(cartTitle.text()).to.equal(tiltle);

        });
       checkout.getProductPrice().then ((cartPrice)=>{
            expect(cartPrice.text()).to.equal(price);
        });
   checkout.getProductDescription().then ((cartDescription)=>{
            expect(cartDescription.text()).to.equal(description);
        });      
        checkout.clickFinishBtn();
        checkout.verifyOrderMsg();
         })
        })
    

