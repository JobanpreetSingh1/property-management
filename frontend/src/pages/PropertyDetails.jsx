
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function PropertyDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/properties/${id}`)
        setItem(data.data)
      } catch {
        setItem({ title: 'Sample Property', location: 'Delhi', price: 18000, description: 'Spacious 2BHK near metro.', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop' })
      }
    }
    fetchOne()
  }, [id])

  if (!item) return <p>Loading...</p>

  return (
    <section className="grid md:grid-cols-2 gap-6">
      <img src={item.image} alt={item.title} className="w-full h-80 object-cover rounded-2xl" />
      <div>
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <p className="text-gray-600">{item.location}</p>
        <p className="text-2xl font-extrabold mt-2">₹{item.price}/month</p>
        <p className="mt-4">{item.description}</p>
        <button className="mt-6 px-4 py-2 rounded-xl bg-blue-600 text-white">Book Now</button>
      </div>
    </section>
  )
}
