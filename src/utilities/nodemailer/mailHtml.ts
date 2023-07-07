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

export const getResetSuccessHtml = () => {
    return `
    <!doctype html>
    <html lang="en-US">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Reset Password Email Template</title>
        <meta name="description" content="Reset Password Email Template.">
        <style type="text/css">
            a:hover {text-decoration: underline !important;}
        </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Your request to reset your password complite successfuly</h1>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                your new password is:.
                                            </p>
                                            <a href="javascript:void(0);"
                                                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">
                                                </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>
    
    </html>`
}