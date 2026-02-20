import React from 'react'

const sample = [
  {
    title: 'Micro Insurance Management System',
    desc: "The Micro Insurance Management System is a web-based platform designed to simplify and automate the management of micro-insurance policies, user records, and articles",
    url: '#',
    repo: '#',
    image: '/images/micro-insurance.svg'
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {sample.map((p) => (
            <article key={p.title} className="card project-card">
              <div className="project-media" aria-hidden>
                <img src={p.image || `https://via.placeholder.com/600x360?text=${encodeURIComponent(p.title)}`} alt={p.title} />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-links">
                  <a className="btn" href={p.url} target="_blank" rel="noreferrer">Live</a>
                  <a className="btn outline" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
