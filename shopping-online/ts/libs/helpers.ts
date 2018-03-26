export class Helpers{
	public static toCurrency(val : number = 0, curUnit : string = "", pos : string = "left") : string{
		if (pos == "left") {
			return curUnit + " " + val;
		} else if(pos == "right") {
			return val + " " + curUnit;
		}
	}
}