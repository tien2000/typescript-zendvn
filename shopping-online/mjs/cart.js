"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_item_js_1 = require("./cart-item.js");
const helpers_js_1 = require("./libs/helpers.js");
class Cart {
    constructor() {
        this.cartItems = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
    }
    addProduct(product, quantity = 1) {
        let pos = this.getProductPos(product);
        if (pos > -1) {
            this.cartItems[pos].quantity += quantity;
        }
        else {
            this.cartItems[this.cartItems.length] = new cart_item_js_1.CartItem(product, quantity);
        }
        this.totalQuantity += quantity;
        this.totalPrice += product.price * quantity;
        // console.log(this.cartItems);
    }
    getProductPos(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id) {
                return i;
            }
        }
        return -1;
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    // public getTotalQuantity() : number{
    //     let total : number = 0;
    //     this.cartItems.forEach((cartItem : CartItem) => {
    //         total += cartItem.quantity;
    //     });
    //     return total;
    // }
    // public getTotalPrice() : number{
    //     let total : number = 0;
    //     this.cartItems.forEach((cartItem : CartItem) => {
    //         total += cartItem.quantity * cartItem.product.price;
    //     });
    //     return total;
    // }
    isEmpty() {
        return (this.cartItems.length == 0);
    }
    showCartBodyInHTML() {
        let xhtmlResult = "";
        if (!this.isEmpty()) {
            let total = this.cartItems.length;
            for (let i = 0; i < total; i++) {
                let cartItemCurrent = this.cartItems[i];
                xhtmlResult += cartItemCurrent.showCartItemInHTML(i + 1);
                // console.log(cartItemCurrent);
            }
        }
        else {
            xhtmlResult = "<tr><th colspan='6'>Empty product in your cart</th></tr>";
        }
        return xhtmlResult;
    }
    showCartFooterInHTML() {
        let xhtmlResult = "";
        if (!this.isEmpty()) {
            xhtmlResult = `<tr>
                            <td colspan="4">There are <strong>${this.totalQuantity}</strong> items in your cart.</td>
                            <td colspan="2" class="total-price text-left">${helpers_js_1.Helpers.toCurrency(this.totalPrice, "USD", "right")}</td>
                        </tr>`;
        }
        return xhtmlResult;
    }
}
exports.Cart = Cart;
