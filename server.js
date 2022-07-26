import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const app = express();
const __dirname = path.resolve();
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
  console.log('Connected to database');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(__dirname));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

app.use(express.json({ limit: '1mb' })); // allow bigger file transfers
app.use(express.urlencoded({ limit: '1mb', extended: true })); // allow bigger file transfers
app.use(cors({ origin: '*' }));

import planRouter from './src/routes/plan.js';
app.use('/api/plan', planRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  if (process.send) {
    process.send('online');
  }
  console.log('Server has started on port ' + port);
});
