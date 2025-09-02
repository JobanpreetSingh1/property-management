
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard.jsx'
import Search from '../components/Search.jsx';


const sample = [
  { _id: '1', title: '2BHK in Delhi', location: 'Delhi', price: 18000, image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop' },
  { _id: '2', title: 'Studio in Mumbai', location: 'Mumbai', price: 22000, image: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1200&auto=format&fit=crop' },
  { _id: '3', title: 'Villa in Goa', location: 'Goa', price: 55000, image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop' },
]

export default function Home() {
  return (
    <section>
      <div className="text-center py-10">
        <Search />

        <h1 className="text-4xl font-extrabold">Find Your Perfect Property</h1>
        <p className="text-gray-600 mt-2">Browse listings, book instantly, and manage your stays.</p>
        <Link to="/properties" className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white">Explore Properties</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map(p => <PropertyCard key={p._id} property={p} />)}
      </div>
    </section>
  )
}
