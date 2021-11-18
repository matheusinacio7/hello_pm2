import express from 'express';

const app = express();
const PORT = process.env.PORT || 3030;
const SECRET = process.env.SECRET || 'not defined';

const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

class BigArray {
  constructor() {
    this.arr = [];
  }

  get length() {
    return this.arr.length;
  }

  increaseArraySizeBy(sizeIncrease) {
    for (let i = 0; i < sizeIncrease; i++) {
      this.arr.push(Math.random() * 10000000);
    }
  }
}

(async () => {
  const myBigArray = new BigArray();

  app.get('/', (_req, res) => {
    res.status(200).json({ message: 'Hello PM2!', arraySize: myBigArray.length });
  });

  app.get('/grow/:amount', (req, res) => {
    const { amount } = req.params;
    myBigArray.increaseArraySizeBy(amount);
    console.log(`Increased array size by ${amount}`);
    res.status(200).json({ message: `Increased array size by ${amount}` });
  });

  app.get('/secret', (_req, res) => {
    res.status(200).json({ message: `The SUPER secret is: ${SECRET}` });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
  });
})();
