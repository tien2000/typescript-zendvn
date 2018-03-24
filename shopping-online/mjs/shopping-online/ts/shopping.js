"use strict";
// Hỗ trợ nhắc lệnh jQuery.
/// <reference path="./libs/jquery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_js_1 = require("./product-repository.js");
let productRepo = new product_repository_js_1.ProductRepository();
let products = productRepo.getItems();
console.log(productRepo.showItemsInHTML());
$("#list-product").html(productRepo.showItemsInHTML());
