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
const axios = require("axios");

const reCapUrl = "https://www.google.com/recaptcha/api/siteverify";
/* 
post request :{
  secret,recapToken
}
  return 
  {
  "success": true|false,
  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes": [...]        // optional
}
*/
const pageclipApiUrl = "https://api.pageclip.co/data/contact-form";

// we got this from personal reCaptcha Google Page
const reCaptchaSecret = process.env.reCaptchaSecret;
const pageclipKey = process.env.pageclipKey;

exports.handler = async (event, context, callback) => {
  if (!event.body || event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        status: "invalid http method"
      })
    });
  }

  let body = event.body;
  let recaptchaToken = body.rt;
  console.log( body.rt);
  console.log( body.name);
  console.log(recaptchaToken);
  return axios
    .post(reCapUrl, {
      secret: reCaptchaSecret,
      response: recaptchaToken
    })
    .then(res => {
      console.log(res);
      if (res.success) {
        // recap sucessed
        // send message
        return axios
          .put(
            pageclipUrl,
            {
              name: body.name,
              email: body.email,
              subject: body.subject,
              message: body.message
            },
            {
              headers: {
                "Content-Type": "application/vnd.pageclip.v1+json"
              },
              auth: {
                username: btoa(pageclipKey),
                password:null,
              }
            }
          )
          .then(res => {
            // message sending sucsessed
            console.log(res);

            return callback(null, {
              statusCode: 200,
              body: JSON.stringify({ msg: "message successfully sent" })
            });
          })
          .catch(e => {
            console.log(e);
            // message sending error
            return callback(null, {
              statusCode: 400,
              body: JSON.stringify({
                status: "message sending error"
              })
            });
          });
      } else {
        // recaptcha check failed
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify({
            status: "recaptcha check failed"
          })
        });
      }
    })
    .catch(e => {
      console.log(e);
      //recaptcha server failed
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          status: "recaptcha server failed"
        })
      });
    });
};
