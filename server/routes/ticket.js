const router = require("express").Router();
const Ticket = require("../models/Ticket");

//CREATE TICKET
router.post("/", async (req, res) => {
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    return res.status(200).json(savedTicket);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE TICKET
router.put("/:id", async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedTicket);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE TICKET
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    await ticket.delete();
    return res.status(200).json("Ticket has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET TICKET
router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    return res.status(200).json(ticket);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL TICKET
router.get("/", async (req, res) => {
  try {
    let tickets;
    tickets = await Ticket.find();
    return res.status(200).json(tickets);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PATCH TICKET
router.patch("/:id", async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, {
      $push: req.body,
    });
    return res.status(200).json(updatedTicket);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
