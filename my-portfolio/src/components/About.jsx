import React from "react";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-avatar">
                <img
                  src="./images/profile.jpg"
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h3>Frontend Developer</h3>
              <p className="about-tagline">
                I design thoughtful interfaces with clear motion, strong
                accessibility, and fast performance.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span>3.5+</span>
                  <small>Years experience</small>
                </div>
                <div className="about-stat">
                  <span>3+</span>
                  <small>Projects Shipped</small>
                </div>
                <div className="about-stat">
                  <span>100%</span>
                  <small>Responsive design</small>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="about-text">
              I’m a Frontend Developer with over 3.5 years of experience in
              creating websites and web apps using React.js, JavaScript, and
              Redux. I enjoy building fast, clean, and easy-to-use interfaces
              that work well on all devices. I’m good at working with
              React-components, API integration, and improving website
              performance. I follow clean coding practices and always try to
              write code that’s easy to understand and maintain. I work well in
              teams and have experience in Agile environments. I’m always
              looking to learn new things and improve my skills in frontend
              development.
            </p>

            <div className="about-highlight">
              <p>
                I love turning complex ideas into polished digital experiences,
                with a strong focus on clarity, speed, and delightful
                interaction.
              </p>
            </div>

            <h3>Skills</h3>
            <ul className="skills">
              <li>React.JS</li>
              <li>HTML5 &amp; CSS3</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React-Query/Tanstack-Query</li>
              <li>UI design &amp; accessibility</li>
              <li>Redux/Redux Toolkit</li>
              <li>MongoDB</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
