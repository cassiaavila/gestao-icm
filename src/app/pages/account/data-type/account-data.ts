export namespace AccountData {
  export type Account = {
    id: string
    addressId: string
    address: Address
    personId: string
    person: Person
    createdAt: Date
    updatedAt: Date
    isActive: true
    username: string
    expireCodeAt: Date
    forgotCode: string
  }
  export type Role = {
    id: string
    createdAt: Date
    updatedAt: Date
    isActive: true
    name: string
  }
  export type Address = {
    id: string
    createdAt: Date
    updatedAt: Date
    isActive: true
    street: string
    number: number
    reference: string
    neighborhood: string
    city: string
    state: string
  }

  export type Person = {
    id: string
    createdAt: Date
    updatedAt: Date
    isActive: true
    name: string
    cpf: string
    phone: string
    birthday: Date
  }
}
