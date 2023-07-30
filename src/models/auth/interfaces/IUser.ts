import { ROLE_LITERALS } from "src/common/constants/roles";

export interface IUser {
    email: string;
    password: string;
    name: string;
    role: ROLE_LITERALS;
    refreshToken?: string;
    googleLogin: boolean;
}