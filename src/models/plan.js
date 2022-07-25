import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  content: {
    goals: {
      goalOne: String,
      goalTwo: String,
      goalThree: String,
    },
    notes: String,
    timebox: [String],
  },
});

export default mongoose.model('Plan', planSchema);
