import {
	BearerStrategy,
	IBearerStrategyOption,
	ITokenPayload,
	VerifyCallback,
} from "passport-azure-ad";
import envVar from "src/utilities/env-var";

const tenantId = envVar.TENANT_ID;
const clientID = envVar.CLIENT_ID || "";

const azureCredentials: IBearerStrategyOption = {
	identityMetadata: `https://login.microsoftonline.com/${tenantId}/v2.0/.well-known/openid-configuration`,
	clientID,
	validateIssuer: true,
	issuer: `https://login.microsoftonline.com/${tenantId}/v2.0`,
	audience: clientID,
};

export const azureStrategyProviders = [
	{
		provide: "AZURE_STRATEGY",
		useFactory: () => {
			const strategy = new BearerStrategy(
				azureCredentials,
				(token: ITokenPayload, done: VerifyCallback) => {
					const tokenUsername = token?.preferred_username?.slice(0, 9);

					const user = {
						tz: tokenUsername
					};

					return done(null, user, token);
				}
			);
			return strategy;
		},
	},
];
