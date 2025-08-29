
import { useEffect, useState } from 'react'
import axios from 'axios'
import PropertyCard from '../components/PropertyCard.jsx'

export default function Properties() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_API_URL + '/properties')
        setItems(data.data || [])
      } catch (e) {
        // fallback to sample if API not ready
        setItems([
          { _id: '1', title: 'Sample 2BHK', location: 'Delhi', price: 18000, image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop' }
        ])
      }
    }
    load()
  }, [])

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">All Properties</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => <PropertyCard key={p._id} property={p} />)}
      </div>
    </section>
  )
}
