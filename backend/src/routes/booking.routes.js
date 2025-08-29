
import { Router } from 'express'
import { requireAuth, requireAdmin } from '../middleware/auth.js'
import { createBooking, myBookings, allBookings, updateBookingStatus } from '../controllers/booking.controller.js'

const r = Router()

r.post('/', requireAuth, createBooking)
r.get('/me', requireAuth, myBookings)
r.get('/', requireAuth, requireAdmin, allBookings)
r.put('/:id', requireAuth, requireAdmin, updateBookingStatus)

export default r
