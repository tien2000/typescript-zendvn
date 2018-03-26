"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    static isNumber(val) {
        return !isNaN(parseFloat(val)) && isFinite(val);
    }
    static checkQuantity(val) {
        if (val < 1 || Validate.isNumber(val) == false) {
            return false;
        }
        return true;
    }
}
exports.Validate = Validate;
