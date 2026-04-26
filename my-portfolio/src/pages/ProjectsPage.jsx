import React from 'react'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>My Projects</h1>
          <p>Showcasing my best work and professional experience</p>
        </div>
      </section>
      <Projects />
    </main>
  )
}
