const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

if (require.main === module) {
  app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
  });
}

module.exports = app;


