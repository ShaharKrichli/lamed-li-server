import { Buffer } from 'buffer';

export const decodeBase64 = (str) => {
    let buff = Buffer.from(str, "base64");
    let text = buff.toString();
    return JSON.parse(text);
};

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BodyDecoder = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        let reqBody = ctx.switchToHttp().getRequest().body
        reqBody = decodeBase64(reqBody.bodyData)
        return reqBody
    },
);