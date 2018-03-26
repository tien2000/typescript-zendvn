"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./libs/helpers.js");
class CartItem {
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    showCartItemInHTML(index) {
        return `<tr>
                    <td>${index}</td>
                    <td>${this.product.name}</td>
                    <td>${helpers_js_1.Helpers.toCurrency(this.product.price, "USD", "right")}</td>
                    <td>
                        <input type="number" name="quantity-product-${this.product.id}" id="" value="${this.quantity}" min="1">
                    </td>
                    <td><strong>${helpers_js_1.Helpers.toCurrency(this.getSubtotal(), "USD", "right")}</strong></td>
                    <td>
                        <a id="update-cart-item" class="label label-info" href="#" data-product="1">Update</a>
                        <a id="delete-cart-item" class="label label-danger" href="#" data-product="1">Delete</a>
                    </td>
                </tr>`;
    }
    getSubtotal() {
        return this.product.price * this.quantity;
    }
    get product() {
        return this._product;
    }
    set product(val) {
        this._product = val;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(val) {
        this._quantity = val;
    }
}
exports.CartItem = CartItem;
