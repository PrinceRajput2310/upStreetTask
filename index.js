const { response } = require('express');
const http = require('http'),
  axios = require('axios'),
import {dobUserValidation,validateUserName,validateStateOfIssue} from "./UserValidation/userValidation";
  userInfo = require("./model/userInfo");

const API_Key = "03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf";

http.createServer(function (req, res) {

  // Api call for getting user kyc data
  if (req.url === "/userdata") {

    axios.post('https://australia-southeast1-reporting-290bc.cloudfunctions.net/driverlicence', {
      "birthDate": "1985-02-08",
      "givenName": "James",
      "middleName": "Robert",
      "familyName": "Smith",
      "licenceNumber": "94977000",
      "stateOfIssue": "NSW",
      "expiryDate": "2020-01-01"
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_Key}`
      }
    })
      .then(response => {
        console.log(response.data)
        console.log(response.data.verificationResultCode);
        const apiKycData=response.data.verificationResultCode;
      //  console.log(apiKycData);
        
    if (apiKycData === "Y") {
      console.log("kycResult: true");
    }
    else if (apiKycData === "N") {
   /*   return {
        "kycResult": "false"
      }  */
      console.log("kycResult: false");
    }
    else if (apiKycData === "D" || "S") {
      /*
      return {
        "Code": `"D" or "S"`,
        "message": `"Document Error" or "Server Error"`
      }  */
      console.log("message: Document Error or Server Error ")
    }
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  // const apiKycData=response.data.verificationResultCode;
   

  res.end(); //end the response
}).listen(5000, function () {
  console.log("server start at port 5000");
});


