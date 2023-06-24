import * as env from "env-var";
import "dotenv/config";



export default {
    APPINSIGHTS_INSTRUMENTATIONKEY: env.get("APPINSIGHTS_INSTRUMENTATIONKEY").required().asString(),
    PORT: env.get("PORT").asPortNumber(),
    TENANT_ID: env.get("TENANT_ID").required().asString(),
    CLIENT_ID: env.get("CLIENT_ID").asString(),
    CLIENT_SECRET: env.get("CLIENT_SECRET").required().asString(),
    MICROSOFT_DOMAIN: env.get("MICROSOFT_DOMAIN").asString(),
    ACTION_TOKEN: env.get("ACTION_TOKEN").asString(),
    COOKIE_MS_GRAPH_SCOPE: env.get("COOKIE_MS_GRAPH_SCOPE").required().asString(),
    COOKIE_API: env.get("COOKIE_API").required().asString(),
    COOKIE_SUBSCRIPTION_KEY: env.get("COOKIE_SUBSCRIPTION_KEY").required().asString(),
    AAD_AUTH_ENABLED: env.get("AAD_AUTH_ENABLED").asBool(),
    NODE_ENV: env.get("NODE_ENV").asString(),
    DB_DATABASE: env.get('DB_DATABASE').asString(),
    DB_USERNAME: env.get('DB_USERNAME').asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').asString(),
    DB_ENCRYPT: env.get('DB_ENCRYPT').asString(),
    DB_HOST: env.get('DB_HOST').asString(),
    DB_LOGGIN: env.get('DB_LOGGIN').asString(),
    TOKEN_SECRET: env.get('TOKEN_SECRET').asString(),
    TOKEN_ECRYPT_SECRET: env.get('TOKEN_ECRYPT_SECRET').asString(),
    MESSAGES_HUB_API: env.get('MESSAGES_HUB_API').asString(),
    MESSAGES_HUB_SCOPE: env.get('MESSAGES_HUB_SCOPE').asString(),
    MESSAGES_HUB_SUBSCRIPTION_KEY: env.get('MESSAGES_HUB_SUBSCRIPTION_KEY').asString(),
    HATCH_SUBSCRIPTION_KEY: env.get('HATCH_SUBSCRIPTION_KEY').asString(),
    HATCH_API: env.get('HATCH_API').asString(),
    STORAGE_CONNECTION_STRING: env.get('STORAGE_CONNECTION_STRING').asString(),
} as const;