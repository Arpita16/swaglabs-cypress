
import login from "../pageObject.js/loginPage";
import productPage from "../pageObject.js/productPage";



describe('TC02 Capture Product Details and Add to Cart',function(){
    let username, password;
    
    
    before(()=>{
        cy.fixture('userData').then((data)=>{
            username = data.username;
            password = data.password;
            
        login.visitHomePage();
        login.typeUserName(username);
        login.typePassword(password);
        login.clickLoginBtn();
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
    
           