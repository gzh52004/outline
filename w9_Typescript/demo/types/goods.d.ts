export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export interface IGoods{
    name:string;
    price:number;
    imgurl:string
}

export type ns=string|number;