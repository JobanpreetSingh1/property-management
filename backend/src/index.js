
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDB } from './utils/db.js'
import authRoutes from './routes/auth.routes.js'
import propertyRoutes from './routes/property.routes.js'
import bookingRoutes from './routes/booking.routes.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_req, res) => res.json({ ok: true, name: 'StayNest API' }))

app.use('/api/auth', authRoutes)
app.use('/api/properties', propertyRoutes)
app.use('/api/bookings', bookingRoutes)

const PORT = process.env.PORT || 4000
connectDB().then(() => {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
})
