var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dongle2606@gmail.com',
        pass: 'fyaqzctxgrfwqjxu'
    }
});

var mailOptions = {
    from: 'dongle2606@gmail.com',
    to: 'travanluandn@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy1111!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});