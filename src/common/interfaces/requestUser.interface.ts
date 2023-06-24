export interface RequestUser extends Request {
	user: IUser;
}

export interface IUser {
	tz: string;
	pernr: string;
	roles: string[]
	analyticsId: string;
}