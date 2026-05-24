const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
})

async function sendEmail (to,subject,html) {
    transporter.sendMail({
        from:process.env.NODEMAILER_USER,
        to,
        subject,
        html
    })
}

module.exports = sendEmail;