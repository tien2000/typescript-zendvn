class StudyGeneric {
    constructor() {
        
    }

    static printArr<T>(params : T[]) : void{
        console.log(params);
    }
}

StudyGeneric.printArr<number>([1, 2, 3]);
StudyGeneric.printArr<string>(["Neo", "Tien", "NT"]);
StudyGeneric.printArr<any>([1, "Tien", true]);