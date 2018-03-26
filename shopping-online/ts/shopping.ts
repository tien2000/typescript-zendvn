// Hỗ trợ nhắc lệnh jQuery.
/// <reference path="./libs/jquery.d.ts" />

import { ProductRepository } from './product-repository.js';
import { Product } from './product.js';
import { Validate } from './libs/validate.js';
import { Cart } from './cart.js';

namespace T_ELEMENT{
    export const ELM_LIST_PRODUCT   : string  = "#list-product";
    export const ELM_NOTIFICATION   : string  = "#tNotification";
    export const ELM_CART_BODY      : string  = "#my-cart-body";
    export const ELM_CART_FOOTER    : string  = "#my-cart-footer";
}

namespace T_NOTIFICATION{
    export const NOTI_READY_TO_BUY      : string    = "Ready to buy product";
    export const NOTI_GEATER_THAN_ONE   : string    = "Quatity must equal or greater than 1";
    export const NOTI_ADDED             : string    = "Add Successful!";
    export const NOTI_UPDATED           : string    = "Update Successful!";
    export const NOTI_DELETE            : string    = "Delete Successful!";
}

let productRepo = new ProductRepository();
let products: Product[] = productRepo.getItems();
let cartObj = new Cart();

//console.log(productRepo.showItemsInHTML());

// Show Product List
function showListProduct() : void {
    $(T_ELEMENT.ELM_LIST_PRODUCT).html(productRepo.showItemsInHTML());
}

//Update Announcement
function showNotification(str : string) : void {
    $(T_ELEMENT.ELM_NOTIFICATION).html(str);
}

// Empty Cart
function showCart() {
    $(T_ELEMENT.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    $(T_ELEMENT.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}

function addProduct(id : number, quantity : number) : void{
    if (Validate.checkQuantity(quantity)) {
        let product : Product = productRepo.getItemsID(id);
        cartObj.addProduct(product, quantity);
        showCart();
    } else{
        showNotification(T_NOTIFICATION.NOTI_GEATER_THAN_ONE);
    }
}

function updateProduct(id : number, quantity : number) : void{
    if (Validate.checkQuantity(quantity)) {
        let product : Product = productRepo.getItemsID(id);
        cartObj.updateProduct(product, quantity);
        showCart();
    } else{
        showNotification(T_NOTIFICATION.NOTI_GEATER_THAN_ONE);
    }
}

function removeProduct(id : number) : void{
    let product : Product = productRepo.getItemsID(id);
        cartObj.removeProduct(product);
        showCart();
}

$(document).ready(function(){
    // Show Product List
    showListProduct();

    // Empty Cart
    showCart();

    // Update Announcement
    showNotification(T_NOTIFICATION.NOTI_READY_TO_BUY);

    // Buy Product
    $("a.price").click(function(){
        // console.log('abc');
        let id : number = $(this).data("product");
        let quantity : number = parseInt($("input[name='quantity-product-" + id +"']").val());
        addProduct(id, quantity);
        showNotification(T_NOTIFICATION.NOTI_ADDED);
    })

    // Update Product
    $(document).on("click", "a#update-cart-item", function(){
        let id : number = $(this).data("product");
        let quantity : number = parseInt($("input[name='cart-item-quantity-" + id +"']").val());
        updateProduct(id, quantity);
        showNotification(T_NOTIFICATION.NOTI_UPDATED);
    });

    // Delete Product
    $(document).on("click", "a#delete-cart-item", function(){
        let id : number = $(this).data("product");
        removeProduct(id);
        showNotification(T_NOTIFICATION.NOTI_DELETE);
    });
});