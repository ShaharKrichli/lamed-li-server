// external
const nodemailer = require("nodemailer");

// interfaces
import { INodemailerProps } from "./INodemailerProps.interface";

// utils
import { getResetPasswordHtml, getResetSuccessHtml } from "./mailHtml";

// const
import { senderEmail, senderPassword, host } from "./nodemailerConst";

const mailTypesMap = {
    forgetPassword: {
        subject: 'forget password',
        mailText: 'forget password',
        htmlFunction: getResetPasswordHtml
    },
    resetSuccess: {
        subject: 'reset success',
        mailText: 'reset success',
        htmlFunction: getResetSuccessHtml
    }
}

export const sendEmail = async (mailData: INodemailerProps) => {
  const transporter = nodemailer.createTransport({
      host: host,
      port: 465,
      secure: true,
      auth: { 
          user: senderEmail,
          pass: senderPassword
      }
  });

  const res = await transporter.sendMail({
      from: senderEmail,
      to: mailData.userEmail,
      subject: mailTypesMap[mailData.mailType].subject,
      text: mailTypesMap[mailData.mailType].mailText,
      html: mailTypesMap[mailData.mailType].htmlFunction(mailData.param1, mailData.param2)
  });

  return res;
}