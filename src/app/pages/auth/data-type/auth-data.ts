import {AccountData} from '../../account/data-type/account-data';

export namespace Auth {
  import Account = AccountData.Account;
  export type BodyLogin = {
    userName: string,
    password: string,
  }

  export type BodyForgot = {
    email: string,
  }

  export type AuthReset = {
    password: string,
    forgotCode: string,
    userName: string,
  }
  export type ResponseLogin = {
    token: string,
    account: Account,
    role: string,
  }

}
