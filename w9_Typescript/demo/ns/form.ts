
/**
 * namespace命名空间
 */

namespace Form {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    export interface IGoods{
        name:string;
        price:number;
        imgurl:string
    }
 }

 // Form.IGoods