// external
const nodemailer = require("nodemailer");

// interfaces
import { INodemailer } from "./nodeMailer.interface";

// const
import { HOST, SENDER_EMAIL, SENDER_PASSWORD, mailTypesMap } from "./nodeMailer.data";

export const sendEmail = async ({ mailType, userEmail, param1, param2}: INodemailer) => {
    const transporter = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD
        }
    });

    const res = await transporter.sendMail({
        from: SENDER_EMAIL,
        to: userEmail,
        subject: mailTypesMap[mailType].subject,
        text: mailTypesMap[mailType].text,
        html: mailTypesMap[mailType].html(param1, param2)
    });

    return res;
}