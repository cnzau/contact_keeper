const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact keeper API...' })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.timeLog(`Server started on port ${PORT}`));
