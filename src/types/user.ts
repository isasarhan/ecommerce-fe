export interface IUser {
    _id: string
    userName: string
    firstName: string
    lastName: string
    phone: string
    email: string
    featuredImage: string
    isEnabled: boolean
    role: Role
}

export enum Role {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN",
    MANAGER = "MANAGER"
}
export interface IUsersResponse {
    data: IUser[]
    page: number
    pages: number
    total: number
}