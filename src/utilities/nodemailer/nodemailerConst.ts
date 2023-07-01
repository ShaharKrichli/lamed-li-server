export const mailType = {
    RESET_SUCCESS: 'resetSuccess',
    FORGET_PASSWORD: 'forgetPassword'
}

export const senderEmail = 'neekoreal1@gmail.com'
export const senderPassword = 'hyjpbanxsnrbnrve'
export const host = 'smtp.gmail.com'


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