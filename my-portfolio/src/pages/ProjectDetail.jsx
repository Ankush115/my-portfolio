import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Project Not Found</h1>
            <p>The project you requested could not be found.</p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
        </div>
      </section>

      <section className="section project-detail">
        <div className="container">
          <div className="detail-content">
            <div className="detail-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="detail-body">
              <h2>Project Overview</h2>
              <p>{project.desc}</p>

              <h3>Key Features</h3>
              <ul className="features-list">
                {project.highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h3>My Role</h3>
              <p>{project.role}</p>

              <div className="project-cta">
                {project.url && (
                  <a
                    href={project.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Project
                  </a>
                )}
                {project.repo && project.repo !== "#" && (
                  <a
                    href={project.repo}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
                <Link to="/projects" className="btn btn-outline">
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
