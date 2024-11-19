import productPage from "D:/e2e-SauceDemoApp/cypress/pageObject.js/productPage";
import loginPage from "D:/e2e-SauceDemoApp/cypress/pageObject.js/loginPage";



describe('TC02 Capture Product Details and Add to Cart',function(){
    let username, password;
    
    
    before(()=>{
        cy.fixture('userData').then((data)=>{
            username = data.username;
            password = data.password;
            
        loginPage.visitHomePage();
        loginPage.typeUserName(username);
        loginPage.typePassword(password);
        loginPage.clickLoginBtn();
    });
})


    it('TC02 Capture Product Details and Add to Cart the same product',function(){
         
        let productDetails ={};
          
          productPage.getProductTitle().then((demo)=>{
              productDetails.productTitle= demo.text();
              
           });
          
          productPage.getProductPrice().then((demo)=>{
             productDetails.productPrice =demo.text();
          
          });
          productPage.getProductDescription().then((demo)=>{
             productDetails.productDescription=demo.text();
           
        cy.writeFile('cypress/fixtures/capturedValue.json',productDetails);
          });
        
        productPage.addProductToCart();

        productPage.getCartPage();
     })
       
})
    
           