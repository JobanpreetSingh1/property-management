
import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import { createProperty, listProperties, getProperty, updateProperty, deleteProperty } from '../controllers/property.controller.js'

const r = Router()

r.get('/', listProperties)
r.get('/:id', getProperty)
r.post('/', requireAuth, createProperty)
r.put('/:id', requireAuth, updateProperty)
r.delete('/:id', requireAuth, deleteProperty)

export default r
