// Hỗ trợ nhắc lệnh jQuery.
/// <reference path="./libs/jquery.d.ts" />

import { ProductRepository } from './product-repository.js';
import { Product } from './product.js';

let productRepo = new ProductRepository();
let products: Product[] = productRepo.getItems();

//console.log(productRepo.showItemsInHTML());

$("#list-product").html(productRepo.showItemsInHTML());