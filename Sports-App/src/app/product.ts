export class Product {
    constructor(
        public productId:number,
        public productName:string,
        public price:number,
        public category:string[],
        public company:object,
        public segment:string,
        public branchlist:object[]

    ){}
}
