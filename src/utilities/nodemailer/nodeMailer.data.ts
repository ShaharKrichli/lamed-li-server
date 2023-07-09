import { getRegisterSuccessHtml, getResetPasswordHtml, getResetSuccessHtml } from "./mailHtml";
import { IMailData } from "./nodeMailer.interface";

export const SENDER_EMAIL = 'neekoreal1@gmail.com'
export const SENDER_PASSWORD = 'hyjpbanxsnrbnrve'
export const HOST = 'smtp.gmail.com'

// TODO: resposne expample from nodemailer.
// const mailRes = {
//     accepted: [ 'shimon.chay.s@gmail.com' ],
//     rejected: [],
//     ehlo: [
//       'SIZE 35882577',
//       '8BITMIME',
//       'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
//       'ENHANCEDSTATUSCODES',
//       'PIPELINING',
//       'CHUNKING',
//       'SMTPUTF8'
//     ],
//     envelopeTime: 405,
//     messageTime: 728,
//     messageSize: 4564,
//     response: '250 2.0.0 OK  1688220639 c1-20020a056000104100b003140039f318sm12105255wrx.69 - gsmtp',
//     envelope: { from: 'neekoreal1@gmail.com', to: [ 'shimon.chay.s@gmail.com' ] },
//     messageId: '<732a4948-c7a0-8456-c711-600021642dc5@gmail.com>'
//   }


export enum MAIL_TYPE {
    RESET_SUCCESS = 'RESET_SUCCESS',
    FORGET_PASSWORD = 'FORGET_PASSWORD',
    REGISTER_SUCCESS= 'REGISTER_SUCCESS'
}

export type MAIL_TYPE_LITERALS = keyof typeof MAIL_TYPE;

export type mailTypeManager = { [literal in MAIL_TYPE_LITERALS]: IMailData };

export const mailTypesMap: mailTypeManager = {
    RESET_SUCCESS: {
        subject: 'שחזור סיסמה',
        text: 'שחזור סיסמה',
        html: getResetPasswordHtml
    },
    FORGET_PASSWORD: {
        subject: 'שחזור הסיסמה הצליח',
        text: 'שחזור הסיסמה הצליח',
        html: getResetSuccessHtml
    },
    REGISTER_SUCCESS:{
        subject: 'הרשמה בהצלחה',
        text: 'נרשמת בהצלחה',
        html: getRegisterSuccessHtml
    }
}