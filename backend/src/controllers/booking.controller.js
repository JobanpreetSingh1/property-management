
import Booking from '../models/Booking.js'

export async function createBooking(req, res) {
  try {
    const { propertyId } = req.body
    const doc = await Booking.create({ propertyId, userId: req.user.id })
    res.status(201).json({ data: doc })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function myBookings(req, res) {
  try {
    const data = await Booking.find({ userId: req.user.id }).populate('propertyId')
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function allBookings(_req, res) {
  try {
    const data = await Booking.find().populate('propertyId').populate('userId')
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function updateBookingStatus(req, res) {
  try {
    const { status } = req.body
    const data = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true })
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}
