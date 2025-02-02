import express from "express";

import {
  getAllEvents,
  getSingleEventById,
  addNewEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventsController";
const router = express.Router();
/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       500:
 *         description: Server error
 * 
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 * 
 * /events/{id}:
 *   get:
 *     summary: Get a single event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 * 
 *   put:
 *     summary: Update an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Event updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       400:
 *         description: Validation error
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to delete
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 * 
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the event
 *         name:
 *           type: string
 *           description: Name of the event
 *         date:
 *           type: string
 *           format: date-time
 *           description: Date and time of the event
 *         location:
 *           type: string
 *           description: Location of the event
 *         description:
 *           type: string
 *           description: Detailed event description
 */

router
  .get("/", getAllEvents)
  .get("/:id", getSingleEventById)
  .post("/", addNewEvent)
  .put("/:id", updateEvent)
  .delete("/:id", deleteEvent);

export default router;
