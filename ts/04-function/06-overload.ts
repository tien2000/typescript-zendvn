// function funcNeo(x : string) : number {
//     return 100;
// }

// function funcNeo(x : number) : string {
//     return "Neo";
// }

// funcNeo("Neo");

function funcNeo(x : number) : string;
function funcNeo(x : string) : number;
function funcNeo(x : boolean) : boolean;
function funcNeo(x : any) : any{
    if (typeof x == "string") {
        return 100;
    } else if(typeof x == "number") {
        return "Neo";
    } else  {
        return "boolean";
    }
}

console.log(funcNeo(false));
