import React from 'react'

export default function Hero() {
  return (
    <section className="hero-new">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image">
            <img src="/images/profile.jpg" alt="Ankush Wagh - Frontend Developer" />
          </div>
          <div className="hero-text">
            <h1>Ankush Wagh</h1>
            <p className="title">Frontend Developer</p>
            <p className="subtitle">Building beautiful, responsive web experiences with React, Vite & modern CSS</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com" aria-label="GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/ankush-wagh-bb244b1b2/" aria-label="LinkedIn">LinkedIn</a>
              <a href="mailto:alwagh.45@gmail.com" aria-label="Email">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
