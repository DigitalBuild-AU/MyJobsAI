const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  const { to, subject, body } = req.body;
  
  if (!to || !subject || !body) {
    return res.status(400).send({ message: 'To, subject, and body are required fields.' });
  }
  
  console.log(`Email to: ${to}, Subject: ${subject}, Body: ${body}`);
  res.send({ message: 'Email sent successfully.' });
});

module.exports = router;