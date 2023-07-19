const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000; // Change this port as needed

app.use(bodyParser.json());

// POST route to send the email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "markcarson121@gmail.com", // Replace with your Gmail email
      pass: "jatgtfjkafaghsxx", // Replace with your Gmail password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "markcarson121@gmail.com", // Replace with your email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
