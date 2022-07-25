import express from 'express';
const router = express.Router();

import Plan from '../models/plan.js';

router.get('/', async (req, res) => {
  const date = req.params.date;
  try {
    const plan = await Plan.findOne({ date });
    if (!plan) {
      return res.status(400).send();
    }
    res.status(201).send(plan);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

router.put('/', async (req, res) => {
  const newPlan = new Plan({
    date: req.body.date,
    content: req.body.content,
  });
  try {
    Plan.findOne({ date: newPlan.date }, async (err, oldPlan) => {
      if (err || !oldPlan) {
        // if plan for date does not exist, save new
        try {
          await newPlan.save();
          res.status(201).send();
        } catch (err) {
          res.status(400).send();
        }
      } else {
        // if plan for date exists, update old
        try {
          oldPlan.content = newPlan.content;

          await oldPlan.save();
          res.status(201).send();
        } catch (err) {
          res.status(400).send();
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

export default router;
