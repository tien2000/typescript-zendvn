import { Product } from '../product.js';
export class Validate {
	public static isNumber(val : any) : boolean{
		return !isNaN(parseFloat(val))  && isFinite(val);
	}	

	public static checkQuantity(val : any) : boolean {
		if (val < 1 || Validate.isNumber(val) == false) {        
			return false;
		}
		return true;
	}
}