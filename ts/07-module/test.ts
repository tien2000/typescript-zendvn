import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./zipcodevalidator.js";
import { LettersOnlyValidator } from "./lettersonlyvalidator.js";

import * as newName from './MModule.js';

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }

let obj = new newName.Mmodule();
obj.showInfo();

newName.printNeo();