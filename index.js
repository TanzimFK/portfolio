const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

