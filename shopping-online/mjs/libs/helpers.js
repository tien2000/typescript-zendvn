"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    static toCurrency(val = 0, curUnit = "", pos = "left") {
        if (pos == "left") {
            return curUnit + " " + val;
        }
        else if (pos == "right") {
            return val + " " + curUnit;
        }
    }
}
exports.Helpers = Helpers;
