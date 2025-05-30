export interface IProduct {
    _id: string
    name: string
    description?: string
    price: number
    salePrice?: number
    currency: Currency
    stock?: number
    categories?: string[]
    featuredImage?: string
    images?: string[]
    enabled?: boolean
}

export interface IProductCategory {
    _id: string;
    name: string;
    slug?: string;
    img?: string;
    description?: string;
}
export enum Currency {
    Usd = 'USD',
    Lbp = 'LBP',
    Eur = 'EUR',
    Other = 'OTHER',
}
