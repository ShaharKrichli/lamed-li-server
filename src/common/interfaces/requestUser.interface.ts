export interface RequestUser extends Request {
	user: IUser;
}

export interface IUser {
	email: string
}