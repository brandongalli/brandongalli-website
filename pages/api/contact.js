import nodemailer from 'nodemailer';

const transporter = {
    auth: {
        // Update the SendGrid API key here
        api_key: '###'
    }
}

const mailer = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD
    }
});

export default async (req, res) => {
    const {name, email, number, subject, text} = req.body;
    const data = {
        // Update the email address here
        to: 'brandongalli32@gmail.com',
        from: email,
        subject: 'Email from Website',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        ` 
    };
    try {
        const response = await mailer.sendMail(data);
        res.status(200).send("Email send successfully")
    } catch (error) {
        res.status(500).send("Error proccessing charge");
    }
}
