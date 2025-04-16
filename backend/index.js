import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message, subject, droneDetail } = req.body;

    // Check required fields
    if (!name || !email || !message || !subject) {
        return res.status(400).json({ error: 'Name, email, message, and subject are required.' });
    }

    // Drone detail is required only for Drone Mapping subject
    if (subject === 'Drone Mapping' && !droneDetail) {
        return res.status(400).json({ error: 'Drone details are required for Drone Mapping inquiries.' });
    }

    // Validate phone if provided
    if (phone && (phone.length < 11 || phone.length > 14)) {
        return res.status(400).json({ error: 'Invalid phone number.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    // Ensure message has at least 10 characters
    if (message.length < 10) {
        return res.status(400).json({ error: 'Message must be at least 10 characters long.' });
    }
    
    try {
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
         port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
        });
    
        const mailOptions = {
        from: email,
        to: 'babatundebolu@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
          <h2 style="color: #4CAF50;">Enquiry from ${name} </h2>
          <p style="color: #555;">Someone just submitted a form on your website:</p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
              <h2>New Contact Form Submission</h2>
        <h3><strong>Name:</strong> ${name}</h3>
        <h3><strong>Email:</strong> ${email}</h3>
        ${phone ? `<h3><strong>Phone:</strong> ${phone}</h3>` : ''}
        <h3><strong>Subject:</strong> ${subject}</h3>
        ${droneDetail ? `<p><strong>Drone Details:</strong> ${droneDetail}</p>` : ''}
        <h3><strong>Message:</strong></h3>
        <h3>${message}</h3>
          </div>
        </div>
      `
    };
    
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', response: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Handle any errors that occur during the email sending process
        return res.status(500).json({ status: 'failed', response: `Mailer Error: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  