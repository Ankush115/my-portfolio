import React from 'react'

export default function ProjectDetail() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Micro Insurance Management System</h1>
          <p>A comprehensive web platform for managing micro-insurance policies</p>
        </div>
      </section>

      <section className="section project-detail">
        <div className="container">
          <div className="detail-content">
            <div className="detail-image">
              <img src="/images/micro-insurance.svg" alt="Micro Insurance Management System" />
            </div>

            <div className="detail-body">
              <h2>Project Overview</h2>
              <p>
                The Micro Insurance Management System is a comprehensive web-based platform designed to simplify and automate the management of micro-insurance policies, user records, and articles. It provides an intuitive interface for managing complex insurance operations with ease.
              </p>

              <h3>Key Features</h3>
              <ul className="features-list">
                <li>Policy Management - Create, update, and manage insurance policies efficiently</li>
                <li>User Profiles - Comprehensive customer profile management system</li>
                <li>Document Management - Upload and organize insurance documents</li>
                <li>Real-time Analytics - Interactive dashboards with key metrics</li>
                <li>Secure Authentication - Enterprise-grade security</li>
                <li>Responsive Design - Works seamlessly on all devices</li>
              </ul>

              <h3>Technologies Used</h3>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>JWT Authentication</span>
                <span>Vite</span>
              </div>

              <h3>My Role</h3>
              <p>
                Designed and developed the complete frontend interface with React, implemented responsive UI components, and collaborated with backend developers to integrate APIs. Focused on user experience and accessibility throughout the development process.
              </p>

              <div className="project-cta">
                <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">
                  View Live Project
                </a>
                <a href="#" className="btn btn-secondary" target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
