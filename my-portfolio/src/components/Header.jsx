import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link to="/" className="logo"><span className="accent">Ankush Wagh</span></Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
