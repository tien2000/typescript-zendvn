function funNoReturn() : void {
    console.log("funNoReturn");    
}

function funReturnNumber() : number {
    return 2;    
}

function funReturnArr() : string[] {
    return ["HTML", "CSS"];
}

function funReturnAny() : any {
    // return ["HTML", "CSS", "JS"];
    // return 12;
    console.log("funReturnAny");
    
}

funNoReturn();
console.log(funReturnNumber());
console.log(funReturnArr());
funReturnAny();
