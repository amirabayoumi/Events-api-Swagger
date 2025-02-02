import { Request, Response } from "express";
import {Event} from "../models/EventModel";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getSingleEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
}


export const addNewEvent = async (req: Request, res: Response) => {
  try {
    const { name, date, location, description, isFree } = req.body;
    const event = await Event.create({ name, date, location, description, isFree });
    res.status(201).json(event);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: (err as Error).message });
    }
  }
};


export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, date, location, description, isFree } = req.body;
    const event = await Event.findByIdAndUpdate(id,{ name, date, location, description, isFree }, {
      new: true,
    });
    res.status(200).json(event);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: (err as Error).message });
    }
  }
};


export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    
    if (!event) {
    res.status(404).json({ message: "Event not found" });  
    return;

    }

    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};