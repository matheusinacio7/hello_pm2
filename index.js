import express from 'express';

const app = express();
const PORT = process.env.PORT || 3030;

const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

(async () => {
  await sleep(5000);

  app.get('/', (_req, res) => {
    res.status(200).json({ message: 'Hello PM2!' });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
  });
})();
