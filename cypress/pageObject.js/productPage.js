class product{
    getProductList()
    {
        return cy.get('.inventory_item_name');
    }
    getProductByName(productName){
        return cy.get('.inventory_item_name').contains(productName);
        
    }
    getProductTitle(productName){
       return this.getProductByName(productName).parents('.inventory_item_label').find('#item_4_title_link');
    }
    getProductPrice(productName){
        return this.getProductByName(productName).parents('.inventory_item_description').find('.inventory_item_price');
    }
    getProductDescription(productName){
        return this.getProductByName(productName).parents('.inventory_item_label').find('.inventory_item_desc');
    }
    addProductToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }
    getCartPage(){
        cy.get('#shopping_cart_container').click();

    }
    }


module.exports = new product();