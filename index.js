const express = require('express');
const app = express();
const productsRouter = require('./productsRouter');
const sendEmail = require('./sendEmail'); 

app.use(express.json());

app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const recipientEmail = 'l201334@lhr.nu.edu.pk';
const emailSubject = 'Web Enginering';
const emailText = 'This is a Web Enginering test email';
sendEmail(recipientEmail, emailSubject, emailText);
