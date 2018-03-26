import { CartItem } from './cart-item.js';
import { Product } from './product.js';
import { Helpers } from './libs/helpers.js';

export class Cart {
    private cartItems       : CartItem[]  = [];
    private totalQuantity   : number = 0;
    private totalPrice      : number = 0;

    public addProduct(product : Product, quantity : number = 1) : void{
        let pos : number = this.getProductPos(product);
        if (pos > -1) {
            this.cartItems[pos].quantity += quantity;
        } else {
            this.cartItems[this.cartItems.length] = new CartItem(product, quantity);
        }

        this.totalQuantity += quantity;
        this.totalPrice    += product.price * quantity;

        // console.log(this.cartItems);
    }

    public updateProduct(product : Product, quantity : number = 1) : void{
        let pos : number = this.getProductPos(product);
        if (pos > -1) {
            // Công thức toán hack não @@
            this.totalQuantity = this.totalQuantity - this.cartItems[pos].quantity + quantity;
            this.totalPrice = this.totalPrice - product.price * (this.cartItems[pos].quantity - quantity);
            this.cartItems[pos].quantity = quantity;
        }
    }

    public removeProduct(product : Product) : void{
        let pos : number = this.getProductPos(product);
        if (pos > -1) {
            this.totalQuantity = this.totalQuantity - this.cartItems[pos].quantity;
            this.totalPrice = this.totalPrice - product.price * this.cartItems[pos].quantity;
            this.cartItems.splice(pos, 1);
        }
    }

    private getProductPos(product : Product) : number{
        let total : number = this.cartItems.length;
        for (let i : number = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id) {
                return i;
            }            
        }
        return -1;
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

    private isEmpty() : boolean{
        return (this.cartItems.length == 0);
    }

    public showCartBodyInHTML() : string{
        let xhtmlResult : string = "";
        if (!this.isEmpty()) {
            let total : number = this.cartItems.length;
            for (let i : number = 0; i < total; i++) {
                let cartItemCurrent : CartItem = this.cartItems[i];
                xhtmlResult += cartItemCurrent.showCartItemInHTML(i + 1);
                
                // console.log(cartItemCurrent);
            }            
        } else {
            xhtmlResult = "<tr><th colspan='6'>Empty product in your cart</th></tr>";
        }
        return xhtmlResult;
    }

    public showCartFooterInHTML() : string{
        let xhtmlResult : string = "";
        if (!this.isEmpty()) {
            xhtmlResult = `<tr>
                            <td colspan="4">There are <strong>${this.totalQuantity}</strong> items in your cart.</td>
                            <td colspan="2" class="total-price text-left">${Helpers.toCurrency(this.totalPrice, "USD", "right")}</td>
                        </tr>`; 
        }
        return xhtmlResult;
    }
}