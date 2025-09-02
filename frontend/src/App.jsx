
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Properties from './pages/Properties.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Footer from './components/footer.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
