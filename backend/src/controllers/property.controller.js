
import Property from '../models/Property.js'

export async function createProperty(req, res) {
  try {
    const body = { ...req.body, ownerId: req.user.id }
    const doc = await Property.create(body)
    res.status(201).json({ data: doc })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function listProperties(req, res) {
  try {
    const { location, type, minPrice, maxPrice } = req.query
    const query = {}
    if (location) query.location = new RegExp(location, 'i')
    if (type) query.type = type
    if (minPrice || maxPrice) query.price = {}
    if (minPrice) query.price.$gte = Number(minPrice)
    if (maxPrice) query.price.$lte = Number(maxPrice)
    const data = await Property.find(query).sort({ createdAt: -1 })
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function getProperty(req, res) {
  try {
    const data = await Property.findById(req.params.id)
    if (!data) return res.status(404).json({ error: 'Not found' })
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function updateProperty(req, res) {
  try {
    const data = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ data })
  } catch (e) { res.status(500).json({ error: e.message }) }
}

export async function deleteProperty(req, res) {
  try {
    await Property.findByIdAndDelete(req.params.id)
    res.json({ ok: true })
  } catch (e) { res.status(500).json({ error: e.message }) }
}
