import express from 'express';

const app = express();
const PORT = process.env.PORT || 3080;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'hehe :cunning:' });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
