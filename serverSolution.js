const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  setTimeout(() => {
    // Simulate an error
    //const error = new Error('Something went wrong!');
    //throw error;
    res.send('Hello World!');
  }, 5000); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});