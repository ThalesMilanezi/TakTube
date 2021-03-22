import express from 'express';

const app = express();
app.listen(5000, () => {
  console.log('server running');
});
app.use(express.json());
