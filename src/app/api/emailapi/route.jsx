import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, phone, msg, IP, Date, Page, Brand } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'aziz.rehman@productions-dev.com',
                pass: "ctfhepafurmhrnmt"
            }
        });

        const mailOptions = {
            from: "aziz.rehman@productions-dev.com",
            to: "aziz.rehman@productions-dev.com",
            subject: 'Contact Form Submission',
            html: `
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${msg}</p>
                <p><strong>Date:</strong> ${Date}</p>
                <p><strong>Page:</strong> ${Page}</p>
                <p><strong>Brand:</strong> ${Brand}</p>
                <p><strong>Location:</strong> ${IP}</p>
            `
        };

        const confirmationMailOptions = {
            from: "aziz.rehman@productions-dev.com",
            to: email,
            subject: 'Thank You for Contacting Us!',
            html: `
                <h2>Thank You, ${name}!</h2>
                <p>We appreciate you reaching out to us. We have received your message and our team will get back to you as soon as possible.</p>
                <p>If you need immediate assistance, feel free to reply to this email.</p>
                <br>
                <p>Best Regards,<br>
                 Your <strong>${Brand}</strong></p>
            `
        };
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
}
