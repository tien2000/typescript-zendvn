let tVariable: any = "TypeScript ZendVN";
// let tVariableLength = tVariable.length;

// let tVariableLength = (<string>tVariable).length;

let tVariableLength = (tVariable as string).length;

console.log(tVariableLength);
