import { Product } from './product.js';
import { Helpers } from './libs/helpers.js';

export class CartItem {
    private _product         : Product;
    private _quantity        : number;

    constructor(product : Product, quantity : number = 1) {
        this._product    = product;
        this._quantity   = quantity;
    }

    public showCartItemInHTML(index : number) : string{
        return `<tr>
                    <td>${index}</td>
                    <td>${this.product.name}</td>
                    <td>${Helpers.toCurrency(this.product.price, "USD", "right")}</td>
                    <td>
                        <input type="number" name="cart-item-quantity-${this.product.id}" id="" value="${this.quantity}" min="1">
                    </td>
                    <td><strong>${Helpers.toCurrency(this.getSubtotal(), "USD" , "right")}</strong></td>
                    <td>
                        <a id="update-cart-item" class="label label-info" href="#" data-product="${this.product.id}">Update</a>
                        <a id="delete-cart-item" class="label label-danger" href="#" data-product="${this.product.id}">Delete</a>
                    </td>
                </tr>`;
    }

    public getSubtotal() : number{
        return this.product.price * this.quantity;
    }
    
    public get product() : Product {
        return this._product;
    }
        
    public set product(val : Product) {
        this._product = val;
    }
        
    public get quantity() : number {
        return this._quantity;
    }
        
    public set quantity(val : number) {
        this._quantity = val;
    }
}