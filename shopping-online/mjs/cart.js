"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.cartItem = [];
    }
    addProduct(product, quantity = 1) {
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    isEmpty() {
        return true;
    }
    getTotalQuantity() {
        return 123;
    }
    getTotalPrice() {
        return 456;
    }
    showCartBodyInHTML() {
        return "showCartBodyInHTML";
    }
    showCartFooterInHTML() {
        return "showCartFooterInHTML";
    }
}
