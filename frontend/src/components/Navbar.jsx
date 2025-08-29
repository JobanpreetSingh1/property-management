
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl">StayNest</Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink className="text-gray-600 hover:text-gray-900" to="/properties">Properties</NavLink>
          <NavLink className="text-gray-600 hover:text-gray-900" to="/dashboard">Dashboard</NavLink>
          <NavLink className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" to="/login">Login</NavLink>
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  )
}

// MobileMenu component
function MobileMenu({ menuOpen, setMenuOpen }) {
  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <button
        className={`md:hidden text-gray-600 hover:text-gray-900 absolute top-4 right-4 z-20 icon-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        style={{ display: menuOpen ? 'block' : 'none' }}
      >
        {/* Hamburger/Close icon toggled with CSS */}
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
     
      </button>
      <div
        className={`md:hidden fixed inset-0 bg-white z-10 transition-transform duration-200 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav className="flex flex-col gap-4 p-4 justify-center items-center">
          <NavLink className="text-gray-600 hover:text-gray-900" to="/properties" onClick={handleNavClick}>Properties</NavLink>
          <NavLink className="text-gray-600 hover:text-gray-900" to="/dashboard" onClick={handleNavClick}>Dashboard</NavLink>
          <NavLink className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" to="/login" onClick={handleNavClick}>Login</NavLink>
        </nav>
      </div>
    </>
  )
}
