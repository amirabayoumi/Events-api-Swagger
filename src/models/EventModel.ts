import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isFree: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", EventSchema);

