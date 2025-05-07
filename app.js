const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/api/user', (req, res) => {
  res.json({ message: 'Welcome to the User API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.put('/User', (req, res) => {
    // Proses untuk memperbarui data pengguna
    res.json({ message: 'User updated successfully' });
  });