// backend/index.js
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Backend service is running on http://localhost:${PORT}`);
});

