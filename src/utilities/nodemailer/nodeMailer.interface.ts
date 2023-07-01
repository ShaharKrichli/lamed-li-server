import { MAIL_TYPE_LITERALS } from "./nodeMailer.data";

export interface INodemailer {
    userEmail: string,
    mailType: MAIL_TYPE_LITERALS,
    param1?: string,
    param2?: string,
}

export interface IMailData {
    subject: string
    text: string
    html: any
}