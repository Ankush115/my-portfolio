import React from 'react'

export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="logo" href="#top"><span className="accent">Ankush Wagh</span></a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
