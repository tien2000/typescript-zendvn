function funNoReturn() {
    console.log("funNoReturn");
}
function funReturnNumber() {
    return 2;
}
function funReturnArr() {
    return ["HTML", "CSS"];
}
function funReturnAny() {
    // return ["HTML", "CSS", "JS"];
    // return 12;
    console.log("funReturnAny");
}
funNoReturn();
console.log(funReturnNumber());
console.log(funReturnArr());
funReturnAny();
