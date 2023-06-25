export interface IPassword {
    password: string
}

export interface IEmail {
    email: string
}

export interface ILogin extends IEmail, IPassword { }

export interface ICode {
    code: string
}