"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, image, sumary, price, canBuy) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._price = price;
        this._sumary = sumary;
        this._price = price;
        this._canBuy = canBuy;
    }
    get id() {
        return this._id;
    }
    set id(val) {
        this._id = val;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get image() {
        return this._image;
    }
    set image(val) {
        this._image = val;
    }
    get sumary() {
        return this._sumary;
    }
    set sumary(val) {
        this._sumary = val;
    }
    get price() {
        return this._price;
    }
    set price(val) {
        this._price = val;
    }
    get canBuy() {
        return this._canBuy;
    }
    set canBuy(val) {
        this._canBuy = val;
    }
}
exports.Product = Product;
