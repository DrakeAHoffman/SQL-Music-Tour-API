const express = require('express');
const { Event } = require('../models'); // Import your Event model

const router = express.Router();

// Route to get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching events' });
  }
});

// Route to create a new event
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    return res.status(201).json(event);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating the event' });
  }
});

// Add more routes as needed


router.get('/', async (req, res) => {
    try {
      const events = await Event.findAll({ order: [['date', 'ASC']] });
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching events' });
    }
  });
  

  
 
router.get('/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
  
    try {
      const event = await Event.findByPk(eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching the event' });
    }
  });

  
router.post('/', async (req, res) => {
    try {
      const event = await Event.create(req.body);
      return res.status(201).json(event);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating the event' });
    }
  });
  

router.put('/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
  
    try {
      const [updatedCount] = await Event.update(req.body, { where: { event_id: eventId } });
      if (updatedCount === 0) {
        return res.status(404).json({ error: 'Event not found' });
      }
      return res.status(200).json({ message: 'Event updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error updating the event' });
    }
  });


router.delete('/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
  
    try {
      const deletedCount = await Event.destroy({ where: { event_id: eventId } });
      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Event not found' });
      }
      return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting the event' });
    }
  });
  
 
 
  
  

module.exports = router;
