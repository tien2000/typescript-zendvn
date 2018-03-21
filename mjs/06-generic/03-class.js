// id, name , price : string, string, number
// id, name , price : number, string, string
// id, name , price : string, number, boolean
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("001", "Product 1", 2000);
let product2 = new Product(12, "Product 2", "20 USD");
let product3 = new Product("003", 123, true);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();
