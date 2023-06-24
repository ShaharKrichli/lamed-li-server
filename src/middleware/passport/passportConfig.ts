const passport = require("passport");
import { INestApplication } from "@nestjs/common";
import { azureStrategyProviders } from "./provider.providers";

const passportConfig = (app: INestApplication) => {
	app.use(passport.initialize());
	app.use(passport.session());
	passport.use("azure", azureStrategyProviders[0].useFactory());
};

export { passportConfig };
