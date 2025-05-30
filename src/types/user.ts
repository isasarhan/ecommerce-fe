export interface IUser {
    id: string
    userName: string
    firstName: string
    lastName: string
    phone: string
    email: string
    isEnabled: boolean
    role: Role
}

export enum Role {
    CUSTOMER = "customer",
    ADMIN = "admin",
    MANAGER = "manager"
}