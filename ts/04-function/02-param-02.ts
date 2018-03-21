function totalLength(x : (string | any[]), y : (string[] | string)) : number {
    return x.length + y.length;
}

console.log(totalLength("TienLS", ['123']));
console.log(totalLength([1, "TienLS", "NeoTien"], ['123', '456']));
console.log(totalLength([1, "TienLS", "NeoTien"], "123"));