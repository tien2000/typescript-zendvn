"use strict";
// Hỗ trợ nhắc lệnh jQuery.
/// <reference path="./libs/jquery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_js_1 = require("./product-repository.js");
const validate_js_1 = require("./libs/validate.js");
const cart_js_1 = require("./cart.js");
var T_ELEMENT;
(function (T_ELEMENT) {
    T_ELEMENT.ELM_LIST_PRODUCT = "#list-product";
    T_ELEMENT.ELM_NOTIFICATION = "#tNotification";
    T_ELEMENT.ELM_CART_BODY = "#my-cart-body";
    T_ELEMENT.ELM_CART_FOOTER = "#my-cart-footer";
})(T_ELEMENT || (T_ELEMENT = {}));
var T_NOTIFICATION;
(function (T_NOTIFICATION) {
    T_NOTIFICATION.NOTI_READY_TO_BUY = "Ready to buy product";
    T_NOTIFICATION.NOTI_GEATER_THAN_ONE = "Quatity must equal or greater than 1";
})(T_NOTIFICATION || (T_NOTIFICATION = {}));
let productRepo = new product_repository_js_1.ProductRepository();
let products = productRepo.getItems();
let cartObj = new cart_js_1.Cart();
//console.log(productRepo.showItemsInHTML());
// Show Product List
function showListProduct() {
    $(T_ELEMENT.ELM_LIST_PRODUCT).html(productRepo.showItemsInHTML());
}
//Update Announcement
function showNotification(str) {
    $(T_ELEMENT.ELM_NOTIFICATION).html(str);
}
// Empty Cart
function showCart() {
    $(T_ELEMENT.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    $(T_ELEMENT.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}
$(document).ready(function () {
    // Show Product List
    showListProduct();
    // Empty Cart
    showCart();
    // Update Announcement
    showNotification(T_NOTIFICATION.NOTI_READY_TO_BUY);
    $("a.price").click(function () {
        // console.log('abc');
        let id = $(this).data("product");
        let quantity = parseInt($("input[name='quantity-product-" + id + "']").val());
        if (validate_js_1.Validate.checkQuantity(quantity)) {
            let product = productRepo.getItemsID(id);
            cartObj.addProduct(product, quantity);
            showCart();
        }
        else {
            showNotification(T_NOTIFICATION.NOTI_GEATER_THAN_ONE);
        }
    });
});
