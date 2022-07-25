import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  date: { type: String, required: true },
  content: {
    goals: [String],
    notes: String,
    timeBox: [String],
  },
});

export default mongoose.model('Plan', planSchema);
