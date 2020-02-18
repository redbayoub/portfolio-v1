/* 
event
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
callback
{
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "body": "..."
}
 */
const axios = require('axios');
const reCapUrl = "https://www.google.com/recaptcha/api/siteverify";
const pageclipUrl="https://send.pageclip.co/CbfoEu8THHLB8ZdDohlyxjPfGLuSMf5b/contact-form"
// we got this from personal reCaptcha Google Page
const reCaptchaSecret = "6Leh6dkUAAAAAD0G155ZxHEUod9_wDjujGNo8Zcb" ; 

exports.handler = function(event, context, callback) {
    let body = event.body;
    let recaptchaToken=body.recaptchaToken;
    

    let verifyResult = await axios.post(reCapUrl, {
        secret: reCaptchaSecret,
        response: recaptchaToken
      });
 if (verifyResult.status === 200) { 
// send email
    let emailSent=await axios.post(
        pageclipUrl,
        {
            name:body.name,
            email:body.email,
            subject:body.subject,
            message:body.message,
        }
    );
    console.log(emailSent);
    if(emailSent.status===200){
        callback(null, {
            statusCode: 200,
            body: "message successfully sent"
          });
    }else{
        // email sending error
        callback("email sending error");
    }


 }else{
     // recaptcha check failed
     callback("recaptcha check failed");
 }
}