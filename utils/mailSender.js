const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, // Use 465 if secure is true
            secure: false, 
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        console.log('Email - ', email);
        console.log('Title - ', title);
        console.log('Body - ', body);
        console.log('Transporter - ', transporter);
        const info = await transporter.sendMail({
            from: '"StudyNotion || by Prakash Nayak" <nayakp0604@gmail.com>',
            to: email,
            subject: title,
            html: body
        });
        console.log('Info of sent mail - ', info);

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', email);
    }
}

module.exports = mailSender;