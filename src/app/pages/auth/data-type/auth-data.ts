import { AccountData } from '../../account/data-type/account-data'

export namespace Auth {
  import Account = AccountData.Account
  export type BodyLogin = {
    username: string
    password: string
  }
  export type BodyRegister = {
    username: string
    password: string
  }
  export type BodyForgot = {
    email: string
  }

  export type AuthReset = {
    password: string
    forgotCode: string
    username: string
  }
  export type ResponseLogin = {
    token: string
    account: Account
    role: string
  }
}
