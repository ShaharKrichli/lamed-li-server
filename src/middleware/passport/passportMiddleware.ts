import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";
import { isExpired } from "../../utilities/tokenUtils/tokenUtils";
const passport = require("passport");

const passportMiddleWare = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		passport.authenticate(["azure"], { session: false })(req, res, next);
	} catch (error) {
		throw new UnauthorizedException({ message: error.message, name: 'microsoftLoginError' })
	}
};

const tokenExperationMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (isExpired(req.headers.authorization))
		throw new UnauthorizedException({ message: "access token is expired", name: 'tashTokenExpired' });
	next();
};

export { passportMiddleWare, tokenExperationMiddleware };
