// TODO: change this all html functions to be in hebrow and shorter.
export const getResetPasswordHtml = (user: string, resetCode: number) => {
    return `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title></title>
    </head>
    <body dir="rtl" style="width: 100% !important; height: 100%; margin: 0; -webkit-text-size-adjust: none; background-color: #F2F4F6; color: #51545E;">
      <span class="preheader" style="display: none !important; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">Use this link to reset your password. The link is only valid for 24 hours.</span>
      <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6;">
        <tr>
          <td align="center">
            <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
              <!-- Email Body -->
              <tr>
                <td class="email-body" width="570" cellpadding="0" cellspacing="0" style="width: 570px; margin: 0; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                  <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;">
                    <tr>
                      <td class="email-masthead" style="text-align: center;">
                        <a href="https://example.com" style="text-decoration: none;">
                          <img src="https://i.pinimg.com/originals/be/41/c7/be41c71e29482225cae36accaa0c820f.jpg" alt="Lamed Li" style="width: 100%; height: 40%; display: block; border: 0; max-height: 50vh;">
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="content-cell" style="padding: 45px;">
                        <div style="font-family: Arial, sans-serif;">
                          <h1 style="margin-top: 0; color: #333333; font-size: 22px; font-weight: bold;">היי ${user},</h1>
                          <p style="color: #51545E; font-size: 16px; line-height: 1.625;">ביקשת לאפס את סיסמתך לחשבון למד-לי שלך. השתמש בקוד זה כדי לאפס אותה. שים לב: קוד איפוס זה תקף רק ל-5 הדקות הבאות.</p>
                          <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 30px auto; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                            <tr>
                              <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center">
                                      <a href="{{www.google.com}}" style="background-color: #3F4C77; border-top: 10px solid #3F4C77; border-right: 25px solid #3F4C77; border-bottom: 10px solid #3F4C77; border-left: 25px solid #3F4C77; display: inline-block; color: #FFF; text-decoration: none; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; box-sizing: border-box;">${resetCode}</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p style="color: #51545E; font-size: 16px; line-height: 1.625;">מטעמי אבטחה, בקשה זו התקבלה ממכשיר ___. אם לא ביקשת איפוס סיסמה, אנא התעלם מאימייל זה או <a href="{{support_url}}" style="color: #3869D4;">צור קר עם התמיכה</a> לשאלות נוספות.</p>
                          <p style="color: #51545E; font-size: 16px; line-height: 1.625;">תודה,<br>צוות למד לי (:</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                    <tr>
                      <td class="content-cell" align="center">
                       <p class="f-fallback sub align-center" style="color: #A8AAAF;">Lamed Li<br>Shalisut ramat gan.<br>Karnichi 86</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`
}

export const getResetSuccessHtml = (user: string,newPassword:string) => {
    return `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title></title>
</head>
<body dir="rtl" style="width: 100% !important; height: 100%; margin: 0; -webkit-text-size-adjust: none; background-color: #F2F4F6; color: #51545E;">
  <span class="preheader" style="display: none !important; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">Use this link to reset your password. The link is only valid for 24 hours.</span>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6;">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
          <!-- Email Body -->
          <tr>
            <td class="email-body" width="570" cellpadding="0" cellspacing="0" style="width: 570px; margin: 0; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;">
                <tr>
                  <td class="email-masthead" style="text-align: center;">
                    <a href="https://example.com" style="text-decoration: none;">
                      <img src="https://i.pinimg.com/originals/be/41/c7/be41c71e29482225cae36accaa0c820f.jpg" alt="Lamed Li" style="width: 100%; height: 40%; display: block; border: 0; max-height: 50vh;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="content-cell" style="padding: 45px;">
                    <div style="font-family: Arial, sans-serif;">
                      <h1 style="margin-top: 0; color: #333333; font-size: 22px; font-weight: bold;">היי ${user},</h1>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">בקשתך לאפס את הסיסמה שלך הושלמה בהצלחה</p>
                      <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 30px auto; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                        <tr>
                          <td align="center">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td align="center">
                                  <a href="{{www.google.com}}" style="background-color: #3F4C77; border-top: 10px solid #3F4C77; border-right: 25px solid #3F4C77; border-bottom: 10px solid #3F4C77; border-left: 25px solid #3F4C77; display: inline-block; color: #FFF; text-decoration: none; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; box-sizing: border-box;">הסיסמה החדשה שלך היא: ${newPassword} </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">מטעמי אבטחה, בקשה זו התקבלה ממכשיר ___. אם לא ביקשת איפוס סיסמה, אנא התעלם מאימייל זה או <a href="{{support_url}}" style="color: #3869D4;">צור קר עם התמיכה</a> לשאלות נוספות.</p>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">תודה,<br>צוות למד לי (:</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                <tr>
                  <td class="content-cell" align="center">
                   <p class="f-fallback sub align-center" style="color: #A8AAAF;">Lamed Li<br>Shalisut ramat gan.<br>Karnichi 86</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export const getRegisterSuccessHtml = (user:string)=>{
  return `
  <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title></title>
</head>
<body dir="rtl" style="width: 100% !important; height: 100%; margin: 0; -webkit-text-size-adjust: none; background-color: #F2F4F6; color: #51545E;">
  <span class="preheader" style="display: none !important; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">Thank you for registering with us. Your registration was successful.</span>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6;">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
          <!-- Email Body -->
          <tr>
            <td class="email-body" width="570" cellpadding="0" cellspacing="0" style="width: 570px; margin: 0; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;">
                <tr>
                  <td class="email-masthead" style="text-align: center;">
                    <a href="https://example.com" style="text-decoration: none;">
                      <img src="https://i.pinimg.com/originals/be/41/c7/be41c71e29482225cae36accaa0c820f.jpg" alt="Lamed Li" style="width: 100%; height: 40%; display: block; border: 0; max-height: 50vh;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="content-cell" style="padding: 45px;">
                    <div style="font-family: Arial, sans-serif;">
                      <h1 style="margin-top: 0; color: #333333; font-size: 22px; font-weight: bold;">היי ${user},</h1>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">תודה על הרשמתך לשירותינו. הרישום שלך הושלם בהצלחה.</p>
                      <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 30px auto; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                        <tr>
                          <td align="center">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td align="center">
                                  <a href="{{www.example.com}}" style="background-color: #3F4C77; border-top: 10px solid #3F4C77; border-right: 25px solid #3F4C77; border-bottom: 10px solid #3F4C77; border-left: 25px solid #3F4C77; display: inline-block; color: #FFF; text-decoration: none; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; box-sizing: border-box;">התחל להשתמש בשירותינו</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">אנחנו מצפים לעמוד בציפיותיך ולספק לך חוויה מעולה עם השירות שלנו.</p>
                      <p style="color: #51545E; font-size: 16px; line-height: 1.625;">תודה,<br>צוות למד לי (:</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                <tr>
                  <td class="content-cell" align="center">
                   <p class="f-fallback sub align-center" style="color: #A8AAAF;">Lamed Li<br>Shalisut ramat gan.<br>Karnichi 86</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}