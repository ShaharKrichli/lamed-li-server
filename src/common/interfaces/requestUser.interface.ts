export interface RequestUser extends Request {
	user: IToken;
}

export interface IToken {
	email: string
	roles: string[]
	refreshToken: string
}