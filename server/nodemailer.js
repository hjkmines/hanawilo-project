const nodemailer = require('nodemailer');

// transporter sends emails --> this is us
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hanawiloedge1@gmail.com',
        pass: 'Hanaw!lo12'
    }
});

let mailDetails = {
    from: 'hanawiloedge1@gmail.com',
    to: 'uvmaineng@gmail.com, jordjamestaylor@gmail.com',
    subject: 'Test Email',
    html: '<p>Hello from Mai and Jordan!</p>'
};

// callback function fires when email sends/fails
mailTransporter.sendMail(mailDetails, (err, data)=> {
    if(err){
        console.log('MAILER ERROR: ', err);
    }else{
        console.log('EMAIL SENT! ', data);
    }
});