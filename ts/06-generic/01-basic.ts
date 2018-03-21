function showNumberInfo(x : number) : number {
    return x;
}

function showStringInfo(x : string) : string {
    return x;
}

// Generic
function shoInfo<T>(x : T) : T {
    return x;
}

console.log(shoInfo<boolean>(true));
console.log(shoInfo<string>("NeoTien"));
console.log(shoInfo<number>(100));