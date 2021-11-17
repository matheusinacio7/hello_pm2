import express from 'express';

const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello PM2!' });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
