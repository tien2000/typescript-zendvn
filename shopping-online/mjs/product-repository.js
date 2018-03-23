"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_js_1 = require("./product.js");
class ProductRepository {
    constructor() {
        this.products = [];
        this.addItem(new product_js_1.Product(1, "Bulbasaur", "../characters/bulbasaur.png", "lorem10", 10, true));
        this.addItem(new product_js_1.Product(2, "Charmander", "../characters/charmander.png", "lorem10", 20, true));
        this.addItem(new product_js_1.Product(3, "Ivysaur", "../characters/ivysaur.png", "lorem10", 30, true));
        this.addItem(new product_js_1.Product(4, "Squirtle", "../characters/squirtle.png", "lorem10", 40, false));
        this.addItem(new product_js_1.Product(5, "Venusaur", "../characters/venusaur.png", "lorem10", 50, true));
    }
    addItem(product) {
        // this.products.push(product);
        this.products[this.products.length] = product;
    }
    getItems() {
        return this.products;
    }
    getItemsID(id) {
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
    showItemsInHTML() {
        let total = this.products.length;
        let xhtmlResult = "";
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem = this.products[i];
                xhtmlResult += `<div class="media product">
                                    <div class="media-left">
                                        <a href="#">
                                            <img src="characters/${currentItem.image}" class="img-responsive" alt="${currentItem.name}">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">${currentItem.name}</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, natus!</p>
                                        <input type="number" name="quantity-product-1" id="" value="1" min="1">
                                        <a href="#" data-product="1" class="price">$${currentItem.price}</a>
                                    </div>
                                </div>`;
            }
        }
        else {
            xhtmlResult = "Empty product";
        }
        return xhtmlResult;
    }
}
exports.ProductRepository = ProductRepository;
