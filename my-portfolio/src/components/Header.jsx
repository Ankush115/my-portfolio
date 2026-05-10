import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link to="/" className="logo"><span className="accent">Ankush Wagh</span></Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
