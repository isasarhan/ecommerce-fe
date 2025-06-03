import { IProduct } from "./product";
import { IUser } from "./user";

export interface ICart {
    _id: string;
    user: IUser;
    products: {
        item:IProduct
        quantity: number
    }[];
}