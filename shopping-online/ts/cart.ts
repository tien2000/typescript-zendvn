import { CartItem } from './cart-item';
import { Product } from './product';

class Cart {
    private cartItem        : CartItem[]  = [];

    public addProduct(product : Product, quantity : number = 1) : void{

    }

    public updateProduct(product : Product, quantity : number = 1) : void{

    }

    public removeProduct(product : Product) : void{

    }

    public isEmpty() : boolean{
        return true;
    }

    public getTotalQuantity() : number{
        return 123;
    }

    public getTotalPrice() : number{
        return 456;
    }

    public showCartBodyInHTML() : string{
        return "showCartBodyInHTML";
    }

    public showCartFooterInHTML() : string{
        return "showCartFooterInHTML";
    }
}