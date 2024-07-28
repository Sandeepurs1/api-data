const express = require('express');
const app = express();
const port = 810

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('welcome to my server');
});

app.get('/page1', (req, res) => {
  res.send('This is Page 1');
});

app.get('/page2', (req, res) => {
  res.send('This is Page 2');
});

app.get('/page3', (req, res) => {
  res.send('This is Page 3');
});

app.get('/page4', (req, res) => {
  res.send('This is Page 4');
});

// REST API Endpoints
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request to the data endpoint' });
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request to the data endpoint', data });
});

app.put('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.json({ message: `PUT request to the data endpoint for ID ${id}`, data });
});

app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `DELETE request to the data endpoint for ID ${id}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
