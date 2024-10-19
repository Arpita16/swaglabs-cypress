import productPage from "D:/e2e-SauceDemoApp/cypress/pageObject.js/productPage";
import login from "D:/e2e-SauceDemoApp/cypress/pageObject.js/loginPage";



describe('TC02 Capture Product Details and Add to Cart',function(){
    let username, password,firstname,lastname,postalcode;
    
    
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
    });
})


    it('TC02 Capture Product Details and Add to Cart same product',function(){
          const productName="Sauce Labs Backpack";
          let productDetails ={};
          
          productPage.getProductTitle(productName).then((demo)=>{
              productDetails.productTitle= demo.text();
              
           });
          
          productPage.getProductPrice(productName).then((demo)=>{
             productDetails.productPrice =demo.text();
          
          });
          productPage.getProductDescription(productName).then((demo)=>{
             productDetails.productDescription=demo.text();
           
        cy.writeFile('cypress/fixtures/capturedValue.json',productDetails);
          });
        
        productPage.addProductToCart();

        productPage.getCartPage();
     })
       
})
    
           