
import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <div className="rounded-2xl bg-white shadow hover:shadow-lg transition overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="mt-2 font-bold">₹{property.price}/month</p>
        <Link to={`/properties/${property._id}`} className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-blue-600 text-white">
          View Details
        </Link>
      </div>
    </div>
  )
}
