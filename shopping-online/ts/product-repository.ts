import { Product } from './product';

class ProductRepository {
    private products        : Product[] = [];

    constructor() {
        
    }

    public addItem(product : Product){

    }

    public getItems() : Product[]{
        return [];
    }

    public getItemsID(id : number) : Product{
        return new Product;
    }

    public showItemsInHTML() : string{
        return "NeoTien";
    }
}