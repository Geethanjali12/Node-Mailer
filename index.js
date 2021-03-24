const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rubanshanthi24@gmail.com',
        pass: 'ebjkrrgpurvlaeua'
    }
});
  
let mailDetails = {
    from: 'rubanshanthi24@gmail.com',
    to: 'geethanjaliganesan9419@gmail.com',
    subject: 'Test mail',
    html: '<p>Node.js testing mail </p>'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
