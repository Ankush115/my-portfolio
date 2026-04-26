import React, { useState } from 'react'

const sample = [
  {
    title: 'Micro Insurance Management System',
    desc: "A comprehensive web platform for managing micro-insurance policies, user records, and articles with intuitive dashboards.",
    url: '#',
    repo: '#',
    image: '/images/micro-insurance.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'UI Design'],
    featured: true
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  
  const allTags = [...new Set(sample.flatMap(p => p.tags))]
  const filtered = filter === 'all' ? sample : sample.filter(p => p.tags.includes(filter))

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>Featured Projects</h2>
            <p className="projects-subtitle">Showcasing my best work across different technologies and domains</p>
          </div>
          <div className="projects-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((p, idx) => (
            <article key={p.title} className={`project-card ${p.featured ? 'featured' : ''}`} style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="project-badge">
                {p.featured && <span className="badge featured-badge">Featured</span>}
              </div>
              
              <div className="project-media">
                <img src={p.image || `https://via.placeholder.com/600x360?text=${encodeURIComponent(p.title)}`} alt={p.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <a href={p.url} className="overlay-link" target="_blank" rel="noreferrer">View Project</a>
                  </div>
                </div>
              </div>
              
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                
                <div className="project-tags">
                  {p.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a className="btn btn-primary-small" href={p.url} target="_blank" rel="noreferrer">Live Demo</a>
                  <a className="btn btn-secondary-small" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
