class product{
    getProductList()
    {
        return cy.get('.inventory_item_name');
    }
   
   getProductTitle(){
        return cy.get('#item_4_title_link');
     }
     getProductPrice(){
         return cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]');
     }
     getProductDescription(){
         return cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]');
     }
    addProductToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }
    getCartPage(){
        cy.get('#shopping_cart_container').click();

    }
    }


module.exports = new product();