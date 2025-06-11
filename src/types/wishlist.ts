import { IProduct } from "./product"
import { IUser } from "./user"

export interface IWishlist {
    _id: string
    user: IUser
    products: IProduct[]
}