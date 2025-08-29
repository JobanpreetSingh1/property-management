
export default function Dashboard() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-semibold">My Bookings</h3>
        <p className="text-gray-600 text-sm mt-2">Bookings will appear here.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-semibold">Saved Properties</h3>
        <p className="text-gray-600 text-sm mt-2">Save properties for later.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-semibold">Profile</h3>
        <p className="text-gray-600 text-sm mt-2">Manage your profile and settings.</p>
      </div>
    </section>
  )
}
