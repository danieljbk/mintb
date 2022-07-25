import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.status(200).send('yo');
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

export default router;
