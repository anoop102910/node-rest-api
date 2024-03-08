const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});