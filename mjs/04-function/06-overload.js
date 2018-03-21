// function funcNeo(x : string) : number {
//     return 100;
// }
function funcNeo(x) {
    if (typeof x == "string") {
        return 100;
    }
    else if (typeof x == "number") {
        return "Neo";
    }
    else {
        return "boolean";
    }
}
console.log(funcNeo(false));
