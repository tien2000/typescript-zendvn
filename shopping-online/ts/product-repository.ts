import { Product } from './product.js';

export class ProductRepository {
    private products        : Product[] = [];

    constructor() {
        this.addItem(new Product(1, "Bulbasaur", "../characters/bulbasaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam.", 10, true));        
        this.addItem(new Product(2, "Charmander", "../characters/charmander.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam.", 20, true));
        this.addItem(new Product(3, "Ivysaur", "../characters/ivysaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam.", 30, true));
        this.addItem(new Product(4, "Squirtle", "../characters/squirtle.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam.", 40, false));
        this.addItem(new Product(5, "Venusaur", "../characters/venusaur.png", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam.", 50, true));
    }

    public addItem(product : Product){
        // this.products.push(product);
        this.products[this.products.length] = product;
    }

    public getItems() : Product[]{
        return this.products;
    }

    public getItemsID(id : number) : Product{
        // Case 01
        for (let i = 0; i < this.products.length; i++) {           
            if (this.products[i].id == id) {
                return this.products[i];
            }
        }
        return null;

        // Case 02: Duyệt hết tất cả các phần tử.
        // let filter : Product[] = this.products.filter( product => product.id == id);
        
        // if (filter.length > 0)
        //     return filter[0];
        // return null;
    }

    public showItemsInHTML() : string{
        let total : number = this.products.length;
        let xhtmlResult : string = "";

        if (total > 0) {
            for (let i : number = 0; i < total; i++) {     
                let currentItem : Product = this.products[i];

                xhtmlResult += `<div class="media product">
                                    <div class="media-left">
                                        <a href="#">
                                            <img src="characters/${currentItem.image}" class="img-responsive" alt="${currentItem.name}">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">${currentItem.name}</h4>
                                        <p>${currentItem.sumary}</p>
                                        ${this.shoBuyItemInHTML(currentItem)}
                                    </div>
                                </div>`;                
            }
        } else {
            xhtmlResult = "Empty product";
        }

        return xhtmlResult;
    }

    private shoBuyItemInHTML(product : Product) : string{
        let xhtmlResult : string = "";

        if (product.canBuy == true) {
            xhtmlResult = `<input type="number" name="quantity-product-1" id="" value="1" min="1">
                            <a href="#" data-product="1" class="price">$${product.price}</a>`;
        } else {
            xhtmlResult = `<span class="price">$${product.price}</span>`;
        }

        return xhtmlResult;
    }
}